import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import useAxiosForSearch from '@/hooks/useAxiosForSearch';
import useAuth from '@/hooks/useAuth';
import useAxiosForCurd from '@/hooks/useAxiosForCurd';
import useProduct from '@/hooks/useProduct';

const CompareByGeneric = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const axiosForCrud = useAxiosForCurd();
    const user = useAuth();
    const [, refetch] = useProduct();


    // search product--------------
    const handleSearch = async () => {
        if (!searchTerm) {
            toast.error("Please enter a search term.");
            return;
        }

        try {
            const response = await useAxiosForSearch.get(`/allPNameORGen?search=${encodeURIComponent(searchTerm)}`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Failed to fetch products.");
        }
    };

    // Function to handle adding a product to the cart
    const handleAddToCart = async (item) => {
        if (!user?.user?.email) {
            toast.error("You must be logged in to add items to the cart.");
            return;
        }
    
        const cartItem = {
            cartId: item._id || "",  
            email: user.user.email,       
            name: item.name,
            quantity: item.quantity || 1,
            generic: item.generic,
            company: item.company,
            price: item.price,
            img: item.img,
            category: item.category,
            form: item.form,
            mrp: item.mrp,
            offer: item.offer,
        };
    
        try {
            const response = await axiosForCrud.post('/fromCampare', cartItem);
            if (response.data.insertedId) {
                refetch()
                toast.success("Item added to cart successfully!");
            } else {
                toast.error("Failed to add item to cart.");
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
            toast.error("Failed to add item to cart.");
        }
    };
    

    return (
        <div className="px-4 py-6">
            <h1 className="text-center text-2xl font-bold mb-4 text-teal-600">Compare Products by Name or Generic</h1>
            <div className="flex flex-col sm:flex-row items-center mb-4">
                <input 
                    type="text" 
                    className="flex-1 p-2 border border-gray-300 rounded-md mb-2 sm:mb-0 sm:mr-2" 
                    placeholder="Enter product name or generic..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button onClick={handleSearch} className="bg-teal-500 text-white hover:bg-teal-600">Search</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.length > 0 ? (
                    products.map((item) => (
                        <Card key={item._id} className="bg-white shadow-lg rounded-lg transition-colors duration-300 hover:bg-gray-50">
                            <CardHeader>
                                <CardTitle>{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded-md mb-2" />
                                <p className="text-gray-600">{item.generic}</p>
                                <p className="text-sm text-gray-500">{item.company}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <p className="text-lg font-bold">৳{item.price}</p>
                                <Button onClick={() => handleAddToCart(item)} className="bg-green-500 text-white hover:bg-green-600">Add to Cart</Button>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default CompareByGeneric;
