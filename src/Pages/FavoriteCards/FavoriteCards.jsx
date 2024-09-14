import { useContext } from "react";
import useFavoriteCards from "../../Shared/useFavoriteCards";
import { AuthContext } from "../../Provider/AuthProvider";
import FavoriteCard from "./FavoriteCard";
import { Link } from "react-router-dom";

const FavoriteCards = () => {
    const {favoriteProducts} = useFavoriteCards();
    const {user} = useContext(AuthContext)
    return (
        <div>
        <div className="w-full h-full md:h-[200px] md:p-16 p-8" style={{
            backgroundImage: "url('https://groca.myshopify.com/cdn/shop/files/slider-3.jpg?v=1614918563')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="max-w-[1600px] mx-auto pl-10">
                <div className="text-center">
                    <h2 className="text-[#7cc000] font-medium">Your Favorite Cards
                        <br /> <span className="text-4xl font-mono font-bold">{user?.displayName}</span>
                    </h2>
                    <p className="font-medium">{user?.email}</p>
                </div>
            </div>
        </div>
        <div className="max-w-[1600px] mx-auto px-4 my-16">
            {
                favoriteProducts?.length > 0 ? <div className="lg:w-2/3">
                    {
                        favoriteProducts?.map(favoriteCard => <FavoriteCard key={favoriteCard?._id} favoriteCard={favoriteCard}></FavoriteCard>)
                    }
                </div> : <div>
                    <p className="text-2xl text-center font-bold">You don't added any favorite products</p>
                    <Link to={'/allOrganicProducts'} className="flex justify-center mt-4">
                        <button className="BTN underline">View Products</button>
                    </Link>
                </div>
            }
        </div>
    </div>
    );
};

export default FavoriteCards;