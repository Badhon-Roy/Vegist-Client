import useAllProducts from "../../Shared/useAllProducts";
import NewProduct from "./NewProduct";


const NewProducts = () => {
    const { data } = useAllProducts();
    const newProducts = data ? data?.filter(product => product.isNew) : [];
    return (
        <div className="max-w-[1600px] mx-auto my-16 p-4">
            <h2 className="md:text-2xl text-xl font-bold mb-6">New products for you</h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4">
                {
                    newProducts?.map(product => <NewProduct key={product?._id} product={product}></NewProduct>)
                }
            </div>
        </div>
    );
};

export default NewProducts;