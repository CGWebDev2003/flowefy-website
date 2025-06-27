import "./heroSection.css";

function CheckHeroSection() {
    return(
        <div className="checkHeroSection">
            <div className="checkHeroSectionContent">
                <span className="topPill"><i className="bi bi-check2-circle"></i> 100% kostenlos & unverbindlich</span>
                <h1 className="checkHeroTitle">Kostenloser<br/>Website-Check</h1>
                <p className="checkHeroText">Analysiere deine Website in <span className="highlighted bold">5 wichtigen Bereichen</span> und erhalte sofort professionelle Verbesserungsvorschläge</p>
                <div className="checkHeroFeatures">
                    <span className="heroFeature"><i className="bi bi-check2-circle checkFeatureIcon"></i> Design-Analyse</span>
                    <span className="heroFeature"><i className="bi bi-check2-circle checkFeatureIcon"></i> Performance-Check</span>
                    <span className="heroFeature"><i className="bi bi-check2-circle checkFeatureIcon"></i> SEO-Bewertung</span>
                    <span className="heroFeature"><i className="bi bi-check2-circle checkFeatureIcon"></i> Mehr</span>
                </div>
                <a href="https://tally.so/r/wk4EG1" target="_blank" className="checkHeroCTAButton" type="button">Jetzt kostenlos prüfen <i className="bi bi-arrow-up-right"></i></a>
            </div>
        </div>
    );
}

export default CheckHeroSection;