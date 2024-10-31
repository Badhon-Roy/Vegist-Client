import { NavLink, Outlet } from 'react-router-dom';
import {
    Bell,
    ChevronDown,
    Menu,
    MessageSquare,
    Moon,
    BarChart,
    Settings,
    ShoppingCart,
    Sun,
    Users,
} from 'lucide-react';
import React, { useContext } from 'react';
import { FiPackage } from 'react-icons/fi';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`min-h-screen`}>
            {/* Header */}
            <header className="p-4 border-b bg-base-100 lg:p-5 shadow-[#7cc000] shadow-sm">
                <div className='max-w-[1600px] mx-auto sticky top-0 z-50 flex items-center'>
                    <button className="btn btn-ghost lg:hidden">
                        <Menu className="w-6 h-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </button>
                    <div className="flex items-center gap-2">
                        <FiPackage className="h-6 w-6 text-[#7cc000] " />
                        <span className="text-xl font-semibold">Admin</span>
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        <form className="hidden lg:block">
                            <label className="flex items-center gap-2 input input-bordered">
                                <input type="text" className="grow" placeholder="Search" />
                                <kbd className="kbd kbd-sm">⌘</kbd>
                                <kbd className="kbd kbd-sm">K</kbd>
                            </label>
                        </form>
                        <button className="btn btn-ghost" onClick={toggleTheme}>
                            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                            <span className="sr-only">Toggle theme</span>
                        </button>
                        <button className="btn btn-ghost">
                            <Bell className="w-5 h-5" />
                            <span className="sr-only">Toggle notifications</span>
                        </button>
                        <div className="dropdown">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="flex items-center gap-2 btn btn-ghost">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL} alt="Avatar" />
                                        </div>
                                    </div>
                                    <ChevronDown className="w-4 h-4" />
                                </label>
                                <ul tabIndex={0} className="p-2 mt-3 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                                    <li><a>Profile</a></li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex max-w-[1600px] mx-auto ">
                {/* Sidebar */}
                <aside className="hidden w-64 border-r shrink-0 lg:block">
                    <nav className="flex flex-col gap-2 p-4">
                        <NavLink to="/dashboard/allProducts" className={({ isActive }) => (isActive ? 'btn bg-[#7cc000]' : 'btn btn-ghost w-full flex justify-start')}>
                            <FiPackage className="w-4 h-4 mr-2" />
                            Products
                        </NavLink>
                        <NavLink to="/dashboard/orders" className={({ isActive }) => (isActive ? 'btn btn-secondary' : 'btn btn-ghost')}>
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Orders
                        </NavLink>
                        <NavLink to="/dashboard/customers" className={({ isActive }) => (isActive ? 'btn btn-secondary' : 'btn btn-ghost')}>
                            <Users className="w-4 h-4 mr-2" />
                            Customers
                        </NavLink>
                        <NavLink to="/dashboard/reviews" className={({ isActive }) => (isActive ? 'btn btn-secondary' : 'btn btn-ghost')}>
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Reviews
                        </NavLink>
                        <NavLink to="/dashboard/statistics" className={({ isActive }) => (isActive ? 'btn btn-secondary' : 'btn btn-ghost')}>
                            <BarChart className="w-4 h-4 mr-2" />
                            Statistics
                        </NavLink>
                        <NavLink to="/dashboard/settings" className={({ isActive }) => (isActive ? 'btn btn-secondary' : 'btn btn-ghost')}>
                            <Settings className="w-4 h-4 mr-2" />
                            Settings
                        </NavLink>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'btn btn-secondary' : 'btn btn-ghost')}>
                            <Settings className="w-4 h-4 mr-2" />
                            Home
                        </NavLink>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="flex-1 p-4 overflow-y-auto lg:p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
