import Container from "@/LayOut/Container";
import CompareComponent from "./CompareComponent";

const ComparePrice = () => {
    return (
    <div className="max-w-[1480px] mx-auto mb-5">
            <h1 className="text-center text-6xl font-bold">Compare medicine price</h1>
            <Container className="text-[#e8eaf5]">
                <CompareComponent></CompareComponent>
            </Container>
        </div>
    );
};

export default ComparePrice;