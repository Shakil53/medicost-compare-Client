import Container from "@/LayOut/Container";
import CompareComponent from "./CompareComponent";

const ComparePrice = () => {
    
    return (
    <div className="max-w-[1480px] mx-auto mb-5">
            {/* <h1 className="text-center hidden sm:block sm:text-6xl font-bold">Choose your affordable purchases</h1> */}
            <h1 className="text-center hidden sm:block sm:text-6xl font-bold h-16 mt-2  shadow-2xl text-3xl  bg-gradient-to-tr from-[#02AABD] to-[#00CDAC] text-fuchsia-100 bg-clip-text text-transparent leading-tight">
                CHOOSE YOUR AFFORDABLE PURCHASES
            </h1>
            <Container className="text-[#e8eaf5]">
                <CompareComponent></CompareComponent>
            </Container>
        </div>
    );
};

export default ComparePrice;