
const AddedCard = ({ addedCard }) => {
    const { name, category, image, price, discount, rating, color } = addedCard;

    const calculateTotalPriceWithoutDiscount = () => {
        const totalPrice = parseFloat(price);
        const discountPercentage = parseFloat(discount);
        const discountedAmount = totalPrice * (discountPercentage / 100);
        return totalPrice - discountedAmount;
    };


    return (
        <div className="border mb-5 flex items-center justify-between md:gap-10 gap-2 md:p-4 p-2 rounded-lg relative">
            <p className="bg-red-500 w-[40px] h-[20px] rounded flex justify-center items-center font-bold text-white text-xl absolute -top-3 right-0 cursor-pointer hover:bg-red-700 md:hidden">x</p>
            <div>
                <img className="md:w-[200px] w-[150px] h-[150px] object-cover" src={image} alt="" />
            </div>
            <div>
                <div className="rating md:w-28 w-[80px]">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <p className="ml-2 text-sm">({rating})</p>
                </div>
                <h2 className="md:text-xl font-bold">{name}</h2>
                <h2>{category}</h2>

                <div className="md:flex gap-4 items-center font-medium md:text-[16px] text-[12px]">
                    <p className="text-[#7cc000]">Price:   {calculateTotalPriceWithoutDiscount()} tk</p>
                    <del>{price} tk</del>
                </div>
                <p className="md:text-[16px] text-[12px]">Color: {color}</p>
            </div>

            <div className="flex md:flex-row flex-col justify-center items-center md:space-x-10 p-1 border md:px-2 md:py-1 rounded">
                <button
                    className="bg-red-500 text-white font-bold py-1 px-4 text-2xl rounded-lg hover:bg-red-600 disabled:opacity-50 cursor-pointer"
                // onClick={handleDecrease}
                // disabled={quantity === 1}
                >
                    -
                </button>
                <h2 className="text-xl font-bold">5</h2>
                <button
                    className="bg-green-500 text-white font-bold py-1 px-4 text-2xl rounded-lg hover:bg-green-600 cursor-pointer"
                // onClick={handleIncrease}
                >
                    +
                </button>
            </div>
            <div>
                <button className="BTN md:block hidden"> Delete</button>
            </div>
        </div>
    );
};

export default AddedCard;