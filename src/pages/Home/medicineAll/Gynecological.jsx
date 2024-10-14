import { useQuery } from '@tanstack/react-query';

import GynecologicalComponent from './categoryComponent/GynecologicalComponent';


const Gynecological = () => {
    const getGynecological = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["gynecological"],
        queryFn: getGynecological,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item) => <GynecologicalComponent key={item.id} item={item}></GynecologicalComponent>)
            }
        </div>
    );
};

export default Gynecological;