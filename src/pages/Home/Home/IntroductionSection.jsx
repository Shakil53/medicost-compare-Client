import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import video1 from '../../../assets/video/wired-outline-1822-dandelion-hover-pinch (1).mp4'
import video2 from '../../../assets/video/wired-outline-981-consultation-hover-conversation.mp4'
import ContainerWithOutSideBar from "@/components/ui/ContainerWithOutSideBar";
import TreatmentSection from "./TreatmentSection";
import WomansCareSection from "./WomansCareSection";
import SkinCareSection from "./SkinCareSection";
import MansCareSection from "./MansCareSection";
import DevicesEquipment from "./DevicesEquipment";

const IntroductionSection = () => {
    return (
        <div className="mt-2">
            <div className="bg-gray-100 w-full h-16">
            <h1 className="text-center p-3 text-sm sm:text-3xl font-extrabold text-gray-600">Your Health, Your Choice Your well-being is our priority.</h1>
            {/* <h1 className="text-center text-3xl font-extrabold text-gray-600">Empowering Health, Enlightening Choice - Your Prescription for Informed Savings</h1> */}
        </div>
      
    <ContainerWithOutSideBar>
    <div className="grid grid-cols-1 sm:grid-cols-12 items-center p-2 w-full mx-auto gap-4">
        {/* First Card */}
        <Card className="sm:col-span-6 w-full sm:w-[550px] flex flex-col sm:flex-row overflow-hidden">
            <div className="flex-1 flex flex-col justify-between p-4">
            <CardContent className="flex flex-col justify-between h-full">
                <p className="text-sm text-muted-foreground mb-2">
                At MediCostCompare, we empower consumers to make informed, cost-effective choices for their medication purchases
                </p>
                <div className="mt-auto">
                <Button className='self-start bg-teal-500 hover:bg-teal-500'>
                    Explore now
                </Button>
                </div>
            </CardContent>
            </div>
            <div className="w-full sm:w-[200px] relative bg-black hidden sm:block">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={video1} />
            </video>
            </div>
        </Card>

        {/* Second Card */}
        <Card className="sm:col-span-6 w-full sm:w-[600px] flex flex-col sm:flex-row overflow-hidden">
            <div className="flex-1 flex flex-col justify-between p-4">
            <CardContent className="flex flex-col justify-between h-full">
                <p className="text-sm text-muted-foreground mb-2">
                Empowering Health, Enlightening Choice - Your Prescription for Informed Savings
                </p>
                <div className="mt-auto">
                <Button className='self-start bg-teal-500 hover:bg-teal-500'>
                    Appointment
                </Button>
                </div>
            </CardContent>
            </div>
            <div className="w-full sm:w-[200px] relative bg-black hidden sm:block">
            <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={video2} />
                Your browser does not support the video tag.
            </video>
            </div>
        </Card>
        </div>

     
            </ContainerWithOutSideBar>
            {/* another sections----------- */}
            <div className="mt-5">
                <TreatmentSection></TreatmentSection>
            </div>
            <div className="mt-8">
                <WomansCareSection></WomansCareSection>
            </div>
            <div className="mt-8">
                <SkinCareSection></SkinCareSection>
            </div>
            <div className="mt-8">
                <MansCareSection></MansCareSection>
            </div>
            <div className="mt-8">
                <DevicesEquipment></DevicesEquipment>
            </div>
            
        </div>
    );
};

export default IntroductionSection;