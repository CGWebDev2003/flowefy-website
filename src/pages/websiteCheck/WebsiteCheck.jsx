import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import CheckHeroSection from "./sections/heroSection/HeroSection";
import FeatureSection from "./sections/featureSection/FeatureSection";
import ProcessSection from "./sections/processSection/ProcessSection";
import CTASection from "./sections/ctaSection/CTASection";

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
                    "template_6ncuh1i",
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
            <main>
                <CheckHeroSection />
                <FeatureSection />
                <ProcessSection />
                <CTASection />
            </main>
        </>
    );
}

export default WebsiteCheck;
