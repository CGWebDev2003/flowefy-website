import { useEffect } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import HeroSection from "./sections/heroSection/HeroSection";
import BannerSection from "./sections/bannerSection/BannerSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import PortfolioSection from "./sections/portfolioSection/PortfolioSection";
import ServiceSection from "./sections/serviceSection/ServiceSection";
import TestimonialSection from "./sections/testimonialSection/TestimonialSection";
import ContactSection from "./sections/contactSection/ContactSection";
import Footer from "../../components/footer/Footer";

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
            <Header></Header>
            <main>
                <div className="mainContent">
                    <HeroSection />
                    <BannerSection />
                    <AboutSection />
                    <PortfolioSection />
                    <ServiceSection />
                    <TestimonialSection />
                    <ContactSection />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;