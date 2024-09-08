import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const SignUp = () => {
    const { createUser, googleAuth, updateUserProfile } = useContext(AuthContext)
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

            const res = await axios.post('https://vegist-server.vercel.app/user', userInfo);

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
                navigate(from, { replace: true })
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
                <title>Vegist || Sing Up</title>
            </Helmet>
            <h2 className="text-center text-3xl font-bold">Please Sign Up</h2>
            <div className="border-2 border-[#f5ab1e]  flex justify-between gap-10 shadow-lg shadow-[#7cc000] rounded-lg mt-10">
                <div className="flex-1 p-10">
                    <form onSubmit={handleSingUp}>
                        {/* name */}
                        <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000]">
                            <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/256/6250/6250108.png" alt="" />
                            <input name="name" required className="border-none focus:outline-none px-2 w-full" type="text" placeholder="Name" />
                        </div>

                        {/* photo URL */}
                        <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
                            <img className="w-[30px]" src="https://cdn-icons-png.freepik.com/256/2499/2499303.png?semt=ais_hybrid" alt="" />
                            <input name="photoURL" required className="border-none focus:outline-none px-2 w-full" type="text" placeholder="Image URL" />
                        </div>

                        {/* email */}
                        <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
                            <img className="w-[30px]" src="https://freepngimg.com/save/64685-box-icons-symbol-computer-address-email-gmail/1600x1600" alt="" />
                            <input name="email" required className="border-none focus:outline-none px-2 w-full" type="email" placeholder="Email" />
                        </div>

                        {/* password */}
                        <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
                            <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="" />
                            <input name="password" required className="border-none focus:outline-none px-2 w-full" type="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="mt-6 border-2 border-[#7cc000] rounded-lg py-2 w-full text-xl font-medium hover:bg-[#7cc000]">Sign Up</button>

                        <h2 className="mt-2 text-right pr-4">Already have an account <Link to='/signIn' className="underline font-bold text-[#7cc000]">Sing In</Link>
                        </h2>
                    </form>
                    <div>
                        <button onClick={handleGoogleLogIn} className="border btn mt-8"><img className="w-[30px]" src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png" alt="" /> Continue with Google</button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img className="w-full " src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;