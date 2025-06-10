import madeInGermanyLogo from "../../assets/mig_logo.png";
import "./footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="col col1">
                    <h1 className="flowefyLogo">flowefy.</h1>
                    <img src={madeInGermanyLogo} className="madeInGermanyLogo" />
                </div>
                <div className="col col2">
                    <div className="footerNavigation">
                        <a className="footerLink" href="/">Home</a>
                        <a className="footerLink" href="#about">Über uns</a>
                        <a className="footerLink" href="#checkup">Check Up</a>
                        <a className="footerLink" href="#service">Service</a>
                        <a className="footerLink" href="#testimonials">Bewertungen</a>
                        <a className="footerLink" href="/impressum">Impressum</a>
                        <a className="footerLink" href="/datenschutz">Datenschutz</a>
                    </div>
                    <p className="copyright">&copy; 2025 flowefy. Eine Marke von Colin Grahm Media & Commerce | Alle Rechte vorbehalten.</p>
                </div>
            </div>
            <div className="secondFooter">
                <p>Designed and delivered by <a href="https://flowefy.de" target="_blank" className="flowefy">flowefy.</a></p>
            </div>
        </div>
    );
}

export default Footer;