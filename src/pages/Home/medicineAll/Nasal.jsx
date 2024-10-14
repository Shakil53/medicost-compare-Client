import { useQuery } from '@tanstack/react-query';

import NasalComponent from './categoryComponent/NasalComponent';


const Nasal = () => {

    const getNasalItem = async () => {
        return await fetch('/medicine.json').then(res => res.json());
    } 


    const {data, isLoading} = useQuery({
        queryKey: ["nasalItem"],
        queryFn: getNasalItem
    })

    if (isLoading) {
        return <p>Loading..</p>
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data.map((item) => <NasalComponent item={item} key={item.id}></NasalComponent>)
            }
        </div>
    );
};

export default Nasal;