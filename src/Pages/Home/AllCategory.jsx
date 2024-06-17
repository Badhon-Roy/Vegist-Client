import { Link } from "react-router-dom";

const AllCategory = ({ category }) => {
    const { category: categoryName, image } = category;
    return (
        <Link to={`/products/${categoryName}`}>
            <div className="border rounded-3xl hover:border-[#7cc000] hover:text-[#7cc000] p-2 cursor-pointer hover:shadow-lg">
                <img className="object-cover h-[250px] w-full rounded-t-3xl" src={image} alt="" />
                <h2 className="text-center my-3 text-xl font-bold" >{categoryName}</h2>
            </div>
        </Link>
    );
};

export default AllCategory;