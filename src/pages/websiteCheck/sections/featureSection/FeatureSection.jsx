import "./featureSection.css";

function FeatureSection() {
    return(
        <div className="featureSection">
            <div className="featureContent">
                <div className="featureHeader">
                    <h2 className="featureHeadline">Was wird gecheckt?</h2>
                    <a href="/checkupTest" className="checkInquiryButton" >Test Starten <i className="bi bi-play-circle"></i></a>
                </div>
                <div className='featureList'>
                    <div className='featureCard'>
                        <h3 className='featureCardTitle'>
                            ✅ UX & Design Bewertung
                        </h3>
                        <p className='cardDescription'>
                            Wir analysieren, wie benutzerfreundlich deine Website aufgebaut ist – vom Seitenaufbau bis zur Navigation. Dabei achten wir auf klare Strukturen, intuitive Bedienung und visuelle Hierarchien, die deine Zielgruppe optimal ansprechen.
                        </p>
                    </div>
                    <div className='featureCard'>
                        <h3 className='featureCardTitle'>
                            ⚡ Performance-Analyse
                        </h3>
                        <p className='cardDescription'>
                            Ladezeiten sind entscheidend: Wir prüfen, wie schnell deine Website lädt und wo technische Bremsen versteckt sind. Dazu gehören z. B. große Bilder, unoptimierter Code oder unnötige Skripte.
                        </p>
                    </div>
                    <div className='featureCard'>
                        <h3 className='featureCardTitle'>
                            📱 Mobile-Optimierung
                        </h3>
                        <p className='cardDescription'>
                            Mehr als 60 % der Nutzer sind mobil unterwegs – wir zeigen dir, wie gut deine Seite auf Smartphones und Tablets funktioniert. Dabei bewerten wir sowohl Layout-Anpassungen als auch die Touch-Bedienbarkeit.
                        </p>
                    </div>
                    <div className='featureCard'>
                        <h3 className='featureCardTitle'>
                            🧠 SEO-Basics & technische Struktur
                        </h3>
                        <p className='cardDescription'>
                            Wird deine Website bei Google gefunden? Wir prüfen, ob grundlegende SEO-Faktoren stimmen – wie z. B. saubere Überschriftenstruktur, Meta-Tags, Alt-Texte und Crawlability.
                        </p>
                    </div>
                    <div className='featureCard'>
                        <h3 className='featureCardTitle'>
                            🧩 Branding & CI-Konsistenz
                        </h3>
                        <p className='cardDescription'>
                            Wir werfen einen Blick darauf, wie gut dein Markenauftritt auf der Website umgesetzt ist – von Farben und Typografie bis zur Bildsprache. Eine konsistente Corporate Identity sorgt für Wiedererkennung und Professionalität.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;