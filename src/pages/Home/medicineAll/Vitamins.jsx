import { useQuery } from '@tanstack/react-query';
import React from 'react';
import VitaminsComponent from './categoryComponent/VitaminsComponent';

const Vitamins = () => {
    const getVitamins = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["vitamins"],
        queryFn: getVitamins,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item) => <VitaminsComponent key={item.id} item={item}></VitaminsComponent>)
           }
        </div>
    );
};

export default Vitamins;