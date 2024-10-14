/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Card, CardContent,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";

const FeverComponent = ({item}) => {
    const { name, quantity, generic, company, offer, mrp, price, form, category, img } = item;
    const showCard = item.category === 'Fever';

   
    return (
        <>
        {
            showCard && (
                < >
                    <Card className="max-w-64 mb-0 mx-auto bg-white shadow-lg rounded-lg transition-colors duration-300 hover:bg-gray-50 hover:text-blue-500/95">
                    <CardHeader>
                        <Avatar className="size-56 mx-auto rounded-none">
                            <AvatarImage className="" src={img} /> 
                            <AvatarFallback><span className="loading loading-infinity loading-lg"></span></AvatarFallback>
                        </Avatar>
                    <CardTitle>
                    <div className="space-y-3">
                    <div className="flex gap-2 ">{name} <p className="text-[#34a97b] text-sm font-normal">{quantity}</p></div>
                        
                    </div>
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="h-[85px]">
                    <p className="text-[#4fff7b]">{generic}</p>
                    <p>{company}</p>
                    
                </CardContent>
                        <CardFooter className="flex justify-between">
                        
                            <p><span className='text-[20px] font-bold'>৳</span><span className='font-bold text-[20px]'>{price}</span></p>   
                            <Badge className="text-xs bg-green-500" variant="destructive"><button>Add To Cart</button></Badge>
                        </CardFooter>
            </Card>
                </>
                )
        }    
        </>
               
    );
};

export default FeverComponent;