import "./contactSection.css";

function ContactSection() {
    return(
        <div className="contactUsSection">
            <div className="contactUsBox">
                <h1 className="bigTitle contactTitle">Ready to Grow?</h1>
                <p className="contactText">
                    Ganz einfach eine Nachricht schreiben und wir melden uns bei dir!
                </p>
                <div className="contactButtonBox">
                    <a href="mailto:flowefy@skymail.de" className="mailLink">flowefy@skymail.de</a>
                    <a href="/anfragen" className="contactButton anfrageButton">
                        Jetzt Anfragen
                        <i className="bi bi-arrow-up-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;