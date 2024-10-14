import { useQuery } from "@tanstack/react-query";
import NeurologyComponent from "./consultantComponent/NeurologyComponent";

const Neurology = () => {

    const getNeurology = async () => {
        return await fetch('/doctorsData.json').then(res => res.json());
    }
    const {data, isLoading} = useQuery({
        queryKey: ['neurology'],
        queryFn: getNeurology,
    })
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4'>
            {
                data?.neurology?.map(item => <NeurologyComponent key={item.id} item={item}></NeurologyComponent>)
            }
       
            
        </div>
    );
};

export default Neurology;