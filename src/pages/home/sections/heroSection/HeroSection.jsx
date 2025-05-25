import "./heroSection.css";
import 'atropos/css';
import Atropos from 'atropos/react';

function HeroSection() {
    return (
        <div className="heroSection">
            <Atropos shadow={false} activeOffset={40} className="my-atropos">
                
                <h1 className="heroHeadline" data-atropos-offset="3">
                    Webdesign<br />Agency
                </h1>
                
                <h3 className="heroSubTitle" data-atropos-offset="0">
                    creative. individual. easy.
                </h3>
                
                <div className="downArrows" data-atropos-offset="2">
                    <i className="bi bi-chevron-down downArrow"></i>
                    <i className="bi bi-chevron-down downArrow"></i>
                    <i className="bi bi-chevron-down downArrow"></i>
                </div>

            </Atropos>
        </div>
    );
}

export default HeroSection;
