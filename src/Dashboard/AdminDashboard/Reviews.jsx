
import { Card, CardHeader, CardContent, CardTitle } from './Card'; // Assuming you have a Card component set up
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'; // Assuming you have Avatar components
import { Star } from './Star'; // Assuming you have a Star component

const Reviews = () => {
    return (
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Reviews</h1>
          <Card>
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Reviewer Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">
                        Great product! Exactly what I was looking for.
                      </p>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-[#7cc000] text-[#7cc000] dark:fill-[#7cc000] dark:text-[#7cc000]" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      );
    };

export default Reviews;