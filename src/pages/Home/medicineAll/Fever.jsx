import { useQuery } from '@tanstack/react-query';

import FeverComponent from './categoryComponent/FeverComponent';


const Fever = () => {

    const getFever = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["fever"],
        queryFn: getFever,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item) => <FeverComponent key={item.id} item={item}></FeverComponent>)
          }
        </div>
    );
};

export default Fever;