
import { useQuery } from '@tanstack/react-query';
import DiarrheaComponent from './categoryComponent/DiarrheaComponent';


const Diarrhea = () => {
    const getDiarrheaItem = async () => {
        return await fetch('/medicine.json')
            .then(res => res.json());
    }


    const { data, isLoading } = useQuery({
        queryKey: ["diarrheaItem"],
        queryFn: getDiarrheaItem,
    })

    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-16 gap-4">
            {
                data?.map((item) => <DiarrheaComponent key={item.id} item={item}></DiarrheaComponent>)
            }
        </div>
    );
};

export default Diarrhea;