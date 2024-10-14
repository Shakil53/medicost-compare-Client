import { useQuery } from '@tanstack/react-query';
import OralFungalInfectionComponent from './categoryComponent/OralFungalInfectionComponent';


const OralFungalInfection = () => {
    const getOralFungalInfection = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["oralFungalInfection"],
        queryFn: getOralFungalInfection,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item)=> <OralFungalInfectionComponent key={item.id} item={item}></OralFungalInfectionComponent>)
            }
        </div>
    );
};

export default OralFungalInfection;