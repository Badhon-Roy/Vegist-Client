import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAllProducts = () => {
    const { data , isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await axios.get('https://vegist-server-one.vercel.app/products')
            return res.data;
        }
    })
    if(isLoading){
        return <p>Loading........</p>
    }

    return {data}; 
};

export default useAllProducts;