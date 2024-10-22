import { Link } from "react-router-dom";
import useAllProducts from "../../Shared/useAllProducts";
import OrganicProduct from "./OrganicProduct";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import { useState } from "react";


const AllOrganicProducts = () => {
    const { data } = useAllProducts();

    const [selectedPriceCheckBox, setSelectedPriceCheckBox] = useState(null)
    const [sortOrder, setSortOrder] = useState(null);
    const [sortByRating, setSortByRating] = useState(false)
    const [selectedWeight, setSelectedWeight] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)


    const [rangeValue, setRangeValue] = useState([100, 1000]);
    const newProducts = data?.filter(product => product?.isOrganicProduct);

    const handleRangeChange = (e, index) => {
        const newRange = [...rangeValue];
        newRange[index] = Number(e.target.value);
        setRangeValue(newRange);
    };


    const handleSortByWeight = (weight) => {
        setSelectedWeight(selectedWeight === weight ? null : weight)
    };

    const handleSortByColor = (color) => {
        setSelectedColor(selectedColor === color ? null : color)
    }

    const handleSortByPrice = e => {
        const value = e.target.value;
        setSelectedPriceCheckBox(value)
        if (value === "LowToHigh") {
            setSortOrder('asc')
            setSortByRating(false)
        } else if (value === 'HighToLow') {
            setSortOrder('desc')
            setSortByRating(false)
        } else if (value === "BestRating") {
            setSortByRating(!sortByRating)
            setSortOrder(null)
        }
    }


    const filteredProducts = newProducts?.filter(product => {
        return (
            (!selectedWeight || product.weight === selectedWeight) &&
            (!selectedColor || product.color === selectedColor)
        )
    });

    let selectedSortAndFilteredProducts = filteredProducts;
    if (rangeValue) {
        selectedSortAndFilteredProducts = selectedSortAndFilteredProducts?.filter(
            (product) => product.price >= rangeValue[0] && product.price <= rangeValue[1]
        );
    }
    if (sortByRating) {
        selectedSortAndFilteredProducts = selectedSortAndFilteredProducts.slice().sort((a, b) => b.rating - a.rating)
    }
    else if (sortOrder === 'asc') {
        selectedSortAndFilteredProducts = selectedSortAndFilteredProducts.slice().sort((a, b) => a.price - b.price)
    }
    else if (sortOrder === 'desc') {
        selectedSortAndFilteredProducts = selectedSortAndFilteredProducts.slice().sort((a, b) => b.price - a.price)
    }


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
                            <br /> <span className="font-mono text-4xl font-bold">Our Good Organic Product</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="max-w-[1600px] mx-auto my-16 p-4 md:flex justify-between gap-10 w-full">
                <div className="px-4 md:px-0 lg:w-1/5 md:w-[30%]">
                    {/* sort order by weight */}
                    <h2 className="mb-4 text-xl font-bold text-warning">Sort by Weight</h2>
                    <div className="max-h-[100px] overflow-y-scroll">
                        {Array.from(new Set(newProducts?.map(product => product.weight))).map(weight => (
                            <div key={weight} className="flex items-start form-control">
                                <label className="flex items-center gap-4 mb-4 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-warning"
                                        checked={selectedWeight === weight}
                                        onChange={() => handleSortByWeight(weight)}
                                    />
                                    <span className="font-medium">{weight}</span>
                                </label>
                            </div>
                        ))}
                    </div>

                    <p className="divider divider-warning"></p>



                    {/* sort order by price and rating */}
                    <h2 className="mb-4 text-xl font-bold text-success">Sort Order</h2>
                    <div className="space-y-4">
                        <div className="form-control">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={'LowToHigh'}
                                    checked={selectedPriceCheckBox === "LowToHigh"}
                                    onChange={handleSortByPrice}
                                    className="checkbox checkbox-success"
                                />
                                <span className="font-medium">Price Low to High</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={'HighToLow'}
                                    checked={selectedPriceCheckBox === "HighToLow"}
                                    onChange={handleSortByPrice}
                                    className="checkbox checkbox-success"
                                />
                                <span className="font-medium">Price High to Low</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="flex items-center gap-4 cursor-pointer">
                                <input
                                    type="checkbox"
                                    value={'BestRating'}
                                    checked={selectedPriceCheckBox === "BestRating"}
                                    onChange={handleSortByPrice}
                                    className="checkbox checkbox-success"
                                />
                                <span className="font-medium">Bast Rating</span>
                            </label>
                        </div>


                        <div className="font-bold divider divider-success text-success">Price Range</div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold">{rangeValue[0]}</span>
                            <span className="text-sm font-bold">Max-{rangeValue[1]}</span>
                        </div>
                        <div className="relative mt-4">
                            <input
                                type="range"
                                min="0"
                                max="1000"
                                value={rangeValue[0]}
                                onChange={(e) => handleRangeChange(e, 0)}
                                className="range range-success"
                            />
                        </div>


                    </div>
                    <p className="divider divider-success"></p>


                    {/* sort by color */}
                    <h2 className="mb-4 text-xl font-bold text-secondary">Sort by Color</h2>
                    <div className="max-h-[150px] overflow-y-scroll">

                        {Array.from(new Set(newProducts?.map(product => product.color))).map(color => (
                            <div key={color} className="flex items-start form-control">
                                <label className="flex items-center gap-4 mb-4 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-secondary"
                                        checked={selectedColor === color}
                                        onChange={() => handleSortByColor(color)}
                                    />
                                    <span className="font-medium">{color}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <p className="divider divider-secondary"></p>



                </div>
                <div className="grid grid-cols-1 gap-4 lg:w-4/5 md:w-[70%] w-full lg:grid-cols-3 md:grid-cols-2">
                    {
                        selectedSortAndFilteredProducts?.map(product => (
                            <OrganicProduct key={product._id} product={product}></OrganicProduct>
                        ))
                    }
                </div>
               
            </div>
            <Link to={'/'} className="flex justify-center my-8">
                    <button className="flex items-center gap-1 mt-10 BTN">
                        <span><FaArrowLeftLong /></span>
                        <span>Back To Home</span>
                    </button>
                </Link>
        </div>
    );
};

export default AllOrganicProducts;