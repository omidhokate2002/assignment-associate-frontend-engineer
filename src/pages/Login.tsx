import { Link, useNavigate } from "react-router-dom";

import google from "../assets/google.svg";
import LoginNavbar from "../components/Login/LoginNavbar";
import Footer from "../components/Onebox/Footer";

function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Redirect user based on token presence
  if (token) {
    navigate("/");
  } else {
    navigate("/login");
  }

  const handleGoogleLogin = () => {
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://assignment-associate-frontend-engineer.vercel.app/";
  };

  return (
    <div>
      <LoginNavbar />
      <div className='bg-black text-white w-screen h-screen flex flex-col justify-center items-center'>
        <div className='bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]'>
          <div className='text-xl font-semibold mt-6'>Create a new account</div>
          <div
            className='mt-6 border-white/40 border px-20 py-2 text-sm flex items-center text-[#CCCCCC] rounded-lg cursor-pointer'
            onClick={handleGoogleLogin}
          >
            <img src={google} alt='Google Logo' className='w-4 mr-3' />
            Sign Up with Google
          </div>
          <div className='mt-5'>
            <Link
              to='/login'
              className='bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 px-6 text-sm py-3 rounded-md cursor-pointer'
            >
              Create an Account
            </Link>
            <div className='my-8 mb-10 text-[#909296]'>
              Already have an account?{" "}
              <Link to='/signin' className='text-[#C1C2C5]'>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
