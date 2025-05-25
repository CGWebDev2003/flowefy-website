import "./heroSection.css";
import 'atropos/css';
import Atropos from 'atropos/react';

import heroHanddrawn from "../../../../assets/hero/hero_handdrawn_arrows.png";
import heroIconsSmall from "../../../../assets/hero/hero_icons_small.png";
import heroIconsBig from "../../../../assets/hero/hero_icons_big.png";

function HeroSection() {
    function scrollToSection() {
    document.getElementById("banner-section").scrollIntoView({
        behavior: "smooth"
    });
    }

    return (
        <div className="heroSection">
            <Atropos shadow={false} activeOffset={50} stretchZ={200} className="my-atropos">
                <div
                    className="atropos-layer heroAtroposBox handArrowBox"
                    data-atropos-offset="2"
                >
                </div>
                
                <div
                    className="atropos-layer"
                    data-atropos-offset="1"
                >
                    <h1 className="heroHeadline">
                        Webdesign<br />Agency
                    </h1>
                </div>

                <div
                    className="atropos-layer heroAtroposBox smallIconBox"
                    data-atropos-offset="-3"
                >
                </div>

                <div
                    className="atropos-layer"
                    data-atropos-offset="0"
                >
                    <h3 className="heroSubTitle">
                        Creative. Individual. Unique.
                    </h3>
                </div>

                <div
                    className="atropos-layer heroAtroposBox bigIconBox"
                    data-atropos-offset="1"
                >
                </div>

                <div
                    className="atropos-layer"
                    data-atropos-offset="2"
                >
                    <button type="button" onClick={scrollToSection} className="downArrows">
                        <i className="bi bi-chevron-down downArrow"></i>
                        <i className="bi bi-chevron-down downArrow"></i>
                        <i className="bi bi-chevron-down downArrow"></i>
                    </button>
                </div>

                

            </Atropos>
        </div>
    );
}

export default HeroSection;
