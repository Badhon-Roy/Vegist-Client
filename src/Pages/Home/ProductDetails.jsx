import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['categories', id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/products/${id}`)
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data</div>;
    }

    const { name, category, image, price, discount, rating, description, origin, nutrition = {}, storage, shelf_life, color, quantity, weight, review } = data || {};

    const calculateTotalPriceWithoutDiscount = () => {
        const totalPrice = parseFloat(price);
        const discountPercentage = parseFloat(discount);
        const discountedAmount = totalPrice * (discountPercentage / 100);
        return totalPrice - discountedAmount;
    };

    return (
        <div>
            <div className="w-full h-full md:p-16 p-4" style={{
                backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/backgrounds/bg17.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="relative max-w-[1600px] mx-auto border-2 shadow-2xl p-8 rounded-lg bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg">
                    <div className="relative lg:flex justify-between items-center gap-10">
                        <div className="flex-1 flex justify-center">
                            <img className="w-full h-full rounded-3xl border border-[#7cc000]" src={image} alt={name} />
                        </div>
                        <div className="flex-1 lg:mt-0 mt-8">
                            <div className="flex items-center gap-4 ">
                                <div className="rating w-28">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <p className="ml-2 text-sm">({rating})</p>
                                </div>
                                <div>
                                    <p className="text-[#7cc000] underline font-medium cursor-pointer">Read {review?.length} Reviews</p>
                                </div>
                            </div>
                            <h2 className="md:text-5xl font-bold text-xl my-3">{name}</h2>
                            <p className="my-2 border-b pb-4">{description}</p>
                            <div className="lg:w-3/4 py-4">
                                <div className="flex justify-between">
                                    <p>Weight: {weight}kg</p>
                                    <p>Shelf-life: {shelf_life}</p>
                                </div>
                                <div className="flex justify-between my-4">
                                    <p>Category: {category}</p>
                                    <p>Color: {color}</p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-4 items-center font-medium">
                                        <p className="text-[#7cc000]">Price: {calculateTotalPriceWithoutDiscount()} tk</p>
                                        <del>{price} tk</del>
                                    </div>
                                    <p>Origin: {origin}</p>
                                </div>
                                <p className="mt-2">Storage: {storage}</p>
                            </div>

                            <div>
                                {
                                    quantity ? <div className="flex gap-2 items-center bg-[#dff0d8] w-[100px] justify-center px-2 py-1 rounded text-[#7cc000]">
                                        <span><FaCheck /></span>
                                        <p>  In Stock</p>
                                    </div> : <div className="flex gap-2 items-center bg-[#d8e0f0] w-[150px] justify-center px-2 py-1 rounded text-[#c00010]">
                                        <span><RxCross2 /></span>
                                        <p>Not Available</p>
                                    </div>
                                }
                            </div>


                            <h2 className="text-[#7cc000] md:text-2xl text-xl my-2">Nutrition of product:</h2>
                            <div className="join join-vertical w-full">
                                {Object.keys(nutrition).map((key, index) => (
                                    <div className="collapse collapse-arrow join-item border border-base-300" key={index}>
                                        <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
                                        <div className="collapse-title text-xl font-medium">
                                            {key}
                                        </div>
                                        <div className="collapse-content">
                                            <p className="text-[#7cc000]">{nutrition[key]}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="BTN w-full mt-4">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;