import madeInGermanyLogo from "../../assets/mig_logo.webp";
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="col col1">
                    <h1 className="flowefyLogo">flowefy.</h1>
                    <div className="footerSocialButtons">
                        <a aria-label="Gehe zu Instagram Profil" className="socialLink" href="https://www.instagram.com/flowefy/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a aria-label="Gehe zu LinkedIn Profil" className="socialLink" href="https://www.linkedin.com/company/flowefy/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a aria-label="Gehe zu Behance-Profil" className="socialLink" href="https://www.behance.net/colingrahm2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-behance"></i>
                        </a>
                    </div>
                    <a href="https://www.german-ma.de/" target="_blank" aria-label="Link zum Made-In-Germany-Siegel"><img
                        src={madeInGermanyLogo}
                        className="madeInGermanyLogo"
                        alt="Made in Germany Logo"
                    /></a>
                </div>
                <div className="col col2">
                    <div className="footerNavigation">
                        <h2 className="footerColTitle">Links</h2>
                        <a className="footerLink" href="/#home" aria-label="Gehe zu Home-Seite">Home</a>
                        <a className="footerLink" href="/#about" aria-label="Gehe zu Über uns Seite">Über uns</a>
                        <a className="footerLink" href="/#service" aria-label="Gehe zu Service">Service</a>
                        <a className="footerLink" href="/#testimonials" aria-label="Gehe zu Bewertungen">Bewertungen</a>
                    </div>
                </div>
                <div className="col col4">
                    <div className="footerNavigation">
                        <h2 className="footerColTitle">Für Kunden</h2>
                        <a className="footerLink" href="/checkup" aria-label="Gehe zu Webseiten-Checkup">Website Check</a>
                        <a className="footerLink" href="/freelancer" aria-label="Gehe zu Webseiten-Checkup">Freelancer</a>
                        <a className="footerLink" href="https://tally.so/r/nPZNVx" target="_blank" aria-label="flowefy bewerten">flowefy. bewerten</a>
                    </div>
                </div>
                <div className="col col3">
                    <div className="footerNavigation">
                        <h2 className="footerColTitle">Kontakt</h2>
                        <a className="footerLink" href="mailto:hey@flowefy.de" aria-label="Schreieb eine Email an flowefy">hey<i className="bi bi-at"></i>flowefy.de</a>
                        <a className="footerLink" href="/impressum" aria-label="Gehe zu Impressum">Impressum</a>
                        <a className="footerLink" href="/datenschutz" aria-label="Gehe zu Datenschutz">Datenschutz</a>
                        <a className="footerLink" href="/content-usage-policy" aria-label="Gehe zu Content Usage Policy">Content Usage Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
