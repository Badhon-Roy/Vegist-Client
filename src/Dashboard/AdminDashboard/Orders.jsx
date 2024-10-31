import {
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
} from 'lucide-react'; // Ensure you have lucide-react installed
import { Card, CardHeader, CardContent, CardTitle } from './Card'; // Assuming you have a Card component set up
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'; // Assuming you have Avatar components



const Orders = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Orders</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                        <ShoppingCart className="h-4 w-4 text-[#7cc000] dark:text-[#7cc000]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                        <CreditCard className="h-4 w-4 text-[#7cc000] dark:text-[#7cc000]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">56</div>
                        <p className="text-xs text-muted-foreground">-4% from last week</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Shipped Orders</CardTitle>
                        <Truck className="h-4 w-4 text-[#7cc000] dark:text-[#7cc000]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">789</div>
                        <p className="text-xs text-muted-foreground">+10.5% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">Returned Orders</CardTitle>
                        <Package className="h-4 w-4 text-[#7cc000] dark:text-[#7cc000]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">-2.5% from last month</p>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {[1, 2, 3].map((order) => (
                            <div key={order} className="flex items-center">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                                    <p className="text-sm text-muted-foreground">
                                        olivia.martin@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">+$1,999.00</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Orders;