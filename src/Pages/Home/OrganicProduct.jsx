import { Link } from "react-router-dom";


const OrganicProduct = ({ product }) => {
    const {_id, name, image, rating, price, discount } = product;
    const calculateTotalPriceWithoutDiscount = () => {
        const totalPrice = parseFloat(price);
        const discountPercentage = parseFloat(discount);
        const discountedAmount = totalPrice * (discountPercentage / 100);
        return totalPrice - discountedAmount;
    };
    return (
        <Link to={`/productDetails/${_id}`}>
            <div className="border-2 rounded-2xl hover:border-[#7cc000] hover:border-2 flex items-center justify-between gap-1 py-8 px-4">
                <div className="flex-1">
                    <img className="w-[120px] h-[120px] rounded-full object-cover border" src={image} alt="" />
                </div>
                <div className="flex-1">
                    <div className="rating w-24">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 1} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 2} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 3} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 4} />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 5} />
                    <p className="ml-2 text-sm">({rating})</p>
                    </div>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <div className="flex gap-4 items-center font-medium">
                        <p className="text-[#7cc000]">{calculateTotalPriceWithoutDiscount()} tk</p>
                        <del>{price} tk</del>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OrganicProduct;