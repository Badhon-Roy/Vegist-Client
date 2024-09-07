import { Link } from "react-router-dom";
import useAllProducts from "../../Shared/useAllProducts";
import OrganicProduct from "./OrganicProduct";
import { FaArrowRightLong } from "react-icons/fa6";
import { Helmet } from "react-helmet";


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const OrganicProducts = () => {
    const { data } = useAllProducts();

    const shuffledData = data ? shuffleArray([...data]) : [];
    const newProducts = shuffledData?.filter(product => product.isOrganicProduct).slice(0, 9);

    return (
        <div className="max-w-[1600px] mx-auto p-4">
            <Helmet>
                <title>Vegist || Good Organic Product</title>
            </Helmet>
            <div className="my-16 lg:p-24 p-4 bg-white shadow-2xl rounded-3xl lg:w-3/4 mx-auto">
                <div className="text-center mb-8">
                    <p className="text-[#7cc000] text-sm">FRESH FROM OUR FARM </p>
                    <h2 className="lg:text-[50px] md:text-[40px] text-[30px] font-bold mb-6">Good Organic Products</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    {
                        newProducts?.map(product => (
                            <OrganicProduct key={product?._id} product={product}></OrganicProduct>
                        ))
                    }
                </div>
                <Link to={'/allOrganicProducts'} className="flex justify-center items-center">
                    <button className="BTN flex items-center gap-1 mt-10">
                        <span>View All</span>
                        <span><FaArrowRightLong /></span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OrganicProducts;
