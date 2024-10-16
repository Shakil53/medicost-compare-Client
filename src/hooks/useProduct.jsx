import { useQuery } from "@tanstack/react-query";
import useAxiosForCurd from "./useAxiosForCurd";
import useAuth from "./useAuth";

// load data from trans tack query
const useProduct = () => {
    const axiosForCrud = useAxiosForCurd();
    const { user } = useAuth();

    const {refetch, data: cart=[] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosForCrud(`/carts?email=${user.email}`)
            return res.data
        }
    })

    return [cart, refetch]
};

export default useProduct;