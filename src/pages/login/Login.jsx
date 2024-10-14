import Container from "@/LayOut/Container";
import img from '../../assets/consultation/layout.jpg';
import { Link, useNavigate } from "react-router-dom";
import googleImg from "../../assets/google.png";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card"; 
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "@/firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider/AuthProvider";
import { Label } from "@/components/ui/label";

const auth = getAuth(app);

const Login = () => {
  const { SignInEmailAndPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/';

  const provider = new GoogleAuthProvider();

  const handleSignIN = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    SignInEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Section */}
          <div className="text-center lg:text-left max-w-sm ml-48">
            <h1 className="text-5xl font-extrabold text-teal-500">Login now!</h1>
            <p className="py-6">
              Empowering Health, Enlightening Choice - Your Prescription for Informed Savings.
            </p>
            <Button
              variant="outline"
              onClick={handleLoginWithGoogle}
              className="gap-3 w-full"
            >
              <img className="h-6 w-6" src={googleImg} alt="Google" />
              <span>Continue with Google</span>
            </Button>
          </div>

          {/* Right Section - Login Form */}
          <Card className="w-full max-w-sm shadow-2xl p-6">
            <form onSubmit={handleSignIN}>
              <div className="space-y-4">
                <div className="form-control">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" placeholder="Email" required />
                </div>

                <div className="form-control">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <Button type="submit" className="w-full bg-teal-400 hover:bg-teal-500">
                    Login
                  </Button>
                </div>

                <div className="form-control mt-4 text-center">
                  <Link to="/register" className="text-sm text-gray-500 hover:underline">
                    Create an account..
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

export default Login;
