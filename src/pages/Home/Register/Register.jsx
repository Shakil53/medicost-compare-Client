import Container from '@/LayOut/Container';
import img from '../../../assets/consultation/layout.jpg';
import { Button } from '@/components/ui/button';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import googleImg from "../../../assets/google.png";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '@/firebase/firebase.config';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '@/contexts/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(app);


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  // const captchaRef = useRef(null);
  // const [disable, setDisable] = useState(true)
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
    .catch(error => console.error(error))

  }



  // useEffect(() => {
  //     loadCaptchaEnginge(6); 
  // }, [])

//   const handleValidateCaptcha = ()=> {

//       const user_captcha_value = captchaRef.current.value;
//       console.log("Captcha value:",user_captcha_value);
//     if (validateCaptcha(user_captcha_value)) {
//         console.log('captcha is valid');
//           setDisable(false)
//       }
//       else {
//           setDisable(true)
//       }

//   navigate(from, { replace: true });

// }
  

  const handleGooglepopUp = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        
      })
    .catch(error => console.error(error))
  }



  return (
    <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <Container className=''>
        <div className="hero-content flex-col lg:flex-row mt-0">
          <div className="text-center lg:text-left max-w-sm">
                        <h1 className="text-5xl font-extrabold text-teal-500">Please Register</h1>
                        <p className="py-6">Empowering Health, Enlightening Choice - Your Prescription for Informed Savings.</p>
                        <Button variant="outline" onClick={handleGooglepopUp} className="gap-3 btn-wide font-bold"><span className="text-[#4285f4]  flex items-center"><img className="size-6" src={googleImg}></img></span><span className="text-gray-500">Continue with Google...</span></Button>
          </div>
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
      <label className="label">
        <span className="label-text">First Name</span>
      </label>
      <input type="text" name="fName" placeholder="first name" className="input input-bordered" required />
    </div>
    {/* last name------------- */}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Last Name</span>
      </label>
      <input type="text" name="lName" placeholder="last name" className="input input-bordered" required />
    </div>
    {/* email------------- */}
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      
              </div>

{/* 
              <div className="form-control">
                <label className="label">
                  <span><LoadCanvasTemplate></LoadCanvasTemplate></span>
                </label>
           
                <label>
                  <span className="label-text">Captcha</span>
                </label>
     
                  <input type="text" name="captcha" onChange={handleValidateCaptcha} ref={captchaRef} placeholder="type the text above" className="input input-bordered mt-2" required />
                  <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
      
              </div> */}


        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Register" />
              </div>
            <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
          </label>
              
          </form>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Register;