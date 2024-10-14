import { useQuery } from '@tanstack/react-query';
import ConstipationComponent from './categoryComponent/ConstipationComponent';



const Constipation = () => {
    const getConstipation = async() => {
        return await fetch('/medicine.json').then(res => res.json());
    }


    const {data, isLoading} = useQuery({
        queryKey: ["constipationItem"],
        queryFn: getConstipation,

    })

    if (isLoading) {
        return <p>Loading..</p>
    }

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            
            {
                data?.map((item) => <ConstipationComponent key={item.id} item={item}></ConstipationComponent>)
           }
        </div>
        </>
    );
};

export default Constipation;