import axios from "axios";
import { Bounce, toast } from "react-toastify";
import useFavoriteCards from "../../Shared/useFavoriteCards";


const FavoriteCard = ({favoriteCard}) => {
    const { _id, name, category, image, price, discount, rating, color } = favoriteCard;
    const { favoriteRefetch } = useFavoriteCards();
    console.log('product id',_id);

    const calculateTotalPriceWithoutDiscount = () => {
        const totalPrice = parseFloat(price);
        const discountPercentage = parseFloat(discount);
        const discountedAmount = totalPrice * (discountPercentage / 100);
        return totalPrice - discountedAmount;
    };
    const handleDelete = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/favorite/${_id}`)
            console.log(res.data);
            if (res.data.deletedCount) {
                toast.success('👦🏻 Delete successfully!', {
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
                favoriteRefetch();
            }
        }
        catch (error) {
            console.log(error);
            toast.error(`🚨 Something is wrong. Please try again!`, {
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
        }
    }



    return (
        <div className="border-2 mb-5 flex items-center justify-between md:gap-10 gap-3 md:p-4 p-2 rounded-lg relative">
        <button onClick={handleDelete} className="bg-red-500 w-[40px] h-[20px] rounded flex justify-center items-center font-bold text-white text-xl absolute -top-3 right-0 cursor-pointer hover:bg-red-700 md:hidden">x</button>
        <div className="md:w-full w-2/5">
            <img className="md:w-[200px] w-[150px] h-[150px] object-cover" src={image} alt="" />
        </div>
        <div className="md:w-full w-2/5">
            <div className="rating md:w-28 w-[80px]">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 1} />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 2} />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 3} />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 4} />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={rating >= 5} />
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

        <div className="flex md:flex-row flex-col justify-center items-center lg:space-x-10 md:space-x-4 p-1 border md:px-2 md:py-1 rounded w-1/5 md:w-full">
            <button
                className="bg-red-500 text-white font-bold py-1 px-4 text-2xl rounded-lg hover:bg-red-600 disabled:opacity-50 cursor-pointer"
            >
                -
            </button>
            <h2 className="text-xl font-bold">5</h2>
            <button
                className="bg-green-500 text-white font-bold py-1 px-4 text-2xl rounded-lg hover:bg-green-600 cursor-pointer"
            >
                +
            </button>
        </div>
        <div>
            <button onClick={handleDelete} className="BTN md:block hidden"> Delete</button>
        </div>
    </div>
    );
};

export default FavoriteCard;