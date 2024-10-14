import { useQuery } from '@tanstack/react-query';
import OphthalmologistComponent from './consultantComponent/OphthalmologistComponent';


const Ophthalmologist = () => {

    const getOphthalmologist = async () => {
        return await fetch('/doctorsData.json').then(res => res.json());
    }
    const { data, isLoading } = useQuery({
        queryKey: ['ophthalomologist'],
        queryFn: getOphthalmologist,
    })
    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4'>
        {
            data?.eye_doctor?.map(item => <OphthalmologistComponent key={item.id} item={item}></OphthalmologistComponent>)
        }
   
        
    </div>
    );
};

export default Ophthalmologist;