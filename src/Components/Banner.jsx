import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <div>
            <div className="w-full h-full md:h-[750px] md:p-16 p-8" style={{ 
                backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/banner/banner6.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="max-w-[1600px] mx-auto">
                    <div className="md:max-w-[50%]">
                        <div className="bg-no-repeat h-[50px] w-full" style={{ 
                            backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/shapes/shape2.png')",
                            backgroundRepeat: "no-repeat"
                        }}>
                            <h3 className="p-2 ml-8 text-[18px] font-medium text-white">100% ORGANIC FOODS</h3>
                        </div>
                        <h1 className="lg:text-[65px] md:text-[45px] text-[35px] font-bold mb-5">Organic Veggies & Foods You Cook Healthy</h1>
                        <p className="md:text-xl">Morbi eget congue lectus. Donec eleifend ultricies urna et euismod. Sed consectetur tellus eget odio aliquet, vel vestibulum tellus sollicitudin. Morbi maximus metus eu eros tincidunt</p>
                        <button className="BTN flex items-center gap-1 mt-10">
                            <span>Subscribe</span>
                            <span><FaArrowRightLong /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
