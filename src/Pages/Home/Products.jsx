import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const { category } = useParams();

    const { data } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/categories/${category}`)
            return res.data;
        }
    })

    return (
        <div>
            <div className="w-full h-full md:h-[200px] md:p-16 p-8" style={{ 
                backgroundImage: "url('https://vegina-store.myshopify.com/cdn/shop/files/dealbanner3_89856af2-8887-49a4-a5c4-a936151b995c.jpg?v=1614354194')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="max-w-[1600px] mx-auto pl-10">
                    <div className="md:max-w-[50%]">
                       <h2 className="text-[#7cc000] font-medium">Fresh and Organic
                        <br /> <span className="text-4xl font-mono font-bold">{category}</span>
                       </h2>
                    </div>
                </div>
            </div>
            <div className="max-w-[1600px] mx-auto my-16">
                <h2 className="md:text-2xl text-xl font-bold">Product of {category} ({data?.length})</h2>
                <div>
                    {
                        data?.length > 0 ? <div className="grid grid-cols-5 gap-4 my-8">
                        {
                            data?.map(product => <Product key={product?._id} product={product}></Product>)
                        }
                    </div> : <div className="flex flex-col justify-center items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbzlnvmiwgJUYAN-yiAJRDBe2m0rAVa-gyA&s" alt="" />
                        <p className="text-2xl font-bold my-4">Sorry No product Available</p>
                        <Link to={'/'} className="BTN">Back to Home</Link>
                    </div>
                     }
                </div>
            </div>
        </div>
    );
};

export default Products;