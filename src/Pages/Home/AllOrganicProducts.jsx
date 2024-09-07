import { Link } from "react-router-dom";
import useAllProducts from "../../Shared/useAllProducts";
import OrganicProduct from "./OrganicProduct";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Helmet } from "react-helmet";


const AllOrganicProducts = () => {
    const { data } = useAllProducts();
    const newProducts = data?.filter(product => product?.isOrganicProduct);
    return (
        <div>
            <Helmet>
                <title>Vegist || Good Organic Product</title>
            </Helmet>
            <div className="w-full h-full md:h-[200px] md:p-16 p-8" style={{
                backgroundImage: "url('https://jthemes.net/themes/html/organic/assets/images/banner/banner2.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="max-w-[1600px] mx-auto pl-10">
                    <div className="md:max-w-[50%]">
                        <h2 className="text-[#7cc000] font-medium">Fresh and Organic
                            <br /> <span className="text-4xl font-mono font-bold">Our Good Organic Product</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="max-w-[1600px] mx-auto my-16 p-4">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
                    {
                        newProducts?.map(product => (
                            <OrganicProduct key={product._id} product={product}></OrganicProduct>
                        ))
                    }
                </div>
                <Link to={'/'} className="flex justify-center my-8">
                    <button className="BTN flex items-center gap-1 mt-10">
                        <span><FaArrowLeftLong /></span>
                        <span>Back To Home</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AllOrganicProducts;