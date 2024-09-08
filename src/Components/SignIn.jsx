import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";


const SignIn = () => {

  const { googleAuth, signIn } = useContext(AuthContext)
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


  const handleGoogleLogIn = () => {
    googleAuth()
      .then(res => {
        if (res.user) {
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
        }
        navigate(from , { replace : true });
      })
      .catch(error => {
        console.log(error);
        toast.error('🚨 Error creating user!', {
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
      })
  }



  return (
    <div className="my-16 max-w-[900px] mx-auto">
      <Helmet>
        <title>Vegist || Sing In</title>
      </Helmet>
      <h2 className="text-center text-3xl font-bold">Sign In</h2>
      <div className="border-2 border-[#f5ab1e]  flex justify-between gap-10 shadow-lg shadow-[#7cc000] rounded-lg mt-10">
        <div className="flex-1 p-10">
          <form onSubmit={handleSingIn}>

            {/* email */}
            <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000]">
              <img className="w-[30px]" src="https://freepngimg.com/save/64685-box-icons-symbol-computer-address-email-gmail/1600x1600" alt="" />
              <input name="email" className="border-none focus:outline-none px-2 w-full" type="email" required placeholder="Email" />
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
          <div>
            <button onClick={handleGoogleLogIn} className="border btn mt-8"><img className="w-[30px]" src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png" alt="" /> Continue with Google</button>
          </div>
        </div>
        <div className="flex-1">
          <img className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/1172503/screenshots/4505740/login-form.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;