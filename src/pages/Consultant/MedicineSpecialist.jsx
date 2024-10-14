import { useQuery } from "@tanstack/react-query";
import MedicineSpecialistComponent from "./consultantComponent/MedicineSpecialistComponent";


const MedicineSpecialist = () => {

    const getCancerDoctorData = async () => {
        return await fetch('/doctorsData.json').then(res => res.json())
    }
    const {data, isLoading} = useQuery({
        queryKey: ['cancer-doctorData'],
        queryFn: getCancerDoctorData,
    })
    console.log(data);

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4'>
        {
            data?.medicine_specialist?.map(item => <MedicineSpecialistComponent key={item.id} item={item}></MedicineSpecialistComponent>)
        }
   
        
         </div>
    );
};

export default MedicineSpecialist;