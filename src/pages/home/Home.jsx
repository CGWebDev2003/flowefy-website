import { useEffect } from "react";
import "./home.css";
import HeroSection from "./sections/heroSection/HeroSection";
import BannerSection from "./sections/bannerSection/BannerSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import CheckupSection from "./sections/checkupSection/CheckupSection";
import ServiceSection from "./sections/serviceSection/ServiceSection";
import TestimonialSection from "./sections/testimonialSection/TestimonialSection";
import ContactSection from "./sections/contactSection/ContactSection";

function Home() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.ratedo.de/js/widgets/ratedo-widget1.min.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <>
            <main>
                <div className="mainContent">
                    <HeroSection />
                    <BannerSection />
                    <AboutSection />
                    <CheckupSection />
                    <ServiceSection />
                    <TestimonialSection />
                    <ContactSection />
                </div>
            </main>
        </>
    );
}

export default Home;