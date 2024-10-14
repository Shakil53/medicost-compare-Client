import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"


const MedicineSpecialistComponent = ({ item }) => {
    console.log(item);
    return (
        <Card className="max-w-xs mx-auto bg-white shadow-lg rounded-lg transition-colors duration-300 hover:bg-gray-50 hover:text-blue-500">
        <CardHeader>
        <Avatar className="size-28 mx-auto">
               <AvatarImage className="" src={item.img} /> 
                    <AvatarFallback><span className="loading loading-infinity loading-md"></span></AvatarFallback>
            </Avatar>
        <CardTitle>
            <div className="space-y-3 text-center">
            <div>{item.name}</div>
                <p className="text-[#34a97b] text-sm font-normal">{item.description}</p>
                </div>
        </CardTitle>
        </CardHeader>
        <CardContent>
               

                <p>Location: {item.district}</p>
                <p>Hospital: {item.hospitalName}</p>
                <p>Specialist: {item.specialist}</p>
                <p>Video Call Fee: {item.videoCallFee}</p>
        </CardContent>
        <CardFooter>
        <Badge className="text-sm bg-green-500" variant="destructive"><button>Appointment</button></Badge>
        </CardFooter>
</Card>

    );
};

export default MedicineSpecialistComponent;