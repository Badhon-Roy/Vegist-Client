import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLogin = () => {
    const { googleAuth } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';


    const handleGoogleLogIn = async () => {
        try {
            const res = await googleAuth();
            const createdAt = res?.user?.metadata?.creationTime;
            const userInfo = {
                name: res?.user?.displayName,
                photoURL: res?.user?.photoURL,
                email: res?.user?.email,
                password: res?.user?.password || 0,
                createdAt
            };
            const result = await axios.post('https://vegist-server-one.vercel.app/user', userInfo);

            if (result.data?.insertedId) {
                toast.success('👦🏻 New user added and signed in successfully!', {
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
            } else if (result.data?.massage === "user already exists") {
                toast.success('👦🏻 Signed in successfully!', {
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
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Error during Google sign-in:', error);
            toast.error('🚨 Something went wrong. Please try again!', {
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
        <div>
            <button onClick={handleGoogleLogIn} className="border btn mt-8"><img className="w-[30px]" src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png" alt="" /> Continue with Google</button>
        </div>
    );
};

export default SocialLogin;