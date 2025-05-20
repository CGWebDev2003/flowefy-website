import madeInGermanyLogo from "../../assets/mig_logo.png";
import "./footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="col col1">
                    
                </div>
                <div className="col col2">
                    <h1 className="flowefyLogo">flowefy.</h1>
                    <img src={madeInGermanyLogo} className="madeInGermanyLogo" />
                </div>
                <div className="col col3">
                    <a className="footerLink" href="/impressum">Impressum</a>
                    <a className="footerLink" href="/datenschutz">Datenschutz</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;