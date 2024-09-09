import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import SocialLogin from "./SocialLogin";


const SignIn = () => {

  const {signIn } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';


  const handleSingIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(res => {
        console.log(res.user);
        toast.success('👦🏻 Sing In successfully!', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate(from , { replace : true });
      })
      .catch(error => {
        let errorMessage = "An error occurred during sign-in. Please try again!";
        if (error.code === 'auth/invalid-email') {
          errorMessage = "The email address is badly formatted. Please try again!";
        } else if (error.code === 'auth/wrong-password') {
          errorMessage = "The password is incorrect. Please try again!";
        } else if (error.code === 'auth/user-not-found') {
          errorMessage = "No user found with this email. Please try again!";
        } else if (error.code === 'auth/invalid-credential') {
          errorMessage = "The credentials provided are invalid. Please try again!";
        }

        console.error("Error adding user to the database:", error);
        toast.error(`🚨 ${errorMessage}`, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }

  return (
    <div style={{
      backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/banner/banner2.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
  }}>
    <div className="py-16 max-w-[900px] mx-auto px-4">
      <Helmet>
        <title>Vegist || Sing In</title>
      </Helmet>
      <h2 className="text-center text-3xl font-bold">Sign In</h2>
      <div className="border-2 border-[#f5ab1e]  flex md:flex-row flex-col-reverse justify-between md:gap-10 gap-2 shadow-lg shadow-[#7cc000] rounded-lg mt-10 bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg">
        <div className="flex-1 md:p-10 p-6 ">
          <form onSubmit={handleSingIn}>

            {/* email */}
            <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000]">
              <img className="w-[30px]" src="https://freepngimg.com/save/64685-box-icons-symbol-computer-address-email-gmail/1600x1600" alt="" />
              <input name="email" className="border-none focus:outline-none px-2 w-full bg-white" type="email" required placeholder="Email" />
            </div>

            {/* password */}
            <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
              <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="" />
              <input name="password" className="border-none focus:outline-none px-2 w-full" type="password" required placeholder="Password" />
            </div>

            {/* sing in button */}
            <button className="mt-6 border-2 border-[#7cc000] rounded-lg py-2 w-full text-xl font-medium hover:bg-[#7cc000]">Sign In</button>

            <h2 className="mt-2 text-right pr-4">Don't have an account <Link to='/singUp' className="underline font-bold text-[#7cc000]">Sing Up</Link>
            </h2>
          </form>
          <SocialLogin></SocialLogin>
        </div>
        <div className="flex-1">
          <img className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/1172503/screenshots/4505740/login-form.gif" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;