import { useEffect, useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <>
            <div className='hidden lg:block bg-base-100 sticky top-0 z-10 shadow-[#7cc000] shadow-sm'>
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


                    <div className='font-bold'>
                        <NavLink
                            to="/signIn"
                            className={({ isActive, isPending }) =>
                                `underline-animation ${isActive ? "text-[#7cc000] font-bold" : isPending ? "pending" : ""}`
                            }
                        >
                            Sing In
                        </NavLink>
                    </div>

                    {/* <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div> */}

                </div>
            </div>
            <div className="relative lg:hidden">
                <button
                    onClick={toggleDrawer}
                    className="fixed top-4 right-4 z-50 p-2 bg-blue-600 text-white rounded-full"
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
                    <nav className="mt-16 space-y-4">
                        <a
                            href="#home"
                            onClick={handleNavClick}
                            className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-200"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={handleNavClick}
                            className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-200"
                        >
                            About
                        </a>
                        <a
                            href="#services"
                            onClick={handleNavClick}
                            className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-200"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            onClick={handleNavClick}
                            className="block py-2 px-4 text-lg text-gray-700 hover:bg-gray-200"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;