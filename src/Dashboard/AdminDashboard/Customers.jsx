
import { Card, CardHeader, CardContent, CardTitle } from './Card'; // Assuming you have a Card component set up
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'; // Assuming you have Avatar components
import { Badge } from './Badge'; // Assuming you have a Badge component


const Customers = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Customers</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Customer List</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        {[1, 2, 3, 4, 5].map((customer) => (
                            <div key={customer} className="flex items-center">
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/placeholder.svg" alt="Avatar" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">John Doe</p>
                                    <p className="text-sm text-muted-foreground">
                                        john.doe@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    <Badge className="bg-[#7cc000] text-white dark:bg-[#7cc000] dark:text-white">VIP</Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Customers;