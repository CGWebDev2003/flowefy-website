import "./testimonialSection.css";

function TestimonialSection() {
    return(
        <div className="testimonialSection">
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
                <div className="testimonial">
                    <div className="ratedo-w1" data-ratedo_id="25293f2761d658cc70c19515861842d712751bdc"></div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;