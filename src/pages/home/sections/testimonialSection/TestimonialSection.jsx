import "./testimonialSection.css";

function TestimonialSection() {
    return(
        <div className="testimonialSection" id="testimonials">
            <h1 className="headline testimonialHeadline">Das sagen Kunden</h1>
            <div className="testimonialBox">
                <div href="https://www.ratedo.de/profil/colin-grahm-media" target="_blank" className="testimonial">
                    <div className="testimonialTextBox">
                        <p className="testimonialText">
                            "Vom ersten Gespräch bis zur finalen Umsetzung lief alles reibungslos und professionell. Unsere Wünsche wurden verstanden, kreativ umgesetzt und termingerecht realisiert. Absolute Empfehlung – wir sind sehr zufrieden!"
                        </p>
                    </div>
                    <div className="testimonialAuthorBox">
                        <span className="authorPosition">Dachdeckerfachbetrieb Kaiser</span>
                    </div>
                </div>
                <div href="https://www.ratedo.de/profil/colin-grahm-media" target="_blank" className="testimonial">
                    <div className="testimonialTextBox">
                        <p className="testimonialText">
                            "Sehr gute Komplettbetreuung vom Anfang bis zum Finale des Projektes. Dazu gehören gesamtes Layout, auf Wunsch Erstellung von Fotos, Beratung zu Bildern, Textgestaltung, gut durchdachter und logischer Aufbau der Homepage. Hoher Ideenreichtum, ausgezeichnete Kreativität, zügige Umsetzung. Top."
                        </p>
                    </div>
                    <div className="testimonialAuthorBox">
                        <span className="authorPosition">Dr. Scholz</span>
                    </div>
                </div>
                <div href="https://www.ratedo.de/profil/colin-grahm-media" target="_blank" className="testimonial">
                    <div className="testimonialTextBox">
                        <p className="testimonialText">
                            "Hier habe ich die perfekte Lösung für mein Grafikdesign und mein Branding gefunden. [...]"
                        </p>
                    </div>
                    <div className="testimonialAuthorBox">
                        <span className="authorPosition">Funkendesign</span>
                    </div>
                </div>
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