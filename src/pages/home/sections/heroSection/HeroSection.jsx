import "./heroSection.css";
import 'atropos/css';

function HeroSection() {
    function scrollToSection() {
    document.getElementById("banner-section").scrollIntoView({
        behavior: "smooth"
    });
    }

    return (
        <div className="heroSection" id="home">
            <span className="topPill"><i className="bi bi-geo-alt-fill"></i> Leipzig  <i className="bi bi-arrow-right"></i>  [🇩🇪🇦🇹🇨🇭 DACH ]</span>
            <h1 className="heroTitle">Webdesign für<br/>Startups & Macher</h1>
            <p className="heroText">
                Wir denken uns in eure Marke und eure Kunden hinein – und gestalten Websites, die nicht nur gut aussehen, sondern funktionieren. Kreativ, durchdacht und mit dem Anspruch, echte Qualität abzuliefern.
                <span className="highlighted bold">Schnell. Individuell. Bezahlbar.</span>
            </p>
            <a href="https://tally.so/r/wk4EG1" target="_blank" className="heroCTAButton" type="button">Jetzt anfragen <i className="bi bi-arrow-up-right"></i></a>
            <a href="#banner-section" className="heroDownButton"><i class="bi bi-mouse"></i></a>
        </div>
    );
}

export default HeroSection;
