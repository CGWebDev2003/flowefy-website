import checklistImage from "../../../../assets/checkup/checklist.webp";
import "./heroSection.css";

function CheckHeroSection() {
    return(
        <div className="checkHeroSection">
            <div className="checkHeroSectionContent">
                <h1 className="checkHeroTitle">Dein <span className="gratis">Gratis</span> Website <br/> Check</h1>
                <img src={checklistImage} className="checklistImage" alt="Check-Liste" />
            </div>
        </div>
    );
}

export default CheckHeroSection;