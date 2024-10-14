import { useQuery } from '@tanstack/react-query';

import ZincDeficiencyComponent from './categoryComponent/ZincDeficiencyComponent';
import { Key } from 'react';

const ZincDeficiency = () => {

    const getZincDeficiency = async () => {
        return await fetch('/medicine.json')
            .then(res => res.json());
    }



    const { data, isLoading} = useQuery({
        queryKey: ["zincDeficiency"],
        queryFn: getZincDeficiency,
    })
    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item) => <ZincDeficiencyComponent key={item.id} item={item}></ZincDeficiencyComponent>)
            }
        </div>
    );
};

export default ZincDeficiency;