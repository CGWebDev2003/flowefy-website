import React, { useState, useEffect } from 'react';
import "./placeholder.css";
import "animate.css";

function PlaceholderSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Ratedo Badge Script
        const badgeScript = document.createElement("script");
        badgeScript.src = "https://www.ratedo.de/js/widgets/ratedo-badge.min.js";
        badgeScript.async = true;
        document.body.appendChild(badgeScript);

        // Ratedo Widget Script
        const widgetScript = document.createElement("script");
        widgetScript.src = "https://www.ratedo.de/js/widgets/ratedo-widget18.min.js";
        widgetScript.async = true;
        document.body.appendChild(widgetScript);
    }, []);

    function sendForm() {
        const mailto = `mailto:flowefy@skymail.de?subject=Kontaktformular Anfrage&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0ATelefon: ${encodeURIComponent(phone)}%0D%0ANachricht: ${encodeURIComponent(message)}`;
        window.location.href = mailto;
    }

    return (
        <div className="placeholderSection">
            <div className="leftSide">
                <span className="heroSubtitle">creative. individual. easy.</span>
                <h1 className="heroTitle">Marketing Made Easy</h1>
                <p className="heroText">
                    Leider befindet sich die Website aktuell noch im Bau. Ihre Nachrichten erreichen uns natürlich trotzdem. Besuchen Sie doch unseren Instagram Profil oder senden Sie uns eine Nachricht.
                </p>

                {/* Ratedo Badge */}
                <div style={{ maxWidth: "110px", margin: "0" }} 
                     className="ratedo_badge" 
                     data-ratedo_id="868d2acc958777666a16632fd681871581822797" 
                     data-type="default">
                </div>

                {/* Ratedo Widget */}
                <div className="ratedo-w18" 
                     data-ratedo_id="868d2acc958777666a16632fd681871581822797">
                </div>
            </div>

            <div className="rightSide">
                <div className="contactContainer" id="contactContainer">
                    <div className="contactContent">
                        <h1 className="contactTitle">Kontakt</h1>

                        <div className="inputBox">
                            <span className='inputTitle'>Vollständiger Name*</span>
                            <input
                                placeholder="Max Mustermann"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="inputBox">
                            <span className='inputTitle'>Email*</span>
                            <input
                                placeholder="beispiel@email.de"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="inputBox">
                            <span className='inputTitle'>Telefon*</span>
                            <input
                                placeholder="+49 123 456789"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="inputBox">
                            <span className='inputTitle'>Nachricht*</span>
                            <input
                                placeholder="Ihre Nachricht..."
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <span className="privacyText">
                            Mit dem senden akzeptieren Sie den <a className="privacyLink" href="#">Datenschutz</a>
                        </span>

                        <button type="button" className="sendButton" id="sendButton" onClick={sendForm}>
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
