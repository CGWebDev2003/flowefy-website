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
                <div className="contactButtonBox">
                    <p>Jetzt deine Website </p>
                    <div className="inqButtonBox contactInqButton">
                        <button type="button" className="inqButton" onClick={openInquiry}>Anfragen <i className="bi bi-arrow-up-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;