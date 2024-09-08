
const AddedCard = ({ addedCard }) => {
    const { name, category, image, price, discount, rating, color } = addedCard;

    const calculateTotalPriceWithoutDiscount = () => {
        const totalPrice = parseFloat(price);
        const discountPercentage = parseFloat(discount);
        const discountedAmount = totalPrice * (discountPercentage / 100);
        return totalPrice - discountedAmount;
    };


    return (
        <div className="border mb-5 flex items-center justify-between gap-10 p-4 rounded-lg">
            <div>
                <img className="w-[200px] h-[150px] object-cover" src={image} alt="" />
            </div>
            <div>
                <div className="rating w-28">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <p className="ml-2 text-sm">({rating})</p>
                </div>
                <h2 className="text-xl font-bold">{name}</h2>
                <h2>{category}</h2>

                <div className="flex justify-between">
                    <div className="flex gap-4 items-center font-medium">
                        <p className="text-[#7cc000]">Price: {calculateTotalPriceWithoutDiscount()} tk</p>
                        <del>{price} tk</del>
                    </div>
                </div>
                <p>Color: {color}</p>
            </div>

            <div className="flex items-center space-x-10 border px-2 py-1 rounded">
                <button
                    className="bg-red-500 text-white font-bold py-1 px-4 text-2xl rounded-lg hover:bg-red-600 disabled:opacity-50"
                    // onClick={handleDecrease}
                    // disabled={quantity === 1}
                >
                    -
                </button>
                <h2 className="text-xl font-bold">5</h2>
                <button
                    className="bg-green-500 text-white font-bold py-1 px-4 text-2xl rounded-lg hover:bg-green-600"
                    // onClick={handleIncrease}
                >
                    +
                </button>
            </div>
            <div>
                <button className="BTN"> Delete</button>
            </div>
        </div>
    );
};

export default AddedCard;