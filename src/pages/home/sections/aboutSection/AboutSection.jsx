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
                    <h1 className="headline">This is <span className="primaryHighlight nunitoText">flowefy.</span></h1>
                    <p className="aboutText">
                        Gegründet von Colin Grahm in der Nähe von Leipzig, steht flowefy. für individuelles Webdesign, das Marken nicht nur digital abbildet, sondern tiefgreifend versteht. Jede Website entsteht auf Basis echter Einblicke – oft direkt vor Ort beim Unternehmen, um Kultur, Werte und Zielgruppen unmittelbar zu erfassen.
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