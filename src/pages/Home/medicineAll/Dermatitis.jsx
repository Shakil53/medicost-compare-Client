import { useQuery } from '@tanstack/react-query';

import DermatitisComponent from './categoryComponent/DermatitisComponent';
import { Key } from 'react';

const Dermatitis = () => {
    const getDermatitis = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["dermatitis"],
        queryFn: getDermatitis,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item) => <DermatitisComponent key={item.id} item={item}></DermatitisComponent>)
           }
        </div>
    );
};

export default Dermatitis;