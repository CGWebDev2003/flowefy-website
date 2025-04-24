import "./placeholder.css";
import "animate.css";

function PlaceholderSection() {
    function runAnimation(target, animation) {
        const targetElement = document.getElementById(target);
        targetElement.classList.add("animate__animated");
        targetElement.classList.add(animation);
    }


    function openContactForm() {
        const contactForm = document.getElementById("contactContainer");
        contactForm.style.display = "flex";
        runAnimation("contactContainer", "animate__backInRight");
    }

    return(
        <div className="placeholderSection">
            <div className="leftSide">
                <span className="heroSubtitle">
                    creative. individual. easy.
                </span>
                <h1 className="heroTitle">
                    Marketing Made Easy
                </h1>
                <p className="heroText">
                    Leider befindet sich die Website aktuell noch im Bau. Ihre Nachrichten erreichen uns natürlich trotzdem. Besuchen Sie doch unseren Instagram Profil oder senden Sie uns eine Nachricht.
                </p>
                <button className="ctaButton" onClick={openContactForm}>
                    Nachricht senden
                </button>
            </div>
            <div className="rightSide">
                <div className="contactContainer" id="contactContainer">
                    <div className="contactContent">
                        <h1 className="contactTitle">Kontakt</h1>
                        <div className="inputBox">
                            <span>Vollständiger Name*</span>
                            <input id="" placeholder="Max Mustermann" required></input>
                        </div>
                        <div className="inputBox">
                            <span>Email*</span>
                            <input id="" placeholder="beispiel@email.de" required></input>
                        </div>
                        <div className="inputBox">
                            <span>Telefon*</span>
                            <input id="" placeholder="+49 123 456789" required></input>
                        </div>
                        <div className="inputBox">
                            <span>Nachricht*</span>
                            <input id="" placeholder="Ihre Nachricht..." required></input>
                        </div>
                        <span className="privacyText">
                            Mit dem senden akzeptieren Sie den <a className="privacyLink" href="#">Datenschutz</a>
                        </span>
                        <button type="button" className="sendButton" id="sendButton">
                            Senden                            <i class="bi bi-send-fill"></i>
                        </button>
                    </div>
                    <div className="linksLegal">
                        <a href="#">Impressum</a> <span className='devider'>|</span> <a href="#"> Datenschutz</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceholderSection;