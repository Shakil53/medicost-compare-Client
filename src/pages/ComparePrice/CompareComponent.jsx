import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useProduct from "@/hooks/useProduct";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";
import { axiosForCrud } from "@/hooks/useAxiosForCurd";




const CompareComponent = () => {
    // compare clicked item here-----------------
    const location = useLocation();
    const { selectedItem } = location.state || {}; //the cart was clicked
    const [similarItems, setSimilarItems] = useState([]);
    const navigate = useNavigate();
    
    
    // into compare user can select the item to add to cart
    const { user } = useAuth();
    const [, refetch] = useProduct();
    ////--------------------------------------


    useEffect(() => {
        if (selectedItem) {
            // Fetch similar products from your database
            axiosForCrud.get(`/allProducts?generic=${encodeURIComponent(selectedItem.generic)}`)
                .then(res => {
                    setSimilarItems(res.data);
                })
                .catch(err => console.error(err));
        }
    }, [selectedItem]);

        if (!selectedItem) {
            Swal.fire({
                title: "THERE IN NO PRODUCT AVAILABLE",
                text: 'Sorry for that',
                // icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
              }).then(() => {
                    //  send the user to the loging page
                    navigate('/', {state: {from: location}})
               
              });
    }
    //--------------------------------------
    // into compare user can select the item to add to cart
    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart item to the database
            
            // console.log(productItem);
            axiosForCrud.post('/carts', selectedItem).then(res => {
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

    return (
        <div className=" px-4">
       <h1 className="text-center p-3 text-sm sm:text-3xl font-extrabold text-teal-600 mt-10">Selected Product</h1>
    
        {/* Display the selected item */}
        <div className="selected-item mb-6">
            <Card className="max-w-56 max-h-screen border-yellow-600 mb-0 mx-auto bg-white shadow-lg rounded-lg transition-colors duration-300 hover:bg-gray-50 hover:text-blue-500/95">
                <CardHeader>
                    <Avatar className="size-32 mx-auto rounded-none">
                        <AvatarImage src={selectedItem.img} />
                        <AvatarFallback><span className="loading loading-infinity loading-lg"></span></AvatarFallback>
                    </Avatar>
                    <CardTitle>
                    <div className="space-y-2">
                        <div className="flex gap-2 ">{selectedItem.name} <p className="text-[#34a97b] text-sm font-normal">{selectedItem.quantity}</p></div>
                            
                    </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="h-[85px]">
                    <p className="text-[#4fff7b]">{selectedItem.generic}</p>
                    <p>{selectedItem.company}</p>
                </CardContent>
                <CardFooter className="flex justify-between pr-6 pl-6">
                    <p className="text-[20px] font-bold">৳{selectedItem.price}</p>
                    <div className="flex gap-2">
                        <Button onClick={handleAddToCart} className="text-xs px-2 py-1 bg-green-500 text-white hover:bg-green-600" variant="secondary">Add To Cart</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    
        {/* Display similar products */}
        <div className="similar-items">
        <h1 className="text-center p-3 text-sm sm:text-3xl font-extrabold text-green-600 mt-10 mb-4">Similar Product</h1>
    
            {/* Use a responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {similarItems.length > 0 ? (
                    similarItems.map(item => (
                        <Card key={item.cartId} className=" mb-0 mx-auto bg-white shadow-lg rounded-lg transition-colors duration-300 hover:bg-gray-50 hover:text-blue-500/95">
                            <CardHeader>
                                <Avatar className="size-56 mx-auto rounded-none">
                                    <AvatarImage src={item.img} />
                                    <AvatarFallback><span className="loading loading-infinity loading-lg"></span></AvatarFallback>
                                </Avatar>
                                <CardTitle>
                                <div className="space-y-2">
                                    <div className="flex gap-2 ">{item.name} <p className="text-[#34a97b] text-sm font-normal">{item.quantity}</p></div>
                                        
                                </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="h-[85px]">
                                <p className="text-[#4fff7b]">{item.generic}</p>
                                <p>{item.company}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between pr-6 pl-6">
                                <p className="text-[20px] font-bold">৳{item.price}</p>
                                <div className="flex gap-2">
                                    <Button onClick={() => handleAddToCart(item)} className="text-xs px-2 py-1 bg-green-500 text-white hover:bg-green-600" variant="secondary">Add To Cart</Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <p>No similar products found.</p>
                )}
            </div>
        </div>
    </div>
    
    );
};

export default CompareComponent;