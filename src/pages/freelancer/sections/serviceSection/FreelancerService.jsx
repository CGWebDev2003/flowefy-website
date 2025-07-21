import "./freelancerService.css";

export default function FreelancerServiceSection() {
    return(
        <div className="freelanceServiceSection">
            <div className="featureContent">
                <div className="featureHeader">
                    <h2 className="featureHeadline">Freelance-Leistungen</h2>
                </div>
                <div className='featureList'>
                    <div className='featureCard'>
                        <h3 className="featureCardTitle freelanceCardTitle">Websites/Webanwendungen</h3>
                        <p className="featureCardText">Jede Marke verdient einen digitalen Auftritt, der nicht nur gut aussieht, sondern sich gut anfühlt. Ich entwickle Websites und Webanwendungen, die Nutzer intuitiv führen, Marken sichtbar machen und Ideen digital erlebbar machen – schnell, flexibel und mit viel Liebe zum Detail.</p>
                        <div className="featureCTABox">
                            <span className="featureCTA">✨ Performance, die man spürt</span>
                        </div>
                    </div>
                    <div className='featureCard'>
                        <h3 className="featureCardTitle freelanceCardTitle">Businesslösungen</h3>
                        <p className="featureCardText">Du weißt, wie dein Unternehmen funktioniert – ich baue dir die digitalen Werkzeuge, um es smarter, effizienter und skalierbar zu machen. Ob interne Plattform, Kundenportal oder Workflow-Automatisierung: Ich denke mit, entwickle mit und setze Lösungen um, die echten Mehrwert schaffen.</p>
                        <div className="featureCTABox">
                            <span className="featureCTA">💡 Mit Weitblick & Hands-on Mentalität</span>
                        </div>
                    </div>
                    <div className='featureCard'>
                        <h3 className="featureCardTitle freelanceCardTitle">Technische Umsetzung von Designs</h3>
                        <p className="featureCardText">Große Ideen brauchen eine saubere Bühne. Ich übersetze Designkonzepte in funktionierenden, performanten Code – mit Gefühl für Gestaltung, Präzision im Detail und dem Blick fürs große Ganze. Damit Visionen nicht nur sichtbar, sondern erlebbar werden.</p>
                        <div className="featureCTABox">
                            <span className="featureCTA">👥 Direkt & persönlich – kein Agentur-Blabla</span>
                        </div>
                    </div>
                </div>
                <div className="processButtonBox">
                    <a href="/book-freelancer" target="_blank" className="checkInquiryButton" >Jetzt Buchen <i className="bi bi-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    );
}

