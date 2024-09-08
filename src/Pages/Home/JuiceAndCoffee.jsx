import { Link } from "react-router-dom";


const JuiceAndCoffee = ({ product }) => {
    const { _id,name, image, price, discount, rating } = product;

    const calculateTotalPriceWithoutDiscount = () => {
        const totalPrice = parseFloat(price);
        const discountPercentage = parseFloat(discount);
        const discountedAmount = totalPrice * (discountPercentage / 100);
        return totalPrice - discountedAmount;
    };




    return (
        <Link to={`/productDetails/${_id}`}>
            <div className="border rounded-lg   md:p-5 p-4 flex md:justify-between justify-center md:gap-4 gap-5 relative">
                {
                    discount && <p className="absolute -top-3 md:-left-4 left-0 bg-[#d81922] rounded-lg text-white px-1 text-sm">Save {discount}%</p>
                }
                <div>
                    <img className="w-[100px] h-[100px] object-cover" src={image} alt="" />
                </div>
                <div>
                    <h2 className="md:text-xl font-bold md:hidden">{name.slice(0, 16)}..</h2>
                    <h2 className="md:text-xl font-bold md:block hidden">{name.slice(0, 24)}..</h2>
                    <div className="rating w-24 flex items-center">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <p className="ml-2 text-sm">({rating})</p>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                        <div className="flex gap-4 items-center font-medium">
                            <p className="text-[#7cc000]">{calculateTotalPriceWithoutDiscount()} tk</p>
                            <del>{price} tk</del>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default JuiceAndCoffee;