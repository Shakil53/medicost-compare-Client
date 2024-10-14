/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/LayOut/Container";
import img from '../../assets/consultation/layout.jpg';
import { Link, useNavigate } from "react-router-dom";
import googleImg from "../../assets/google.png";
import { Button } from "@/components/ui/button";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "@/firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthProvider/AuthProvider";


const auth = getAuth(app)

const Login = () => {
 const {SignInEmailAndPassword} = useContext(AuthContext)

  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  const provider = new GoogleAuthProvider();

  const handleSignIN = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    SignInEmailAndPassword(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
    .catch(error => console.error(error))
  }


  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        navigate(from, { replace: true });

      })
    .catch(error => console.error(error))
  }
  

    return (
       <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
            <Container className="">
            <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left max-w-sm">
      <h1 className="text-5xl font-extrabold text-teal-500">Login now!</h1>
              <p className="py-6">Empowering Health, Enlightening Choice - Your Prescription for Informed Savings.</p>
              <Button variant="outline"
                onClick={handleLoginWithGoogle}
                className="gap-3 btn-wide font-bold"><span className="text-[#4285f4]  flex items-center"><img className="size-6" src={googleImg}></img></span><span className="text-gray-500">Continue with Google...</span></Button>
             
    </div>
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSignIN} className="card-body">
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
        
        
        <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login" />
        </div>
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">Create an account..</Link>
          </label>
      </form>
    </div>
  </div>
            </Container>
        </div>
       
    );
};

export default Login;