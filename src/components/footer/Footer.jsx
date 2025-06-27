import madeInGermanyLogo from "../../assets/mig_logo.webp";
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="col col1">
                    <h1 className="flowefyLogo">flowefy.</h1>
                    <div className="footerSocialButtons">
                        <a className="socialLink" href="https://www.instagram.com/flowefy/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a className="socialLink" href="https://www.linkedin.com/company/flowefy/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a className="socialLink" href="https://www.behance.net/colingrahm2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-behance"></i>
                        </a>
                    </div>
                    <img
                        src={madeInGermanyLogo}
                        className="madeInGermanyLogo"
                        alt="Made in Germany Logo"
                    />
                </div>

                <div className="col col2">
                    <div className="footerNavigation">
                        <h2 className="footerColTitle">Links</h2>
                        <a className="footerLink" href="/#home">Home</a>
                        <a className="footerLink" href="/#about">Über uns</a>
                        <a className="footerLink" href="/checkup">Check Up</a>
                        <a className="footerLink" href="/#service">Service</a>
                        <a className="footerLink" href="/#testimonials">Bewertungen</a>
                    </div>
                </div>

                <div className="col col3">
                    <div className="footerNavigation">
                        <h2 className="footerColTitle">Kontakt</h2>
                        <a className="footerLink" href="mailto:hey@flowefy.de">hey<i className="bi bi-at"></i>flowefy.de</a>
                        <a className="footerLink" href="/impressum">Impressum</a>
                        <a className="footerLink" href="/datenschutz">Datenschutz</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
