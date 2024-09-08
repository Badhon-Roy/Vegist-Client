import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useAllAddToCards from "../../Shared/useAllAddToCards";

const ProductDetails = () => {
    const { id } = useParams();
    const {refetch} = useAllAddToCards();

    const {user} = useContext(AuthContext);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['categories', id],
        queryFn: async () => {
            const res = await axios.get(`https://vegist-server.vercel.app/products/${id}`)
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


    const handleAddToCart = async () => {
        const productInfo = {name , category,image, price , discount ,rating ,color , 
            email : user?.email
        }
        const res = await axios.post('https://vegist-server.vercel.app/addToCard' , productInfo)
        if(res.data?.insertedId){
            toast.success('Add to card successfully!', {
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
              refetch();
        }
    }

    return (
        <div>
            <Helmet>
                <title>Vegist || {name} Details</title>
            </Helmet>
            <div className="w-full h-full md:p-16 p-4" style={{
                backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/backgrounds/bg17.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="relative max-w-[1600px] mx-auto border-2 shadow-2xl p-8 rounded-lg bg-opacity-10 bg-gray-100 backdrop-filter backdrop-blur-lg">
                    <div className="relative lg:flex justify-between items-center gap-10">
                        <div className="flex-1 flex justify-center">
                            <img className="md:w-[500px] w-[300px] h-full rounded-3xl border border-[#7cc000]" src={image} alt={name} />
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
                                {Object.keys(nutrition)?.map((key, index) => (
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
                            <div className="md:flex gap-4">
                                <button onClick={handleAddToCart} className="bg-[#7cc000] rounded-[30px] w-full mt-4 text-xl text-white px-4 py-1 flex justify-center items-center gap-4">
                                    <img className="w-[50px] object-cover" src="https://img.pikbest.com/origin/10/06/36/28TpIkbEsTfqc.png!sw800" alt="" /> <span>Add To Cart</span>
                                </button>
                                <button className="bg-[#7cc000] rounded-[30px] w-full mt-4 text-white text-xl px-4 py-4 flex justify-center items-center gap-4">
                                    <img className="w-[30px] object-cover" src="https://www.freeiconspng.com/thumbs/favorite-icon/heart-favorite-icon-5.png" alt="" /> <span>Favorite</span>
                                </button>
                                <button className="bg-[#7cc000] rounded-[30px] w-full mt-4 text-xl text-white px-4 py-1 flex justify-center items-center gap-4">
                                    <img className="w-[50px] object-cover" src="https://static.vecteezy.com/system/resources/previews/012/443/044/non_2x/online-food-order-grocery-delivery-woman-shop-at-an-online-store-the-product-catalog-on-the-web-browser-page-stay-at-home-concept-quarantine-or-self-isolation-png.png" alt="" /> <span>Buy Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;