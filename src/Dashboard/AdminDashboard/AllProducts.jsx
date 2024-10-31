
import { IoSearchSharp } from "react-icons/io5";
import useAllProducts from "../../Shared/useAllProducts";
import { FaStar } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { useState } from "react";


const AllProducts = () => {

    const { data: products, refetch } = useAllProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(15);

    const totalPages = Math.ceil((products?.length || 0) / productsPerPage);

    // Slice the products based on the current page and products per page
    const displayedProducts = products?.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const handleProductsPerPageChange = (event) => {
        setProductsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };



    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const colors = [
        "Red", "Green", "Blue", "Yellow", "Cyan", "Magenta", "Black", "White", "Orange", "Purple",
        "Pink", "Brown", "Gray", "Light Blue", "Lime", "Navy", "Teal", "Turquoise",
        "Maroon", "Gold", "Silver", "Indigo", "Violet", "Salmon", "Slate", "Olive",
        "Periwinkle", "Peach", "Plum"
    ];

    const onSubmit = async (data) => {
        try {
            data.rating = parseFloat(data.rating);
            data.price = parseFloat(data.price);
            data.discount = parseInt(data.discount);
            data.quantity = parseInt(data.quantity);

            // If all uploads were successful, construct productInfo object
            const productInfo = {
                name: data.name,
                category: data.category,
                image: data.image,
                price: data.price,
                discount: data.discount,
                rating: data.rating,
                description: data.description,
                origin: data.origin,
                nutrition: {
                    calories: data.calories,
                    protein: data.protein,
                    carbohydrates: data.carbohydrates,
                    fat: data.fat,
                    fiber: data.fiber
                },

                storage: data.storage,
                shelf_life: data.shelf_life,
                color: data.color,
                quantity: data.quantity,
                weight: data.weight,
                isNew: data.isNew,
                isOrganicProduct: data.isOrganicProduct
            };

            axios.post('http://localhost:5000/products', productInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('Added Product successfully!', {
                            position: "top-right",
                            autoClose: 1500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });

                        reset();
                        refetch();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/products/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            toast.success('Deleted Product successfully!', {
                                position: "top-center",
                                autoClose: 1500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                transition: Bounce,
                            });
                            refetch(); // Refresh the product list
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        toast.error('Failed to delete product!', {
                            position: "top-center",
                            autoClose: 1500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                        });
                    });
            }
        });
    };


    const handleModalClose = () => {
        document.getElementById('my_modal_4').close();
    }


    const handleCategoryFIlter = e => {
        console.log(e.target.value);
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Products Grid</h1>
                <div className="flex items-center gap-4">
                    <button className="btn btn-outline">Export</button>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-[#7cc000] text-white hover:bg-[#6ba000]" onClick={() => document.getElementById('my_modal_4').showModal()}>Add New Product</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="w-11/12 max-w-7xl modal-box">
                            <div className="flex justify-end">
                                <button onClick={handleModalClose} className="btn btn-outline border-[#c00000] text-[#c00000] hover:bg-[#c00000] hover:text-white text-lg">Close</button>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mb-[50px]">
                                <div className="justify-between gap-16 md:flex">
                                    {/* product name */}
                                    <div className="flex-1 space-y-2" >
                                        <label className="text-xl font-bold">Product Name:</label>
                                        <input {...register("name", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter product name" />
                                        {errors.name && <span className="text-red-500">This field is required</span>}
                                    </div>
                                </div>


                                <div className="justify-between gap-16 md:flex">
                                    {/* product image */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Product Image</label><br />
                                        <input {...register("image", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter URL" />
                                        {errors.image && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/* origin */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Origin:</label>
                                        <input {...register("origin", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter origin country name" />
                                        {errors.origin && <span className="text-red-500">This field is required</span>}
                                    </div>
                                </div>

                                <div className="justify-between gap-16 md:flex">
                                    {/* {category} */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Product category:</label> <br />
                                        <select
                                            id="category"
                                            {...register("category", { required: true })}
                                        >
                                            <option value="">Select a category</option>
                                            {Array.from(new Set(products?.map(product => product.category)))?.map(category => (
                                                <option key={category} value={category}>{category}</option>
                                            ))}
                                        </select>
                                        {errors.category && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/* color */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Product Color:</label><br />
                                        <select
                                            id="color"
                                            {...register("color", { required: true })}
                                        >
                                            <option value="">Select a color</option>
                                            {colors?.map((color) => (
                                                <option key={color.id} value={color}>
                                                    {color}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.color && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/* isNew */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">isNew :</label><br />
                                        <select
                                            id="isNew"
                                            {...register("isNew", { required: true })}
                                        >
                                            <option value="">Select isNew</option>
                                            <option value="true">true</option>
                                            <option value="false">false</option>

                                        </select>
                                        {errors.isNew && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/* isOrganicProduct */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">isOrganicProduct:</label><br />
                                        <select
                                            id="isOrganicProduct"
                                            {...register("isOrganicProduct", { required: true })}
                                        >
                                            <option value="">Select isOrganicProduct</option>
                                            <option value="true">true</option>
                                            <option value="false">false</option>
                                        </select>
                                        {errors.isOrganicProduct && <span className="text-red-500">This field is required</span>}
                                    </div>
                                </div>
                                <div className="justify-between gap-16 md:flex">
                                    {/* storage */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Storage:</label>
                                        <input {...register("storage", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Example : Store in a cool, dry place." />
                                        {errors.storage && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/* shelf_life */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Shelf_life:</label>
                                        <input {...register("shelf_life", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Example : 12 month" />
                                        {errors.shelf_life && <span className="text-red-500">This field is required</span>}
                                    </div>
                                </div>
                                <div className="justify-between gap-16 md:flex">
                                    {/* rating */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Rating:</label>
                                        <input type="number" {...register("rating", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter rating" />
                                        {errors.rating && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/* weight */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Weight:</label>
                                        <input type="number" {...register("weight", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter weight" />
                                        {errors.weight && <span className="text-red-500">This field is required</span>}
                                    </div>
                                </div>


                                <div className="justify-between gap-16 md:flex">
                                    {/* price */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Price:</label>
                                        <input type="number" {...register("price", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter price" />
                                        {errors.price && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/* discount */}
                                    <div>
                                        <label className="text-xl font-bold">Discount (%):</label>
                                        <input type="number" {...register("discount", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter discount" />
                                        {errors.discount && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/* quantity */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Quantity:</label>
                                        <input type="number" {...register("quantity", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter quantity" />
                                        {errors.quantity && <span className="text-red-500">This field is required</span>}
                                    </div>

                                </div>


                                <div className="justify-between gap-4 md:flex">
                                    {/*calories */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Calories:</label>
                                        <input type="number" {...register("calories", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter calories" />
                                        {errors.calories && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/*protein */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Protein:</label>
                                        <input {...register("protein", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Example : 12g" />
                                        {errors.protein && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/*carbohydrates */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Carbohydrates:</label>
                                        <input {...register("carbohydrates", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Example : 12g" />
                                        {errors.carbohydrates && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/*fat */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Fat:</label>
                                        <input {...register("fat")} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Example : 12g" />
                                        {errors.fat && <span className="text-red-500">This field is required</span>}
                                    </div>
                                    {/*fiber */}
                                    <div className="flex-1 space-y-2">
                                        <label className="text-xl font-bold">Fiber:</label>
                                        <input {...register("fiber")} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Example : 12g" />
                                        {errors.fiber && <span className="text-red-500">This field is required</span>}
                                    </div>
                                </div>



                                <label className="text-xl font-bold">Product Details:</label>
                                <textarea rows={5} {...register("description", { required: true })} className="w-full focus:outline-[#7cc000] px-5 rounded-md py-1 border" placeholder="Enter product details" />
                                {errors.description && <span className="text-red-500">This field is required</span>}

                                <br />

                                <button type="submit" className="btn-block btn btn-outline border-[#7cc000] text-[#7cc000] hover:bg-[#7cc000] hover:text-white text-lg "><span>Add Product</span></button>

                            </form>
                        </div>
                    </dialog>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-6 md:flex-row md:items-center md:justify-between">
                <div className="relative">
                    <IoSearchSharp className="absolute left-2.5 top-2.5 h-4 w-4 text-muted mt-1" />
                    <input
                        type="search"
                        placeholder="Search products..."
                        className="input w-full md:w-[300px] pl-8"
                    />
                </div>
                <div className="flex gap-4">

                    <select
                        value={productsPerPage}
                        onChange={(e) => handleProductsPerPageChange(e)}
                        className="w-[180px] cursor-pointer px-4 py-2 rounded-lg border border-gray-300 shadow-md text-gray-700 bg-white hover:bg-gray-100 hover:border-[#7cc000] focus:outline-none focus:ring-2 focus:ring-[#7cc000] focus:border-transparent transition duration-200"
                    >  <option value="15" >Product Per Page</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select>
                    <select onChange={handleCategoryFIlter} className="w-[180px] cursor-pointer px-4 py-2 rounded-lg border border-gray-300 shadow-md text-gray-700 bg-white hover:bg-gray-100 hover:border-[#7cc000] focus:outline-none focus:ring-2 focus:ring-[#7cc000] focus:border-transparent transition duration-200">
                        <option value="all">All Categories</option>
                        {Array.from(new Set(products?.map(product => product.category)))?.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <select className="w-[180px] cursor-pointer px-4 py-2 rounded-lg border border-gray-300 shadow-md text-gray-700 bg-white hover:bg-gray-100 hover:border-[#7cc000] focus:outline-none focus:ring-2 focus:ring-[#7cc000] focus:border-transparent transition duration-200">
                        <option value="last-added">Last added</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div>
                {/* Product Grid */}
                <div className="grid gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {displayedProducts?.map((product) => (
                        <div key={product.id} className="border border-gray-300 rounded-lg shadow-lg">
                            <figure>
                                <img
                                    className="h-[150px] object-center w-full object-cover rounded-t-lg"
                                    src={product?.image}
                                    alt={product.name}
                                />
                            </figure>
                            <div className="p-4 border-t">
                                <h2 className="card-title">{product.name.slice(0, 20)}</h2>
                                <p className="flex justify-between my-2 text-xl">
                                    <span className="mr-2 text-gray-500 line-through">{product.price.toFixed(2)} tk</span>
                                    <span className="font-bold text-green-600">
                                        {(product.price - product.price * (product.discount / 100)).toFixed(2)} tk
                                    </span>
                                </p>
                                <div className="flex justify-between">
                                    <span className={`badge bg-[#7cc000] text-white`}>{product.category}</span>
                                    <div className="flex items-center">
                                        <FaStar className="h-5 w-5 fill-[#7cc000] text-[#7cc000] font-bold" />
                                        <span className="ml-1 text-sm">{product.rating}</span>
                                    </div>
                                </div>
                                <p className="flex items-center my-4 text-sm font-semibold">
                                    Stock:
                                    {
                                        product?.quantity > 0 ? (
                                            <span className="ml-1 text-green-600 bg-green-100 px-2 py-0.5 rounded">
                                                In Stock ({product.quantity})
                                            </span>
                                        ) : (
                                            <span className="ml-1 text-red-600 bg-red-100 px-2 py-0.5 rounded">
                                                Out of Stock
                                            </span>
                                        )
                                    }
                                </p>

                                <div className="flex gap-2 mt-4">
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="flex-1 btn btn-outline border-[#7cc000] text-[#7cc000] hover:bg-[#7cc000] hover:text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Update</button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="text-lg font-bold">Hello!</h3>
                                            <p className="py-4">Press ESC key or click the button below to close</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                    <button onClick={() => handleDeleteProduct(product._id)} className="flex-1 btn btn-outline border-[#c00000] text-[#c00000] hover:bg-[#c00000] hover:text-white">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="btn btn-outline"
                    >
                        Previous
                    </button>

                    {/* Dynamic Page Numbers */}
                    {[...Array(totalPages)]?.map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageClick(index + 1)}
                            className={`btn ${currentPage === index + 1 ? 'bg-[#7cc000] text-white' : 'btn-outline'}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="btn btn-outline"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default AllProducts;