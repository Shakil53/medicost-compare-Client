import Main from "@/LayOut/Main";
import ComparePrice from "@/pages/ComparePrice/ComparePrice";
import CancerDoctor from "@/pages/Consultant/CancerDoctor";
import Consultation from "@/pages/Consultant/Consultation";
import MedicineSpecialist from "@/pages/Consultant/MedicineSpecialist";
import Neurology from "@/pages/Consultant/Neurology";
import Ophthalmologist from "@/pages/Consultant/Ophthalmologist";
import AsideNav from "@/pages/Home/Aside/AsideNav";
import Home from "@/pages/Home/Home/Home";
import Constipation from "@/pages/Home/medicineAll/Constipation";
import CoughFlu from "@/pages/Home/medicineAll/CoughFlu";
import Dermatitis from "@/pages/Home/medicineAll/Dermatitis";
import Diarrhea from "@/pages/Home/medicineAll/Diarrhea";
import Eczema from "@/pages/Home/medicineAll/Eczema";
import Fever from "@/pages/Home/medicineAll/Fever";
import Gastric from "@/pages/Home/medicineAll/Gastric";
import Gynecological from "@/pages/Home/medicineAll/Gynecological";
import Nasal from "@/pages/Home/medicineAll/Nasal";
import OralFungalInfection from "@/pages/Home/medicineAll/OralFungalInfection";
import OTCmedicine from "@/pages/Home/medicineAll/OTCmedicine";
import Spasm from "@/pages/Home/medicineAll/Spasm";
import Ulcer from "@/pages/Home/medicineAll/Ulcer";
import Vitamins from "@/pages/Home/medicineAll/Vitamins";
import ZincDeficiency from "@/pages/Home/medicineAll/ZincDeficiency";
import Register from "@/pages/Home/Register/Register";
import Login from "@/pages/login/Login";
import { createBrowserRouter } from "react-router-dom";
// import ComparePrice from "@/Pages/ComparePrice/ComparePrice";
// import CancerDoctor from "@/Pages/Consultant/CancerDoctor";
// import Consultation from "@/Pages/Consultant/Consultant";
// import Consultant from "@/Pages/Consultant/Consultant";


// import MedicineSpecialist from "@/Pages/Consultant/MedicineSpecialist";
// import AsideNav from "@/Pages/Home/Aside/AsideNav";
// import Home from "@/Pages/Home/Home";
// import Register from "@/Pages/Home/Register/Register";
// import Constipation from "@/Pages/Home/medicineAll/Constipation";
// import CoughFlu from "@/Pages/Home/medicineAll/CoughFlu";
// import Dermatitis from "@/Pages/Home/medicineAll/Dermatitis";
// import Diarrhea from "@/Pages/Home/medicineAll/Diarrhea";
// import Eczema from "@/Pages/Home/medicineAll/Eczema";
// import Fever from "@/Pages/Home/medicineAll/Fever";
// import Gastric from "@/Pages/Home/medicineAll/Gastric";
// import Gynecological from "@/Pages/Home/medicineAll/Gynecological";
// import Nasal from "@/Pages/Home/medicineAll/Nasal";
// import OTCmedicine from "@/Pages/Home/medicineAll/OTCmedicine";
// import OralFungalInfection from "@/Pages/Home/medicineAll/OralFungalInfection";
// import Spasm from "@/Pages/Home/medicineAll/Spasm";
// import Ulcer from "@/Pages/Home/medicineAll/Ulcer";
// import Vitamins from "@/Pages/Home/medicineAll/Vitamins";
// import ZincDeficiency from "@/Pages/Home/medicineAll/ZincDeficiency";
// import Login from "@/Pages/login/Login";
// import {createBrowserRouter} from "react-router-dom";
// import Neurology from "@/Pages/Consultant/Neurology";
// import Ophthalmologist from "@/Pages/Consultant/Ophthalmologist";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'compare-price',
                element: <ComparePrice></ComparePrice>
            },
            {
                path: 'consultant',
                element: <Consultation></Consultation>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
            ]
              },
              {
                path: '/aside',
                element: <AsideNav></AsideNav>,
                children: [
                    {
                        path: 'otc-medicine',
                        element: <OTCmedicine></OTCmedicine>
                    },
                    {
                        path: 'nasal',
                        element: <Nasal></Nasal>
                    },
                    {
                        path: 'gastric',
                        element: <Gastric></Gastric>
                    },
                    {
                        path: "zinc-deficiency",
                        element: <ZincDeficiency></ZincDeficiency>
                    },
                    {
                        path: 'eczema',
                        element: <Eczema></Eczema>
                    },
                    {
                        path: "Spasm",
                        element: <Spasm></Spasm>
                    },
                    {
                        path: 'cough-flu',
                        element: <CoughFlu></CoughFlu>
                    },
                    {
                        path: "diarrhea",
                        element: <Diarrhea></Diarrhea>

                    },
                    {
                        path: "fever",
                        element: <Fever></Fever>
                    },
                    {
                        path: "ulcer",
                        element: <Ulcer></Ulcer>
                    },
                    {
                        path: "constipation",
                        element: <Constipation></Constipation>
                    },
                    {
                        path: "vitamins",
                        element: <Vitamins></Vitamins>
                    },
                    {
                        path: "dermatitis",
                        element: <Dermatitis></Dermatitis>
                    },
                    {
                        path: 'oral-fungal-infection',
                        element: <OralFungalInfection></OralFungalInfection>
                    },
                    {
                        path: 'gynecological',
                        element: <Gynecological></Gynecological>
                    }

                ]
                }
            ,
            {
                path: '/consultant',
                element: <Consultation></Consultation>,
                children: [
           
                    {
                        path: 'cancer-specialist',
                        element: <CancerDoctor></CancerDoctor>
                    },
                    {
                        path: 'medicine-specialist',
                        element: <MedicineSpecialist></MedicineSpecialist>
                    },
                    {
                        path: 'neurology',
                        element: <Neurology></Neurology>
                    },
                    {
                        path: 'ophthalmologist',
                        element: <Ophthalmologist></Ophthalmologist>
                    }
                ]
            }
        ]);