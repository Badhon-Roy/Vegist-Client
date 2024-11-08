import { BiCreditCard, BiPackage } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";


const Orders = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Orders</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 border rounded-lg shadow-md bg-base-100">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium">Total Orders</h3>
                        <CgShoppingCart className="h-4 w-4 text-[#7cc000]" />
                    </div>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-gray-500">+20.1% from last month</p>
                </div>

                {/* Pending Orders */}
                <div className="p-4 border rounded-lg shadow-md bg-base-100">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium">Pending Orders</h3>
                        <BiCreditCard className="h-4 w-4 text-[#7cc000]" />
                    </div>
                    <div className="text-2xl font-bold">56</div>
                    <p className="text-xs text-gray-500">-4% from last week</p>
                </div>

                {/* Shipped Orders */}
                <div className="p-4 border rounded-lg shadow-md bg-base-100">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium">Shipped Orders</h3>
                        <BsTruck className="h-4 w-4 text-[#7cc000]" />
                    </div>
                    <div className="text-2xl font-bold">789</div>
                    <p className="text-xs text-gray-500">+10.5% from last month</p>
                </div>

                {/* Returned Orders */}
                <div className="p-4 border rounded-lg shadow-md bg-base-100">
                    <div className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium">Returned Orders</h3>
                        <BiPackage className="h-4 w-4 text-[#7cc000]" />
                    </div>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-gray-500">-2.5% from last month</p>
                </div>
            </div>
            <div className="space-y-4">
                {/* Total Orders */}


                {/* Recent Orders */}
                <div className="p-4 border rounded-lg shadow-md bg-base-100">
                    <h3 className="text-lg font-semibold">Recent Orders</h3>
                    <div className="mt-4 space-y-8">
                        {[1, 2, 3].map((order) => (
                            <div key={order} className="flex items-center">
                                <div className="h-9 w-9">
                                    <img src="https://g-gvtqtx4qwdu.vusercontent.net/placeholder-user.jpg" alt="Avatar" />
                                    {/* <AvatarFallback>OM</AvatarFallback> */}
                                </div>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium">Olivia Martin</p>
                                    <p className="text-xs text-gray-500">olivia.martin@email.com</p>
                                </div>
                                <div className="ml-auto text-sm font-medium">+$1,999.00</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;