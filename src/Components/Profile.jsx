import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="max-w-[1600px] mx-auto">
            <h2 className="my-8 text-3xl font-bold text-center underline">My Profile</h2>
            <img src={user.photoURL} alt="" />
        </div>
    );
};

export default Profile;