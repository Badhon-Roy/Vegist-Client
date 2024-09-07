import { Link } from "react-router-dom";


const SignIn = () => {
  return (
    <div className="my-16 max-w-[900px] mx-auto">
      <h2 className="text-center text-3xl font-bold">Sign In</h2>
      <div className="border-2 border-[#f5ab1e]  flex justify-between gap-10 shadow-lg shadow-[#7cc000] rounded-lg mt-10">
        <div className="flex-1 p-10">
          <form >
            <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000]">
              <img className="w-[30px]" src="https://freepngimg.com/save/64685-box-icons-symbol-computer-address-email-gmail/1600x1600" alt="" />
              <input className="border-none focus:outline-none px-2 w-full" type="email" placeholder="Email" />
            </div>
            <div className="flex gap-2 border border-[#f5ab1e] px-8 py-2 shadow-md rounded-full shadow-[#7cc000] mt-6">
              <img className="w-[30px]" src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="" />
              <input className="border-none focus:outline-none px-2 w-full" type="password" placeholder="Password" />
            </div>
            <button className="mt-6 border-2 border-[#7cc000] rounded-lg py-2 w-full text-xl font-medium hover:bg-[#7cc000]">Sign In</button>
            <h2 className="mt-2 text-right pr-4">Don't have an account <Link to='/singUp' className="underline font-bold text-[#7cc000]">Sing Up</Link>
            </h2>
            <div>
              <button className="border btn mt-8"><img className="w-[30px]" src="https://static.vecteezy.com/system/resources/previews/022/613/027/non_2x/google-icon-logo-symbol-free-png.png" alt="" /> Continue with Google</button>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <img className="w-full h-full object-cover" src="https://cdn.dribbble.com/users/1172503/screenshots/4505740/login-form.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;