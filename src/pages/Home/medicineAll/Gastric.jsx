
import { useQuery } from "@tanstack/react-query";
import GasticComponent from './categoryComponent/GasticComponent';


const Gastric = () => {

    const getGasticItem = async () => {
        return await fetch('/medicine.json').then(res => res.json());
    }

    const {data,isLoading} = useQuery({
        queryKey: ["gasticItem"],
        queryFn: getGasticItem,
    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-8 gap-4">
            {
                data?.map((item)=> <GasticComponent key={item.id} item={item}></GasticComponent>)
            }
        </div>
    );
};

export default Gastric;