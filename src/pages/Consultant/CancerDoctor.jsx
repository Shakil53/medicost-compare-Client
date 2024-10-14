import { useQuery } from '@tanstack/react-query';
import CancerComponent from './consultantComponent/CancerComponent';


const CancerDoctor = () => {
    

    const getDentistData = async () => {
        return await fetch('/doctorsData.json').then(res => res.json())
    }

    const {data, isLoading} = useQuery({
        queryKey: ['dentistTrendData'],
        queryFn: getDentistData
    })
    console.log({isLoading, data});

    if (isLoading) {
        return <p>Loading..</p>
    }

    


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4'>
            {
                data.cancer_doctor.map(item => <CancerComponent key={item.id} item={item}></CancerComponent>)
            }
       
            
        </div>
    );
};

export default CancerDoctor;