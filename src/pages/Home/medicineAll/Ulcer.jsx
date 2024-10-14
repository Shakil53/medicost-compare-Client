import { useQuery } from '@tanstack/react-query';
import UlcerComponent from './categoryComponent/UlcerComponent';


const Ulcer = () => {
    const getUlcer = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["ulcerItem"],
        queryFn: getUlcer,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item)=> <UlcerComponent key={item.id} item={item}></UlcerComponent>)
            }
        </div>
    );
};

export default Ulcer;