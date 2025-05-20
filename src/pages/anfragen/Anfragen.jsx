import inquiryImage from "../../assets/inquiry_image.jpg";
import "./anfragen.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

function Anfragen() {
    function wait(seconds) {
        let millisecoonds = seconds * 1000;
        return new Promise(resolve => setTimeout(resolve, millisecoonds));
    }

    useEffect(() => {
        const form = document.querySelector(".inquiryForm");

        const sendEmail = async (e) => {
            e.preventDefault();

            try {
                const result = await emailjs.sendForm(
                    "service_1faxzhf",
                    "template_6dnw9ol",
                    form,
                    "pI_Fi-QXsToZikOzI"
                );
                console.log("Erfolgreich gesendet:", result.text);
                form.reset();
                const toast = document.getElementById("successToast");
                toast.style.display = "flex";
                await wait(5); // hier wird wirklich gewartet
                toast.style.display = "none";
            } catch (error) {
                console.error("Fehler beim Senden:", error.text);
                const errorToast = document.getElementById("errorToast");
                errorToast.style.display = "flex";
                await wait(5); // hier ebenfalls
                errorToast.style.display = "none";
            }
        };
        form?.addEventListener("submit", sendEmail);

        return () => {
            form?.removeEventListener("submit", sendEmail);
        };
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="toast successToast animate__animated animate__animate__backInUp" id="successToast">
                    <p>Anfrage erfolgreich versendet!</p>
                </div>
                <div className="toast errorToast animate__animated animate__animate__backInUp" id="errorToast">
                    <p>Anfrage erfolgreich versendet!</p>
                </div>
                <div className="mainContent">
                    <div className="inquiryContainer">
                        <div className="inquiryFormBox">
                            <h1 className="headline inquiryHeadline">Frage unverbindlich dein Projekt an!</h1>
                            <form className="inquiryForm">
                                <div className="formGroup">
                                    <label htmlFor="name">Vollständiger Name*</label><br />
                                    <input type="text" id="name" name="name" placeholder="Max Mustermann" required />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="product">Produkt auswählen*</label><br />
                                    <select id="product" name="product" required>
                                        <option value="">-- Auswählen --</option>
                                        <option>Landingpage</option>
                                        <option>One Pager</option>
                                        <option>Vollständige Website</option>
                                        <option>Link Tree</option>
                                        <option>Digitale Visitenkarte</option>
                                        <option>Sonstiges</option>
                                        <option>Ich weiß es nicht</option>
                                    </select>
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="telefon">Telefon:</label><br />
                                    <input type="tel" id="telefon" name="telefon" placeholder="+49 123 456789" required />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="email">E-Mail</label><br />
                                    <input type="email" id="email" name="email" placeholder="beispiel@mail.de" required />
                                </div>
                                <div className="formGroup">
                                    <label htmlFor="message">Nachricht</label><br />
                                    <textarea id="message" name="message" placeholder="Ihre Nachricht..." required></textarea>
                                </div>
                                <p className="privacyText">Mit dem Absenden akzeptierst du die <a href="/datenschutz">Datenschutzbestimmungen</a></p>
                                <button type="submit" className="inquirySendButton">Absenden</button>
                            </form>
                        </div>
                        <div className="inquiryImageBox">
                            <img src={inquiryImage} alt="Anfrage" className="inquiryImage" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Anfragen;
