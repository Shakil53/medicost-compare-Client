import { useQuery } from '@tanstack/react-query';
import SpasmComponent from './categoryComponent/SpasmComponent';
import { Key } from 'react';

const Spasm = () => {


    const getSpasmItem = async () => {
        return await fetch('/medicine.json')
            .then(res => res.json());
    }

    const { data, isLoading} = useQuery({
        queryKey: ['spasmItem'],
        queryFn: getSpasmItem,
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item) => <SpasmComponent key={item.id} item={item}></SpasmComponent>)
            }
        </div>
    );
};

export default Spasm;