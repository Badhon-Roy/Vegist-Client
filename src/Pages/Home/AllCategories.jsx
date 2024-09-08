import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllCategory from "./AllCategory";


const AllCategories = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get('https://vegist-server.vercel.app/categories')
            return res.data;
        }
    })
    if (isLoading) {
        return <p>Loading ................</p>
    }


    return (
        <div className="max-w-[1600px] mx-auto my-16 px-4">
            <h2 className="text-2xl font-bold">Shop by category</h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 my-6">
                {Array.isArray(data) && data?.map(category => (
                    <AllCategory key={category?._id} category={category}></AllCategory>
                ))}
            </div>

        </div>
    );
};

export default AllCategories;