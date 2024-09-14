import { useContext, useEffect, useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Bounce, toast } from 'react-toastify';
import useAllAddToCards from '../Shared/useAllAddToCards';
import useFavoriteCards from '../Shared/useFavoriteCards';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext)
    const { addedCards } = useAllAddToCards();
    const { favoriteProducts } = useFavoriteCards();

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = () => {
        setIsOpen(false);
    };


    const [placeholderText, setPlaceholderText] = useState('');

    useEffect(() => {
        const sequences = [
            ' Search your product. . . . . . . . . . . . . . . . . . . ',
            ' Search by vegetables name . . . . . . . .  . .',
            ' Search by product category . . . . . . . . . .',
        ];

        let sequenceIndex = 0;
        let charIndex = 0;
        let currentSequence = sequences[sequenceIndex];
        let timeoutId;

        const type = () => {
            if (charIndex < currentSequence.length) {
                setPlaceholderText((prev) => prev + currentSequence[charIndex]);
                charIndex++;
                timeoutId = setTimeout(type, 50);
            } else {
                setTimeout(() => {
                    setPlaceholderText('');
                    charIndex = 0;
                    sequenceIndex = (sequenceIndex + 1) % sequences.length;
                    currentSequence = sequences[sequenceIndex];
                    timeoutId = setTimeout(type, 50);
                }, 500);
            }
        };

        type();

        return () => clearTimeout(timeoutId);
    }, []);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('👋 Sing Out successfully!', {
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
            })
    }

    return (
        <>
            <div className='hidden lg:block bg-base-100 sticky top-0 z-40 shadow-[#7cc000] shadow-sm'>
                <div className="navbar max-w-[1600px] mx-auto">
                    <div className="flex-1">
                        <Link to={'/'}>
                            <img className='w-[100px]' src="https://vegina-store.myshopify.com/cdn/shop/files/logo-1.svg?v=1676488069&width=352" alt="" />
                        </Link>
                    </div>
                    <div className='flex-1'>

                        <form className="flex items-center border-2 border-[#7cc000] rounded-md">
                            <input
                                type="text"
                                className="flex-grow px-4 py-2 w-[300px] border-none outline-none"
                                placeholder={placeholderText}
                            />
                            <button
                                type="submit"
                                className="ml-2 px-4 py-2 bg-[#7cc000] text-white hover:bg-[#7cc000]"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <div className='flex-1 flex gap-8 font-bold'>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                `underline-animation ${isActive ? "text-[#7cc000] font-bold" : isPending ? "pending" : ""}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                `underline-animation ${isActive ? "text-[#7cc000] font-bold" : isPending ? "pending" : ""}`
                            }
                        >
                            About
                        </NavLink>
                    </div>


                    {
                        user && user?.email ? <div>

                            <Link to={'/favoriteCards'}>
                                <div className='w-[30px] mr-2 cursor-pointer relative'>
                                    <img src="https://cdn-icons-png.flaticon.com/512/73/73814.png" alt="" />
                                    <p className='absolute -top-3 -right-1 rounded-full border w-[20px] h-[20px] text-sm font-bold p-1 flex justify-center items-center bg-green-500'>{favoriteProducts?.length}</p>
                                </div></Link>
                            <Link to={'/addedCards'}>
                                <div className='w-[40px] mr-6 cursor-pointer relative'>
                                    <img src="https://static.vecteezy.com/system/resources/previews/019/787/018/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png" alt="" />
                                    <p className='absolute -top-3 -right-1 rounded-full border w-[20px] h-[20px] text-sm font-bold p-1 flex justify-center items-center bg-green-500'>{addedCards?.length}</p>
                                </div>
                            </Link>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full border-2">
                                        <img
                                            alt={user?.displayName}
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={handleSignOut}>Sing out</button></li>
                                </ul>
                            </div>






                        </div> : <div className='font-bold'>
                            <NavLink
                                to="/signIn"
                                className={({ isActive, isPending }) =>
                                    `underline-animation ${isActive ? "text-[#7cc000] font-bold" : isPending ? "pending" : ""}`
                                }
                            >
                                Sing In
                            </NavLink>
                        </div>
                    }

                </div>
            </div>
            <div className="relative lg:hidden z-40">
                <button
                    onClick={toggleDrawer}
                    className="fixed top-4 right-4 z-40 p-2 bg-blue-600 text-white rounded-full"
                >
                    <MdOutlineMenu />
                </button>

                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <button
                        onClick={toggleDrawer}
                        className="absolute top-4 left-4 p-2 bg-red-600 text-white rounded-full"
                    >
                        <IoMdCloseCircleOutline />
                    </button>
                    <nav className="mt-16 space-y-4 flex flex-col text-start px-4">
                        <NavLink
                            to="/"
                            onClick={handleNavClick}
                            className={({ isActive, isPending }) =>
                                `underline-animation ${isActive ? "text-[#7cc000] font-bold" : isPending ? "pending" : ""}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={handleNavClick}
                            className={({ isActive, isPending }) =>
                                `underline-animation ${isActive ? "text-[#7cc000] font-bold" : isPending ? "pending" : ""}`
                            }
                        >
                            About
                        </NavLink>
                        {user && user?.email ? <>
                            <NavLink
                                to="/addedCards"
                                onClick={handleNavClick}
                                className={({ isActive, isPending }) =>
                                    `underline-animation ${isActive ? "text-[#7cc000] font-bold" : isPending ? "pending" : ""}`
                                }
                            >
                                My Card
                            </NavLink>
                            <button className='bg-[#7cc000] text-white font-bold py-2 rounded-lg hover:bg-[#f5ab1e]' onClick={() => { handleSignOut(); handleNavClick(); }}>Sing out</button>
                        </> : <NavLink
                            to="/signIn"
                            onClick={handleNavClick}
                            className={({ isActive, isPending }) =>
                                `underline-animation ${isActive ? "text-[#7cc000] font-bold" : isPending ? "pending" : ""}`
                            }
                        >
                            Sing In
                        </NavLink>}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;