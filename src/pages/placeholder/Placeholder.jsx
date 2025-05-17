import { useState, useEffect, useRef } from 'react';
import "./placeholder.css";
import "animate.css";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import CookieBanner from '../../components/cookieBanner/CookieBanner.jsx';
import emailjs from '@emailjs/browser';

function Placeholder() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    useEffect(() => {
        const widgetScript = document.createElement("script");
        widgetScript.src = "https://www.ratedo.de/js/widgets/ratedo-widget18.min.js";
        widgetScript.async = true;
        document.body.appendChild(widgetScript);

        const recaptchaScript = document.createElement("script");
        recaptchaScript.src = "https://www.google.com/recaptcha/api.js";
        recaptchaScript.async = true;
        recaptchaScript.defer = true;
        document.body.appendChild(recaptchaScript);
    }, []);

    function wait(seconds) {
        let millisecoonds = seconds * 1000;
        return new Promise(resolve => setTimeout(resolve, millisecoonds));
    }

    async function sendForm(e) {
        e.preventDefault();

        const recaptchaValue = window.grecaptcha.getResponse();
        if (!recaptchaValue) {
            alert("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
            return;
        }

        try {
            const result = await emailjs.sendForm(
                'service_1faxzhf',
                'template_dof4lck',
                form.current,
                'pI_Fi-QXsToZikOzI'
            );

            console.log(result.text);
            document.getElementById('successMessage').style.display = 'block';
            await wait(5);
            document.getElementById('successMessage').style.display = 'none';

            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            window.grecaptcha.reset(); // Reset reCAPTCHA
        } catch (error) {
            console.log(error.text);
            document.getElementById('errorMessage').style.display = 'block';
            await wait(2);
            document.getElementById('errorMessage').style.display = 'none';
        }
    }

    return (
        <>
            <Header />
            <div className="placeholderSection">
                <CookieBanner />
                <div className="leftSide">
                    <span className="heroSubtitle">creative. individual. easy.</span>
                    <h1 className="heroTitle">Marketing Made Easy</h1>
                    <p className="heroText">
                        Leider befindet sich die Website aktuell noch im Bau. Ihre Nachrichten erreichen uns natürlich trotzdem. Besuchen Sie doch unseren Instagram Profil oder senden Sie uns eine Nachricht.
                    </p>
                    <div className="ratedo-w18" data-ratedo_id="25293f2761d658cc70c19515861842d712751bdc"></div>
                </div>

                <div className="rightSide">
                    <div className="contactContainer" id="contactContainer">
                        <div className="contactContent">
                            <h1 className="contactTitle">Kontakt</h1>
                            <form ref={form} onSubmit={sendForm}>
                                <div className="inputBox">
                                    <span className='inputTitle'>Vollständiger Name*</span>
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Max Mustermann"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="inputBox">
                                    <span className='inputTitle'>Email*</span>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="beispiel@email.de"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="inputBox">
                                    <span className='inputTitle'>Telefon*</span>
                                    <input
                                        type="tel"
                                        name="user_phone"
                                        placeholder="+49 123 456789"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <div className="inputBox">
                                    <span className='inputTitle'>Nachricht*</span>
                                    <input
                                        name="message"
                                        placeholder="Ihre Nachricht..."
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>

                                <span className="privacyText">
                                    Mit dem Senden akzeptieren Sie den <a className="privacyLink" href="/datenschutz" target="_blank">Datenschutz</a>
                                </span>

                                {/* reCAPTCHA */}
                                <div className="g-recaptcha" data-sitekey="6LeOYz4rAAAAAO5dlMM13LN-_kI4SXViMkxss7iM"></div>

                                <button type="submit" className="sendButton" id="sendButton">
                                    Senden <i className="bi bi-send-fill"></i>
                                </button>
                            </form>

                            <div className="successMessage animate__animated animate__rubberBand" id="successMessage">
                                <span>Erfolgreich versendet!</span>
                            </div>

                            <div className="errorMessage animate__animated animate__rubberBand" id="errorMessage">
                                <span>Fehler beim versenden!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Placeholder;
