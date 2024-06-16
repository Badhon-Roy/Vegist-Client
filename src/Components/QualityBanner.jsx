

const QualityBanner = () => {
    return (
        <div>
            <div className="w-full lg:h-[750px] md:p-16 p-4 lg:py-0 py-16" style={{
                backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/quality/qlty1.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="max-w-[1600px] mx-auto">
                    <p className="text-center font-medium text-[#7cc000] pt-8">FRESH FROM OUR FARM</p>
                    <h2 className="lg:text-[45px] md:text-[35px] text-[25px]  text-center font-bold">Top Organic Quality</h2>
                    <div className="lg:flex justify-between items-center gap-8 my-10">
                        <div className="flex-1">
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <h2 className="text-xl font-semibold mb-2">Top Premium <span className="font-bold text-[24px]">Quality</span></h2>
                                    <p>Discover our top-tier products crafted with care, ensuring unparalleled satisfaction and enjoyment for our discerning customers.</p>
                                </div>
                                <div className="bg-white rounded-full p-6">
                                    <img className="w-[70px]" src="https://jthemes.net/themes/html/organic/assets/images/quality/qlty5.png" alt="" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 my-8">
                                <div className="text-right">
                                    <h2 className="text-xl font-semibold mb-2">Always <span className="font-bold text-[24px]">Fresh Items</span></h2>
                                    <p>Experience freshness with our hand-picked, peak-ripened produce, guaranteeing optimal flavor and nutritional value from farm to table.</p>
                                </div>
                                <div className="bg-white rounded-full p-6">
                                    <img className="w-[80px]" src="https://jthemes.net/themes/html/organic/assets/images/quality/qlty6.png" alt="" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <h2 className="text-xl font-semibold mb-2">100% <span className="font-bold text-[24px]">Natural Product</span></h2>
                                    <p>Enjoy 100% natural products, free from additives and preservatives, prioritizing sustainability and delivering wholesome goodness to nourish body and soul.</p>
                                </div>
                                <div className="bg-white rounded-full p-6">
                                    <img className="w-[80px]" src="https://jthemes.net/themes/html/organic/assets/images/quality/qlty7.png" alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="flex-1 lg:my-0 my-10">
                            <div className="flex justify-center">
                                <img className="md:w-[300px] w-[150px]" src="https://jthemes.net/themes/html/organic/assets/images/quality/qlty2.png" alt="" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-4">
                                <div className="bg-white rounded-full p-6">
                                    <img className="w-[70px]" src="https://jthemes.net/themes/html/organic/assets/images/quality/qlty8.png" alt="" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2"><span className="font-bold text-[24px]">100% Organic</span> Product</h2>
                                    <p>Discover our top-tier products crafted with care, ensuring unparalleled satisfaction and enjoyment for our discerning customers.</p>
                                </div>

                            </div>
                            <div className="flex items-center gap-4 my-8">
                                <div className="bg-white rounded-full p-6">
                                    <img className="w-[80px]" src="https://jthemes.net/themes/html/organic/assets/images/quality/qlty9.png" alt="" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2"><span className="font-bold text-[24px]">Super</span> Healthy Food</h2>
                                    <p>Experience freshness with our hand-picked, peak-ripened produce, guaranteeing optimal flavor and nutritional value from farm to table.</p>
                                </div>

                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white rounded-full p-6">
                                    <img className="w-[80px]" src="https://jthemes.net/themes/html/organic/assets/images/quality/qlty10.png" alt="" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-2"><span className="font-bold text-[24px]">Top Best</span> Quality</h2>
                                    <p>Enjoy 100% natural products, free from additives and preservatives, prioritizing sustainability and delivering wholesome goodness to nourish body and soul.</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualityBanner;