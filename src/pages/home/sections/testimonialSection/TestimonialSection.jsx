import "./testimonialSection.css";

function TestimonialSection() {
    return(
        <div className="testimonialSection" id="testimonials">
            <h1 className="headline testimonialHeadline">Das sagen Kunden</h1>
            <div className="testimonialBox">
                <a href="https://www.ratedo.de/profil/colin-grahm-media" target="_blank" className="testimonial">
                    <div className="testimonialTextBox">
                        <p className="testimonialText">
                            "Unsere Erwartungen wurden weit übertroffen. Top Design, top Fachkenntnisse und super Service. Unsere Webseite wurde perfekt überarbeitet. Wir können Flowefy nur empfehlen!"
                        </p>
                    </div>
                    <div className="testimonialAuthorBox">
                        <span className="authorPosition">KNS Beschichtung</span>
                    </div>
                </a>
                <a href="https://www.ratedo.de/profil/colin-grahm-media" target="_blank" className="testimonial">
                    <div className="testimonialTextBox">
                        <p className="testimonialText">
                            "Sehr gute Komplettbetreuung vom Anfang bis zum Finale des Projektes. Dazu gehören gesamtes Layout, auf Wunsch Erstellung von Fotos, Beratung zu Bildern, Textgestaltung, gut durchdachter und logischer Aufbau der Homepage. Hoher Ideenreichtum, ausgezeichnete Kreativität, zügige Umsetzung. Top."
                        </p>
                    </div>
                    <div className="testimonialAuthorBox">
                        <span className="authorPosition">Dr. Scholz</span>
                    </div>
                </a>
                <a href="https://www.ratedo.de/profil/colin-grahm-media" target="_blank" className="testimonial">
                    <div className="testimonialTextBox">
                        <p className="testimonialText">
                            "Hier habe ich die perfekte Lösung für mein Grafikdesign und mein Branding gefunden. [...]"
                        </p>
                    </div>
                    <div className="testimonialAuthorBox">
                        <span className="authorPosition">Funkendesign</span>
                    </div>
                </a>
                <div className="testimonial testimonial-4">
                    <span className="testimonialScore">4.7/5.0</span>
                    <span className="testimonialStars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                    </span>
                    <span className="testimonialExcelent">SEHR GUT</span>
                    <span className="testimonialRecommendation">100% Empfehlungen</span>
                    <span classNAme="testimonialAverage">Durchschnitt aus 4 Bewertungen</span>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;