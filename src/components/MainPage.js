import React from 'react'
import Header from "../components/Header";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import SectionCompanies from "../components/SectionCompanies";
import SectionRegular from "../components/SectionRegular";
import SectionTestimonial from "../components/SectionTestimonial";
import FooterSection from "../components/FooterSection";
import HeaderOverlay from "../components/HeaderOverlay"
import { useLocation } from 'react-router-dom';



function MainPage() {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div>
            <Header />

            <FirstSection />
            <SecondSection />
            <SectionCompanies />
            <SectionRegular />
            <SectionTestimonial />
            <FooterSection />
            {/* <SignUp />
            <SignIn /> */}
        </div >
    )
}

export default MainPage