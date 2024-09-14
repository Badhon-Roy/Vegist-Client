import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';

const useAllAddToCards = () => {
    const { user } = useContext(AuthContext);

    const { data: addedCards, isLoading, refetch } = useQuery({
        queryKey: ["addToCard", user?.email],
        queryFn: async () => {
            if (!user?.email) return [];
            const res = await axios?.get(`https://vegist-server-one.vercel.app/addToCard?email=${user?.email}`);
            return res?.data;
        },
        enabled: !!user?.email,
    });

    if (isLoading) {
        return <p>Loading...........</p>;
    }

    return { addedCards, refetch };
};
export default useAllAddToCards;