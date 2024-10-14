import Container from '@/LayOut/Container';
import img from '../../../assets/consultation/layout.jpg';
import { Button } from '@/components/ui/button'; // Make sure you have a ShadCN button here
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '@/firebase/firebase.config';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input'; // Import ShadCN Input component
import { Card } from '@/components/ui/card'; // Import ShadCN Card component
import googleImg from "../../../assets/google.png";
import { AuthContext } from '@/context/AuthProvider/AuthProvider';
import { Label } from '@/components/ui/label';

const auth = getAuth(app);

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.fName.value;
    const lName = form.lName.value;
    const email = form.email.value;
    const password = form.password.value;

      console.log(fName, lName);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGooglepopUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Container className="">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Section */}
          <div className="text-center lg:text-left max-w-sm ml-48">
            <h1 className="text-5xl font-extrabold text-teal-500">Please Register</h1>
            <p className="py-6">Empowering Health, Enlightening Choice - Your Prescription for Informed Savings.</p>
            <Button variant="outline" onClick={handleGooglepopUp} className="gap-3 w-full">
              <img className="h-6 w-6" src={googleImg} alt="Google" />
              <span>Continue with Google</span>
            </Button>
          </div>

          {/* Right Section - Registration Form */}
          <Card className="w-full max-w-sm shadow-2xl p-6 ">
            <form onSubmit={handleRegister}>
              <div className="space-y-4">
                <div className="form-control">
                  <Label htmlFor="fName">First Name</Label>
                  <Input type="text" id="fName" name="fName" placeholder="First Name" required />
                </div>

                <div className="form-control">
                  <Label htmlFor="lName">Last Name</Label>
                  <Input type="text" id="lName" name="lName" placeholder="Last Name" required />
                </div>

                <div className="form-control">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" placeholder="Email" required />
                </div>

                <div className="form-control">
                  <Label htmlFor="password">Password</Label>
                  <Input type="password" id="password" name="password" placeholder="Password" required />
                </div>

                <div className="form-control mt-6">
                  <Button type="submit" className="w-full bg-teal-400 hover:bg-teal-500">Register</Button>
                </div>

                <div className="form-control mt-4 text-center">
                  <Link to="/login" className="text-sm text-gray-500 hover:underline">
                    Already have an account? Log in.
                  </Link>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Register;
