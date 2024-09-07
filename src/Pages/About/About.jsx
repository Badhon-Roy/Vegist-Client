import { BiSupport } from "react-icons/bi";
import { FaExchangeAlt, FaFacebookSquare, FaShippingFast, FaTwitterSquare } from "react-icons/fa";
import { FaArrowRightLong, FaLinkedin, FaUserShield } from "react-icons/fa6";

const About = () => {
    return (
        <div className="my-16">
             <div className="w-full h-full p-8" style={{
                backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/breadcrumb/breadcrumb1.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="max-w-[1600px] mx-auto flex justify-center items-center gap-8">
                    <h2 className="text-white md:text-5xl text-3xl font-bold">About Us</h2>
                    <img className="w-[250px] md:block hidden" src="https://www.geopits.com/assets/images/bg/about-banner.png" alt="" />
                </div>
            </div>
            <div className="max-w-[1600px] mx-auto lg:flex justify-between gap-8 lg:p-0 p-6 my-8">
                <div className="flex-1">
                    <img className="w-full" src="https://jthemes.net/themes/html/organic/assets/images/sales/sale9.png" alt="" />
                </div>
                <div className="flex-1 mt-8">
                    <p className="text-[#7cc000]">WELCOME TO ORGANI</p>
                    <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold my-4">Unbelievable Super Fast Broadband</h2>
                    <p className="font-medium leading-8 mb-4">We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness. We are a democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.</p>
                    <p className="text-[#7cc000] text-xl">Superfast and ultra-reliable. <br />
                        Browse and download around the clock. <br />
                        Our fastest ever router.</p>
                    <button className="BTN flex items-center gap-1 mt-10">
                        <span>Subscribe</span>
                        <span><FaArrowRightLong /></span>
                    </button>
                </div>
            </div>
            <div className="w-full h-full md:p-16 p-8 mt-16" style={{
                backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/backgrounds/bg13.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="max-w-[1600px] mx-auto md:flex justify-between items-center gap-8">
                    <div className="flex-1 flex flex-col items-end">
                        <img className="rounded-3xl border" src="https://jthemes.net/themes/html/organic/assets/images/product/product31.png" alt="" />
                    </div>
                    <div className="flex-1 md:mt-0 mt-8" >
                        <p className="text-[#7cc000]">WELCOME TO ORGANI</p>
                        <h2 className="lg:text-5xl md:text-3xl text-2xl font-medium my-4">Commited to Giving you True Value.</h2>
                        <p className="mb-4">We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness.</p>
                        <div className="bg-white px-4 py-5 rounded-2xl md:w-full lg:w-3/4 relative shadow-md">
                            <h2 className="text-xl font-medium mb-2 ml-6">Treating you with respect and courtesy</h2>
                            <p className="text-[#7cc000] text-sm ml-6">HIGHT QUALITY ORGANIC</p>
                            <p className="bg-[#7cc000] p-4 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white font-bold text-xl absolute top-5 -left-5 shadow-lg border border-white">01</p>
                        </div>
                        <div className="bg-white px-4 py-5 rounded-2xl md:w-full lg:w-3/4 relative shadow-md my-4">
                            <h2 className="text-xl font-medium mb-2 ml-6">Explaining the coverages and options</h2>
                            <p className="text-[#7cc000] text-sm ml-6">100% NATURAL </p>
                            <p className="bg-[#7cc000] p-4 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white font-bold text-xl absolute top-5 -left-5 shadow-lg border border-white">02</p>
                        </div>
                        <div className="bg-white px-4 py-5 rounded-2xl md:w-full lg:w-3/4 relative shadow-md">
                            <h2 className="text-xl font-medium mb-2 ml-6">Helping you solve problems</h2>
                            <p className="text-[#7cc000] text-sm ml-6">CURATED PRODUCTS </p>
                            <p className="bg-[#7cc000] p-4 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white font-bold text-xl absolute top-5 -left-5 shadow-lg border border-white">03</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f9f9f9] p-8 border-t-2">
                <div className="max-w-[1600px] mx-auto flex justify-center">
                    <img src="https://jthemes.net/themes/html/organic/assets/images/brands/brand1.png" alt="" />
                </div>
            </div>
            <div className="w-full h-full md:p-16 p-8 my-16" style={{
                backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/shapes/shape12.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="max-w-[1600px] mx-auto">
                    <p className="text-[#7cc000] text-center mt-8">FRESH FROM OUR FARM</p>
                    <h2 className="lg:text-5xl md:text-3xl text-2xl font-medium my-4 text-center">Good Organic Team</h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
                        <div className="border bg-[#fafafa] shadow-lg hover:shadow-2xl p-8 flex flex-col justify-center items-center rounded-2xl border-[#7cc000] hover:border-2">
                            <img className="w-[200px] rounded-full h-[200px] object-cover" src="https://jthemes.net/themes/html/organic/assets/images/team/team3.png" alt="" />
                            <h2 className="text-xl font-bold mt-6">Michel Harsh</h2>
                            <p className="text-[#7cc000] mt-2 mb-4">Real Farmer</p>
                            <div className="flex gap-2 text-2xl text-[#7cc000]">
                                <p className="cursor-pointer hover:text-[#1da1f2]"><FaTwitterSquare /></p>
                                <p className="cursor-pointer hover:text-[#20a2f4]"><FaFacebookSquare /></p>
                                <p className="cursor-pointer hover:text-[#0077b5]"><FaLinkedin /></p>
                            </div>
                        </div>
                        <div className="border bg-[#fafafa] shadow-lg hover:shadow-2xl p-8 flex flex-col justify-center items-center rounded-2xl border-[#7cc000] hover:border-2">
                            <img className="w-[200px] rounded-full h-[200px] object-cover" src="https://jthemes.net/themes/html/organic/assets/images/team/team4.png" alt="" />
                            <h2 className="text-xl font-bold mt-6">john Deu</h2>
                            <p className="text-[#7cc000] mt-2 mb-4">Real Farmer</p>
                            <div className="flex gap-2 text-2xl text-[#7cc000]">
                                <p className="cursor-pointer hover:text-[#1da1f2]"><FaTwitterSquare /></p>
                                <p className="cursor-pointer hover:text-[#20a2f4]"><FaFacebookSquare /></p>
                                <p className="cursor-pointer hover:text-[#0077b5]"><FaLinkedin /></p>
                            </div>
                        </div>
                        <div className="border bg-[#fafafa] shadow-lg hover:shadow-2xl p-8 flex flex-col justify-center items-center rounded-2xl border-[#7cc000] hover:border-2">
                            <img className="w-[200px] rounded-full h-[200px] object-cover" src="https://jthemes.net/themes/html/organic/assets/images/team/team5.png" alt="" />
                            <h2 className="text-xl font-bold mt-6">Heri Son</h2>
                            <p className="text-[#7cc000] mt-2 mb-4">Real Farmer</p>
                            <div className="flex gap-2 text-2xl text-[#7cc000]">
                                <p className="cursor-pointer hover:text-[#1da1f2]"><FaTwitterSquare /></p>
                                <p className="cursor-pointer hover:text-[#20a2f4]"><FaFacebookSquare /></p>
                                <p className="cursor-pointer hover:text-[#0077b5]"><FaLinkedin /></p>
                            </div>
                        </div>
                        <div className="border bg-[#fafafa] shadow-lg hover:shadow-2xl p-8 flex flex-col justify-center items-center rounded-2xl border-[#7cc000] hover:border-2">
                            <img className="w-[200px] rounded-full h-[200px] object-cover" src="https://jthemes.net/themes/html/organic/assets/images/team/team6.png" alt="" />
                            <h2 className="text-xl font-bold mt-6">Nikel Patla</h2>
                            <p className="text-[#7cc000] mt-2 mb-4">Real Farmer</p>
                            <div className="flex gap-2 text-2xl text-[#7cc000]">
                                <p className="cursor-pointer hover:text-[#1da1f2]"><FaTwitterSquare /></p>
                                <p className="cursor-pointer hover:text-[#20a2f4]"><FaFacebookSquare /></p>
                                <p className="cursor-pointer hover:text-[#0077b5]"><FaLinkedin /></p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:my-16 md:my-8 grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-8">
                        <div className="flex gap-3 items-center">
                            <p className="bg-[#ebebeb] w-[100px] h-[100px] rounded-full text-5xl text-[#7cc000] flex justify-center items-center border"><FaShippingFast /></p>
                            <div>
                                <h2 className="text-xl font-medium">Free Shipping</h2>
                                <p>Free on order over $300</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <p className="bg-[#ebebeb] w-[100px] h-[100px] rounded-full text-5xl text-[#7cc000] flex justify-center items-center border"><FaUserShield /></p>
                            <div>
                                <h2 className="text-xl font-medium">Security Payment</h2>
                                <p>100% security payment</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <p className="bg-[#ebebeb] w-[100px] h-[100px] rounded-full text-5xl text-[#7cc000] flex justify-center items-center border"><FaExchangeAlt /></p>
                            <div>
                                <h2 className="text-xl font-medium">30 Day Return</h2>
                                <p>30 day money guarantee</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <p className="bg-[#ebebeb] w-[100px] h-[100px] rounded-full text-5xl text-[#7cc000] flex justify-center items-center border"><BiSupport /></p>
                            <div>
                                <h2 className="text-xl font-medium">24/7 Support</h2>
                                <p>Support every time fast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;