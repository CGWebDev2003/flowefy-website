import FreelancerHeroSection from "./sections/heroSection/HeroSection";
import FreelancerServiceSection from "./sections/serviceSection/FreelancerService";
import TechStackSection from "./sections/techStackSection/TechStackSection";
import AdvantageSection from "./sections/advantageSection/AdvantageSection";
import "./freelancer.css";

export default function Freelancer() {
    return(
        <div>
            <FreelancerHeroSection />
            <FreelancerServiceSection />
            <AdvantageSection />
            <TechStackSection />
        </div>
    )
}