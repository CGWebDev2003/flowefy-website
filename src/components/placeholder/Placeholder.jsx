import React, { useEffect } from 'react';
import "./placeholder.css";
import "animate.css";

function PlaceholderSection() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.ratedo.de/js/widgets/ratedo-badge.min.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
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

                {/* Ratedo Badge eingebunden */}
                <div style={{ maxWidth: "110px", margin: "0" }} 
                     className="ratedo_badge" 
                     data-ratedo_id="868d2acc958777666a16632fd681871581822797" 
                     data-type="default">
                </div>

            </div>
            <div className="rightSide">
                <div className="contactContainer" id="contactContainer">
                    <div className="contactContent">
                        <h1 className="contactTitle">Kontakt</h1>
                        <div className="inputBox">
                            <span>Vollständiger Name*</span>
                            <input placeholder="Max Mustermann" required />
                        </div>
                        <div className="inputBox">
                            <span>Email*</span>
                            <input placeholder="beispiel@email.de" required />
                        </div>
                        <div className="inputBox">
                            <span>Telefon*</span>
                            <input placeholder="+49 123 456789" required />
                        </div>
                        <div className="inputBox">
                            <span>Nachricht*</span>
                            <input placeholder="Ihre Nachricht..." required />
                        </div>
                        <span className="privacyText">
                            Mit dem senden akzeptieren Sie den <a className="privacyLink" href="#">Datenschutz</a>
                        </span>
                        <button type="button" className="sendButton" id="sendButton">
                            Senden <i className="bi bi-send-fill"></i>
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
