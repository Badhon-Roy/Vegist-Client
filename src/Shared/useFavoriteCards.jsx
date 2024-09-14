import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useFavoriteCards = () => {
    const {user} = useContext(AuthContext)
    const {data :favoriteProducts ,isLoading , refetch : favoriteRefetch} = useQuery({
        queryKey : ["favorite" , user?.email],
        queryFn : async ()=>{
            if(!user?.email) return [];
            const res = await axios.get(`http://localhost:5000/favorite?email=${user?.email}`)
            return res.data;
        },
        enabled : !!user?.email
    })
    if(isLoading){
        return <p>Loading...</p>
    }

    return {favoriteProducts, favoriteRefetch}
};

export default useFavoriteCards;