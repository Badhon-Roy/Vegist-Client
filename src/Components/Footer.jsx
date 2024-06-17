import { IoIosSend } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="w-full h-full md:h-[450px] md:p-16 p-8" style={{
            backgroundImage: "url('https://vegina-store.myshopify.com/cdn/shop/files/Untitled-1_156403f7-af42-40f3-b865-200f2bc4e863.jpg?v=1614354193')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="max-w-[1600px] mx-auto">
                <h2 className="text-center text-[24px] font-bold">Get the latest deals</h2>
                <p className="text-center my-2">Receive $20 coupon for first shopping</p>
                <div className="join flex items-center justify-center">
                    <input className="input input-bordered input-success join-item" placeholder="Email"  type="email"/>
                    <button className="bg-[#7cc000] text-white p-3 font-bold join-item rounded-r-full flex items-center gap-1">
                            <span>Send</span>
                            <span className="text-xl"><IoIosSend /></span>
                        </button>
                </div>
                <div>
                    <div >
                        <img className="w-[100px]" src="https://vegina-store.myshopify.com/cdn/shop/files/logo-1.svg?v=1676488069&width=352" alt="" />
                        <p>Tortor neque egestas augue, eu vulputate magnaTortor neque egestas augue, eu vulputate magna social-icon social-icon</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;