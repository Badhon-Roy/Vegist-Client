import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAllProducts = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/products')
            return res.data;
        }
    })
    if (isLoading) {
        return <p>Loading........</p>
    }

    return { data, isLoading };
};

export default useAllProducts;