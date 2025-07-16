import "./aboutSection.css";

function AboutSection() {
    return(
        <div className="aboutSection" id="about">
            <div className="aboutContent">
                <div className="imageBox">
                    <div className="aboutImage1"></div>
                    <div className="aboutImage2"></div>
                    <div className="aboutImage3"></div>
                </div>
                <div className="textBox">
                    <h1 className="headline">We are <span className="primaryHighlight nunitoText">flowefy.</span></h1>
                    <p className="aboutText">
                        Wir sind eine kreative Webdesign-Agentur mit Sitz nahe Leipzig. Unser Ziel ist es, individuelle und ansprechende Websites zu erstellen, die den Bedürfnissen unserer Kunden entsprechen. Egal, ob du ein kleines Unternehmen oder ein großes Unternehmen bist, wir haben die Lösungen, die du brauchst.
                    </p>
                    <a href="/anfragen" className="anfrageButton"  aria-label="Webseite Anfragen">
                        Jetzt Anfragen
                        <i className="bi bi-arrow-up-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;