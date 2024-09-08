import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAllAddToCards from "../../Shared/useAllAddToCards";
import AddedCard from "./AddedCard";
import { Link } from "react-router-dom";


const AddedCards = () => {
    const { user } = useContext(AuthContext)
    const { addedCards } = useAllAddToCards([]);
    return (
        <div>
            <div className="w-full h-full md:h-[200px] md:p-16 p-8" style={{
                backgroundImage: "url('https://vegina-store.myshopify.com/cdn/shop/files/banner3-min.jpg?v=1613780889')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="max-w-[1600px] mx-auto pl-10">
                    <div className="text-center">
                        <h2 className="text-[#7cc000] font-medium">Your Cart
                            <br /> <span className="text-4xl font-mono font-bold">{user?.displayName}</span>
                        </h2>
                        <p className="text-white">{user?.email}</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1600px] mx-auto px-4 my-16">
                {
                    addedCards.length > 0 ? <div className="lg:w-2/3">
                        {
                            addedCards?.map(addedCard => <AddedCard key={addedCard?._id} addedCard={addedCard}></AddedCard>)
                        }
                    </div> : <div>
                        <p className="text-2xl text-center font-bold">You don't added any product</p>
                        <Link to={'/allOrganicProducts'} className="flex justify-center mt-4">
                            <button className="BTN underline">Shop now</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default AddedCards;