import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';


    const handleSingUp = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await createUser(email, password);
            await updateUserProfile(name, photoURL);
            const createdAt = result?.user?.metadata?.creationTime;
            const userInfo = { name, photoURL, email, password, createdAt };

            const res = await axios.post('https://vegist-server-one.vercel.app/user', userInfo);

            if (res.data?.insertedId) {
                toast.success('👦🏻 Sign up successfully!', {
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
                navigate(from, { replace: true });
            }
        } catch (error) {
            console.error("Error:", error);

            let errorMessage = "An error occurred!";
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = "This email is already in use. Please use a different email.";
            } else if (error.code === 'auth/weak-password') {
                errorMessage = "The password is too weak. Please choose a stronger password.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "The email address is not valid. Please check your email.";
            }

            toast.error(`🚨 ${errorMessage}`, {
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
    };

    return (
        <div style={{
            backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/banner/banner2.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="py-16 max-w-[900px] mx-auto p-4 ">
                <Helmet>
                    <title>Vegist || Sing Up</title>
                </Helmet>
                <h2 className="text-center text-3xl font-bold">Please Sign Up</h2>
                <div className="border-2 border-[#f5ab1e]  flex md:flex-row flex-col-reverse justify-between md:gap-10 gap-2 shadow-lg shadow-[#7cc000] rounded-lg mt-10 bg-opacity-10 bg-gray-400 backdrop-filter backdrop-blur-lg">
                    <div className="flex-1 md:p-10 p-6">
                        <form onSubmit={handleSingUp}>
                            {/* name */}
                            <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000]">
                                <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/256/6250/6250108.png" alt="" />
                                <input name="name" required className="border-none focus:outline-none px-2 w-full bg-[#ebeff0]" type="text" placeholder="Name" />
                            </div>

                            {/* photo URL */}
                            <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
                                <img className="w-[30px]" src="https://cdn-icons-png.freepik.com/256/2499/2499303.png?semt=ais_hybrid" alt="" />
                                <input name="photoURL" required className="border-none focus:outline-none px-2 w-full bg-[#ebeff0]" type="text" placeholder="Image URL" />
                            </div>

                            {/* email */}
                            <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
                                <img className="w-[30px]" src="https://freepngimg.com/save/64685-box-icons-symbol-computer-address-email-gmail/1600x1600" alt="" />
                                <input name="email" required className="border-none focus:outline-none px-2 w-full bg-[#ebeff0]" type="email" placeholder="Email" />
                            </div>

                            {/* password */}
                            <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
                                <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="" />
                                <input name="password" required className="border-none focus:outline-none px-2 w-full bg-[#e9edee]" type="password" placeholder="Password" />
                            </div>
                            <button type="submit" className="mt-6 border-2 border-[#7cc000] rounded-lg py-2 w-full text-xl font-medium hover:bg-[#7cc000]">Sign Up</button>

                            <h2 className="mt-2 text-right pr-4">Already have an account <Link to='/signIn' className="underline font-bold text-[#7cc000]">Sing In</Link>
                            </h2>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <img className="md:w-full  w-[200px] object-cover" src="https://cdni.iconscout.com/illustration/premium/thumb/create-account-illustration-download-in-svg-png-gif-file-formats--user-add-profile-login-business-bubble-pack-illustrations-6110939.png?f=webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;