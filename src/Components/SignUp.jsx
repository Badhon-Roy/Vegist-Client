import { Link } from "react-router-dom";

const SignUp = () => {

    const handleSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL , email, password);
    }

    return (
        <div className="my-16 max-w-[900px] mx-auto">
            <h2 className="text-center text-3xl font-bold">Please Sign Up</h2>
            <div className="border-2 border-[#f5ab1e]  flex justify-between gap-10 shadow-lg shadow-[#7cc000] rounded-lg mt-10">
                <div className="flex-1 p-10">
                    <form onSubmit={handleSingUp}>
                        {/* name */}
                        <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000]">
                            <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/256/6250/6250108.png" alt="" />
                            <input name="name" className="border-none focus:outline-none px-2 w-full" type="text" placeholder="Name" />
                        </div>

                        {/* photo URL */}
                        <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
                            <img className="w-[30px]" src="https://cdn-icons-png.freepik.com/256/2499/2499303.png?semt=ais_hybrid" alt="" />
                            <input name="photoURL" className="border-none focus:outline-none px-2 w-full" type="text" placeholder="Image URL" />
                        </div>

                        {/* email */}
                        <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
                            <img className="w-[30px]" src="https://freepngimg.com/save/64685-box-icons-symbol-computer-address-email-gmail/1600x1600" alt="" />
                            <input name="email" className="border-none focus:outline-none px-2 w-full" type="password" placeholder="Password" />
                        </div>

                        {/* password */}
                        <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
                            <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="" />
                            <input name="password" className="border-none focus:outline-none px-2 w-full" type="password" placeholder="Password" />
                        </div>
                        <button type="submit" className="mt-6 border-2 border-[#7cc000] rounded-lg py-2 w-full text-xl font-medium hover:bg-[#7cc000]">Sign Up</button>

                        <h2 className="mt-2 text-right pr-4">Already have an account <Link to='/signIn' className="underline font-bold text-[#7cc000]">Sing In</Link>
                        </h2>
                        <div>
                            <button className="border btn mt-8"><img className="w-[30px]" src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png" alt="" /> Continue with Google</button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img className="w-full " src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;