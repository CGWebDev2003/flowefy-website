import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./websiteCheck.css";

function WebsiteCheck() {
    function wait(seconds) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    useEffect(() => {
        const form = document.querySelector(".websiteCheckForm");

        const sendEmail = async (e) => {
            e.preventDefault();

            try {
                await emailjs.sendForm(
                    "service_1faxzhf",
                    "template_6ncuh1i", // dein Template
                    form,
                    "pI_Fi-QXsToZikOzI"
                );
                form.reset();
                const toast = document.getElementById("successToast");
                toast.style.display = "flex";
                await wait(5);
                toast.style.display = "none";
            } catch (error) {
                console.error("Fehler beim Senden:", error.text);
                const errorToast = document.getElementById("errorToast");
                errorToast.style.display = "flex";
                await wait(5);
                errorToast.style.display = "none";
            }
        };

        form?.addEventListener("submit", sendEmail);
        return () => form?.removeEventListener("submit", sendEmail);
    }, []);

    return (
        <>
            <Header />
            <div className="websiteCheckSection">
                {/* Erfolg / Fehler Toasts */}
                <div className="toast successToast animate__animated animate__backInUp" id="successToast">
                    <p>Anfrage erfolgreich versendet!</p>
                </div>
                <div className="toast errorToast animate__animated animate__backInUp" id="errorToast">
                    <p>Fehler beim Senden. Bitte erneut versuchen.</p>
                </div>

                <div className="websiteCheckBox">
                    <h1 className="checkTitle">
                        <span className="flowefy flowefyCheck">flowefy</span> Website Check
                    </h1>
                    <p className="checkText">Lass deine Website gratis von uns testen!</p>

                    <form className="websiteCheckForm">
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

                        <button type="submit" className="sendButton">
                            Absenden <i className="bi bi-arrow-bar-right"></i>
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default WebsiteCheck;
