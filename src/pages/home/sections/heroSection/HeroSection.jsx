import "./heroSection.css";
import 'atropos/css';
import Atropos from 'atropos/react';

function HeroSection() {
    function scrollToSection() {
    document.getElementById("banner-section").scrollIntoView({
        behavior: "smooth"
    });
    }

    return (
        <div className="heroSection" id="home">
            <Atropos shadow={false} activeOffset={50} stretchZ={200} className="my-atropos">
                <div className="my-atropos-content">
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
                        data-atropos-offset="-3å"
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
                </div>
            </Atropos>
        </div>
    );
}

export default HeroSection;
