import { FaArrowRightLong } from "react-icons/fa6";


const FoodStoreBanner = () => {
    return (
        <div className="bg-[#f2f2f2] h-[750px] lg:flex justify-between items-center relative">
            <img className="absolute right-2 top-2 lg:block hidden" src="https://jthemes.net/themes/html/organic/assets/images/shapes/shape21.png" alt="" />
            <div className="flex-1">
                <img className="lg:block hidden"  src="https://jthemes.net/themes/html/organic/assets/images/store/store1.png" alt="" />
            </div>
            <div className="flex-1 lg:p-0 p-4">
                <p className="font-medium text-[#7cc000] mt-10 lg:text-left text-center">FRESH FROM OUR FARM</p>
                <h1 className="text-[60px] font-bold mb-5 lg:block hidden">Trusted Organic Food Store <br /> Food Store Conscious</h1>
                <h1 className="md:text-[50px] text-[35px] font-bold mb-5 text-center lg:hidden">Trusted Organic Food Store Food Store Conscious</h1>
                <p className="text-xl lg:block hidden">Apparently we had reached a great height in the atmosphere, for the sky <br /> was a dead black, and the stars had ceased to twinkle. height in <br /> the atmosphere, for the sky was a dead black, and <br /> the stars had</p>
                <p className="md:text-xl lg:hidden text-center">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. height in  the atmosphere, for the sky was a dead black, and the stars had</p>
                <div className="flex items-center lg:justify-normal justify-between gap-8 my-4 p-4">
                    <div className="md:flex justify-center items-center gap-4">
                        <div className="bg-white p-6 h-[100px] w-[100px] rounded-full">
                            <img src="https://jthemes.net/themes/html/organic/assets/images/category/ctg_icon6.png" alt="" />
                        </div>
                        <h2 className="text-xl font-bold">Promotions Of <br /> The Week</h2>
                    </div>
                    <div className="md:flex justify-center items-center gap-4">
                        <div className="bg-white p-6 h-[100px] w-[100px] rounded-full">
                            <img src="https://jthemes.net/themes/html/organic/assets/images/category/ctg_icon7.png" alt="" />
                        </div>
                        <h2 className="text-xl font-bold">Promotions Of <br /> The Week</h2>
                    </div>
                </div>
                <button className="BTN flex items-center gap-1 mt-10">
                    <span>Subscribe</span>
                    <span><FaArrowRightLong /></span>
                </button>
            </div>
        </div>
    );
};

export default FoodStoreBanner;