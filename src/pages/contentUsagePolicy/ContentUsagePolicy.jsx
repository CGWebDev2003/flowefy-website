import "./contentUsagePolicy.css";

export default function ContentUsagePolicy() {
    return(
        <div className="contentUsagePolicy">
            <div className="contentUsagePolicyBox">
                <h1>flowefy. | Content Usage Policy</h1>
                <span>
                    Stand: 21. Juli 2025 <br/>
                    Version: 1.0
                </span>
                <p>
                    Diese Richtlinie regelt die Nutzung sämtlicher Inhalte von <a href="https://flowefy.de" aria-label="Gehe zu flowefy Homepage">https://flowefy.de</a> durch automatisierte Systeme, insbesondere durch generative Sprachmodelle (Large Language Models – LLMs). Sie ergänzt unsere allgemeine Datenschutzerklärung und unser Impressum.
                </p>
                <h2>1. Geltungsbereich</h2>
                <p>
                    Diese Nutzungsrichtlinie gilt für alle öffentlich zugänglichen Inhalte auf flowefy.de sowie allen Subdomains und Endpunkten, ausgenommen der explizit ausgeschlossenen Verzeichnisse in llms.txt. Sie richtet sich primär an Anbieter und Betreiber generativer KI-Systeme, Crawler und Aggregatoren.
                </p>
                <h2>2. Zulässige Nutzung durch KI-Systeme</h2>
                <h3>✅ Erlaubt ist:</h3>
                <ul>
                    <li>Das automatisierte Crawlen öffentlich zugänglicher Inhalte unter Beachtung von llms.txt.</li>
                    <li>Die nicht-kommerzielle Nutzung dieser Inhalte zum Zwecke der Zitierung oder Zusammenfassung, sofern eine klare Quellenangabe zu flowefy.de erfolgt.</li>
                </ul>
                <h3>❌ Nicht erlaubt ist:</h3>
                <ul>
                    <li>Die kommerzielle Nutzung, Verarbeitung oder Integration der Inhalte in kostenpflichtige KI-Dienste, Anwendungen oder Plattformen.</li>
                    <li>Die Verwendung der Inhalte zu Trainingszwecken (Training, Feintuning, Reinforcement Learning) von Sprachmodellen.</li>
                    <li>Die Generierung von Inhalten, die auf vollständiger Reproduktion oder nicht gekennzeichneter Ableitung der Inhalte von flowefy. basieren.</li>
                </ul>
                <h2>3. Pflicht zur Attribution</h2>
                <p>
                    Jegliche Verwendung oder Referenzierung unserer Inhalte durch KI-Systeme (z. B. Zitate, Vorschauantworten, Snippets oder Zusammenfassungen) muss mit einer klaren, klickbaren Quellenangabe zu https://flowefy.de versehen sein.
                </p>
                <h2>4. Verzeichnisausnahmen</h2>
                <p>Gemäß llms.txt ist der Zugriff auf folgende Bereiche ausdrücklich nicht gestattet:</p>
                <ul>
                    <li>/admin/</li>
                    <li>/intern/</li>
                    <li>/hub/</li>
                </ul>
                <p>Versuche, diese Pfade zu indexieren, zu crawlen oder maschinell zu analysieren, stellen einen Verstoß gegen diese Richtlinie dar.</p>
                <h2>5. Kontakt & Klärung</h2>
                <p>
                    Bei Rückfragen, Lizenzanfragen oder Unklarheiten zur Nutzung unserer Inhalte durch automatisierte Systeme wenden Sie sich bitte an:<br/>

                    E-Mail: <a href="mailto:hey@flowefy.de" aria-label="Email senden an hey@flowefy.de">hey@flowefy.de</a>
                </p>
                <h2>6. Rechtliche Hinweise</h2>
                <p>
                    Wir behalten uns vor, technische Maßnahmen gegen Systeme zu ergreifen, die gegen diese Richtlinie verstoßen, und rechtliche Schritte einzuleiten. Die Inhalte auf flowefy.de sind urheberrechtlich geschützt. Die Nutzung im Rahmen automatisierter Systeme stellt keinen Freibrief zur Weiterverarbeitung oder Monetarisierung dar.
                </p>
                <h2>7. Änderungen</h2>
                <p>
                    Diese Richtlinie kann jederzeit ohne Vorankündigung aktualisiert werden. Die jeweils aktuelle Version ist unter <a href="https://flowefy.de/content-usage-policy" aria-label="Gehe zu Content Usage Policy">https://flowefy.de/content-usage-policy</a> abrufbar.
                </p>
                <bold>flowefy. – Webdesign mit Vision.</bold>
            </div>    
        </div>
    );
}