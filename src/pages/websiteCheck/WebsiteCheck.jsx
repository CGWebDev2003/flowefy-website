import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./websiteCheck.css";

function WebsiteCheck() {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_1faxzhf",
            "template_6ncuh1i",
            form.current,
            "pI_Fi-QXsToZikOzI"
        ).then(
            (result) => {
                setStatusMessage("Deine Anfrage wurde erfolgreich gesendet!");
                form.current.reset();
            },
            (error) => {
                setStatusMessage("Fehler beim Senden. Bitte versuche es erneut.");
                console.error(error.text);
            }
        );
    };

    return (
        <>
            <Header />
            <div className="websiteCheckSection">
                <div className="websiteCheckBox">
                    <h1 className="checkTitle">
                        <span className="flowefy flowefyCheck">flowefy</span>-Website-Check
                    </h1>
                    <p className="checkText">Lass deine Website zu 100% gratis von uns testen!</p>

                    <form ref={form} onSubmit={sendEmail} className="websiteCheckForm">
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder="deine@mail.de" required />

                        <label>Website-URL</label>
                        <input type="url" name="website_url" placeholder="www.deineseite.de" required />

                        <label>Was soll geprüft werden?</label>
                        <div className="checkboxGroup">
                            <label><input type="checkbox" name="checklist" value="Design" /> Design</label>
                            <label><input type="checkbox" name="checklist" value="Performance" /> Performance</label>
                            <label><input type="checkbox" name="checklist" value="Barrierefreiheit" /> Barrierefreiheit</label>
                            <label><input type="checkbox" name="checklist" value="SEO" /> SEO</label>
                        </div>

                        <button type="submit">Absenden</button>
                        {statusMessage && <p className="statusMessage">{statusMessage}</p>}
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default WebsiteCheck;
