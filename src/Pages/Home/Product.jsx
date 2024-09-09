// import { HiShoppingBag } from "react-icons/hi";
// import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const {_id, name, image, price, rating, discount } = product;

    const calculateTotalPriceWithoutDiscount = () => {
        const totalPrice = parseFloat(price);
        const discountPercentage = parseFloat(discount);
        const discountedAmount = totalPrice * (discountPercentage / 100);
        return totalPrice - discountedAmount;
    };



    return (
        <Link to={`/productDetails/${_id}`} className="border-2 rounded-3xl hover:border-[#7cc000] hover:shadow-lg p-2" >
            <div className="relative">
                <img className="md:h-[200px] h-[150px] w-full object-cover rounded-t-3xl" src={image} alt="" />
                {
                    discount && discount > 0 && <p className="absolute top-2 right-2 bg-[#7cc000] px-4 rounded font-bold text-white">{discount}%</p>
                }
            </div>
            <div className="p-4">
                <div className="rating w-24 flex items-center">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 1} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 2} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 3} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 4} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 5} />
                    <p className="ml-2 text-sm">({rating})</p>
                </div>
                <h2 className="md:text-xl font-bold md:hidden">{name.slice(0,16)}..</h2>
                <h2 className="md:text-xl font-bold md:block hidden">{name.slice(0,24)}..</h2>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex gap-4 items-center font-medium">
                        <p className="text-[#7cc000]">{calculateTotalPriceWithoutDiscount()} tk</p>
                        <del>{price} tk</del>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;