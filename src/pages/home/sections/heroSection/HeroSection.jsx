import "./heroSection.css";

function HeroSection() {
    return(
        <div className="heroSection">
            <h1 className="heroHeadline">Webdesign<br/>Agency</h1>
            <h3 className="heroSubTitle">creative. individual. easy.</h3>

            <div className="downArrows">
                <i className="bi bi-chevron-down downArrow"></i>
                <i className="bi bi-chevron-down downArrow"></i>
                <i className="bi bi-chevron-down downArrow"></i>
            </div>
        </div>
    );
}

export default HeroSection;