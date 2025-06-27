import "./featureSection.css";

function FeatureSection() {
    return(
        <div className="featureSection">
            <div className="featureContent">
                <div className="featureHeader">
                    <h2 className="featureHeadline">Was wird analysiert?</h2>
                </div>
                <div className='featureList'>
                    <p className="featureText">Unser umfassender Website-Check deckt alle wichtigen Bereiche ab, die für den Erfolg deiner Website entscheidend sind.</p>
                    <div className='featureCard'>
                        <div className="featureIconBox designIconBox">
                            <i className="bi bi-palette-fill"></i>
                        </div>
                        <h3 className="featureCardTitle">Design-Analyse</h3>
                        <p className="featureCardText">Bewertung von Layout, Farbgebung, Typografie und visueller Hierarchie für optimale Nutzererfahrung</p>
                        <p className="inclusive"><i className="bi bi-check2-circle"></i> Kostenlos enthalten</p>
                    </div>
                    <div className='featureCard'>
                        <div className="featureIconBox performanceIconBox">
                            <i className="bi bi-lightning-charge-fill"></i>
                        </div>
                        <h3 className="featureCardTitle">Performance-Check</h3>
                        <p className="featureCardText">Ladegeschwindigkeit, Core Web Vitals und technische Optimierungen für bessere Rankings</p>
                        <p className="inclusive"><i className="bi bi-check2-circle"></i> Kostenlos enthalten</p>
                    </div>
                    <div className='featureCard'>
                        <div className="featureIconBox barriereIconBox">
                            <i className="bi bi-eye-fill"></i>
                        </div>
                        <h3 className="featureCardTitle">Barrierefreiheit</h3>
                        <p className="featureCardText">Bewertung der Zugänglichkeit von Layout, Farbkontrasten, Schriftgestaltung und Struktur zur Sicherstellung einer inklusiven und barrierearmen Nutzererfahrung.</p>
                        <p className="inclusive"><i className="bi bi-check2-circle"></i> Kostenlos enthalten</p>
                    </div>
                    <div className='featureCard'>
                        <div className="featureIconBox codeIconBox">
                            <i className="bi bi-code-slash"></i>
                        </div>
                        <h3 className="featureCardTitle">Technische Umsetzung</h3>
                        <p className="featureCardText">Code-Qualität, Struktur und technische Standards für maximale Stabilität</p>
                        <p className="inclusive"><i className="bi bi-check2-circle"></i> Kostenlos enthalten</p>
                    </div>
                    <div className='featureCard'>
                        <div className="featureIconBox seoIconBox">
                            <i className="bi bi-search"></i>
                        </div>
                        <h3 className="featureCardTitle">SEO-Bewertung</h3>
                        <p className="featureCardText">Suchmaschinenoptimierung, Meta-Tags und Ranking-Faktoren für bessere Sichtbarkeit</p>
                        <p className="inclusive"><i className="bi bi-check2-circle"></i> Kostenlos enthalten</p>
                    </div>
                </div>
                <div className="processButtonBox">
                    <a href="https://tally.so/r/wk4EG1" target="_blank" className="checkInquiryButton" >Test Starten <i className="bi bi-play-circle"></i></a>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;