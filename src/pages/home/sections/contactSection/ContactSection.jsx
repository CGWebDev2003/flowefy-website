import "./contactSection.css";

function ContactSection() {
    function openInquiry() {
        window.location.href = "/anfragen";
    }

    return(
        <div className="contactUsSection">
            <div className="contactUsBox">
                <h1 className="bigTitle contactTitle">Ready to Grow?</h1>
                <p className="contactText">
                    Ganz einfach eine Nachricht schreiben und wir melden uns bei dir!
                </p>
                <a href="/anfragen" className="inqButton contactInqButton" aria-label="Webseite Anfragen">Jetzt Anfragen <i className="bi bi-arrow-up-right"></i></a>
            </div>
        </div>
    );
}

export default ContactSection;