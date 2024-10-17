/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Card, CardContent,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosForCurd from "@/hooks/useAxiosForCurd";
import useProduct from "@/hooks/useProduct";
import useAuth from "@/hooks/useAuth";



const OralFungalInfectionComponent = ({item}) => {
    const {name, quantity, generic, company, price, _id, img, category, form, mrp, offer } = item;
    const showCard = item.category === 'Oral Fungal Infection';

    const navigate = useNavigate();
    const location = useLocation();
    const axiosForCrud = useAxiosForCurd();
    const [, refetch] = useProduct();

    const { user } = useAuth();

    // console.log(user.email);

    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart item to the database
            

            const productItem = {
                cartId: _id,
                email: user.email,
                name,
                quantity,
                generic,
                company,
                price,
                img,
                category,
                form,
                mrp,
                offer,
                

            }
            axiosForCrud.post('/carts', productItem).then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success("item added successfully")
                }
                // refetch the cart to updated item
                refetch()
            })

        }
        else {
           
            Swal.fire({
                title: "YOUR ARE NOT LOGGED IN",
                text: 'Please login to add to the cart',
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
              }).then((result) => {
                if (result.isConfirmed) {
                    //  send the user to the loging page
                    navigate('/login', {state: {from: location}})
                }
              });
        }
    }
//    from here compare ------------------
const handleComapeClick = () => {
    navigate('/compare-price', { state: { selectedItem: item } });
}
return (
 
    <>
        {
            showCard && (
                < >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <Card className="mb-0 mx-auto bg-white shadow-lg rounded-lg transition-colors duration-300 hover:bg-gray-50 hover:text-blue-500/95">
                            <CardHeader>
                            <Avatar className="size-48 sm:size-56 mx-auto rounded-none">
                                <AvatarImage src={img} />
                                <AvatarFallback>
                                <span className="loading loading-infinity loading-lg"></span>
                                </AvatarFallback>
                            </Avatar>
                            <CardTitle>
                                <div className="space-y-2">
                                <div className="flex gap-2">
                                    {name} <p className="text-[#34a97b] text-sm font-normal">{quantity}</p>
                                </div>
                                </div>
                            </CardTitle>
                            </CardHeader>
                            <CardContent className="h-[85px]">
                            <p className="text-[#4fff7b]">{generic}</p>
                            <p>{company}</p>
                            </CardContent>
                            <CardFooter className="flex sm:flex justify-between pr-3 pl-4">
                            <p>
                                <span className="text-[20px] font-bold">৳</span>
                                <span className="font-bold text-[20px]">{price}</span>
                            </p>
                            <div className="grid grid-cols-2 gap-2 sm:flex">
                                <button
                                onClick={handleComapeClick}
                                className="button px-0.5 py-0.5 text-sm">
                                Compare
                                </button>
                                <Button
                                onClick={handleAddToCart}
                                className="text-xs px-1.5 py-0.5 bg-green-500 text-white hover:bg-green-600"
                                variant="secondary">
                                Add To Cart
                                </Button>
                            </div>
                            </CardFooter>
                        </Card>
                    </div>
                </>
                )
        }    
    </>
           
);
};

export default OralFungalInfectionComponent;