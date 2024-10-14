import { useQuery } from "@tanstack/react-query";
import OTCmedicineComponent from "./categoryComponent/OTCmedicineComponent";



const OTCmedicine = () => {

    const getOtcMedicine = async () => {
        return await fetch('/medicine.json').then(res => res.json());
    }


 

    const {data, isLoading} = useQuery({
        queryKey: ["OTCmedicine"],
        queryFn: getOtcMedicine,

    })

    //loading state
    if (isLoading) {
        return <p>Loading..</p>
    }



    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            
                {
                    data.map((item) => <OTCmedicineComponent key={item.id} item={item}></OTCmedicineComponent>)
                }
            
        </div>
    );
};

export default OTCmedicine;
