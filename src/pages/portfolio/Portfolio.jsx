import "./portfolio.css";

const projects = [
    {
        name: "Floral Studio",
        industry: "E-Commerce & Branding",
        description: "Shop mit sanftem Storytelling, reduzierten Kaufflows und Conversion-optimierten Produktseiten.",
        metrics: ["+32% Checkout-Quote", "PageSpeed 96/100", "Integrierter Gift-Builder"],
        link: "https://flowefy.de/",
        tags: ["Shop", "UX Writing", "Headless CMS"],
    },
    {
        name: "Mountain Events",
        industry: "Event & Ticketing",
        description: "Onepager mit klarem Funnel, Live-Kapazitäten und eingebautem Anfrage-Formular.",
        metrics: ["<1,5 s LCP", "20% mehr Leads", "Automatisierte Bestätigungen"],
        link: "https://flowefy.de/",
        tags: ["Landing", "Automations", "React"],
    },
    {
        name: "Studio Nord",
        industry: "Dienstleistung",
        description: "Portfolio-Site mit modularen Sektionen, SEO-Grundgerüst und flexiblen Inhaltsblöcken.",
        metrics: ["CMS Übergabe", "Core Web Vitals grün", "Mehrsprachig vorbereitet"],
        link: "https://flowefy.de/",
        tags: ["Corporate", "SEO", "Design System"],
    },
];

function Portfolio() {
    return (
        <main className="portfolioPage">
            <section className="portfolioHero">
                <div className="portfolioHeroContent">
                    <p className="heroEyebrow">Portfolio</p>
                    <h1 className="heroHeadline">Websites, die verkaufen, überzeugen und gefunden werden.</h1>
                    <p className="heroText">
                        Wir planen, designen und entwickeln Webseiten, die messbar performen. Hier eine Auswahl an Umsetzungen,
                        bei denen UX, Speed und Branding zusammenspielen.
                    </p>
                    <div className="heroBadges">
                        <span className="heroBadge">Echte Projekte statt Mockups</span>
                        <span className="heroBadge">CMS Übergabe & Support</span>
                        <span className="heroBadge">SEO ready</span>
                    </div>
                </div>
                <div className="portfolioStats">
                    <div className="statCard">
                        <p className="statLabel">Ø Conversion-Boost</p>
                        <p className="statValue">+27%</p>
                        <p className="statHint">durch klare Funnels & schnelle Pages</p>
                    </div>
                    <div className="statCard">
                        <p className="statLabel">Launch-Zeitraum</p>
                        <p className="statValue">2-6 Wochen</p>
                        <p className="statHint">inkl. Content, Design & Entwicklung</p>
                    </div>
                    <div className="statCard">
                        <p className="statLabel">Services</p>
                        <p className="statValue">UX / Dev / SEO</p>
                        <p className="statHint">alles aus einer Hand</p>
                    </div>
                </div>
            </section>

            <section className="projectSection">
                <div className="sectionHeader">
                    <p className="sectionEyebrow">Ausgewählte Websites</p>
                    <h2 className="sectionHeadline">Ergebnisse, die man sieht.</h2>
                    <p className="sectionText">
                        Jede Seite ist individuell, aber alle folgen einem klaren Ziel: mehr Anfragen, mehr Verkäufe, mehr Vertrauen.
                    </p>
                </div>
                <div className="projectGrid">
                    {projects.map((project) => (
                        <article className="projectCard" key={project.name}>
                            <div className="projectHeader">
                                <div>
                                    <p className="projectIndustry">{project.industry}</p>
                                    <h3 className="projectName">{project.name}</h3>
                                </div>
                                <div className="projectTags">
                                    {project.tags.map((tag) => (
                                        <span className="projectTag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="projectDescription">{project.description}</p>
                            <ul className="metricList">
                                {project.metrics.map((metric) => (
                                    <li key={metric} className="metricItem">{metric}</li>
                                ))}
                            </ul>
                            <a className="projectLink" href={project.link} target="_blank" rel="noreferrer">
                                Projekt ansehen <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            <section className="ctaSection">
                <div className="ctaContent">
                    <h2 className="ctaHeadline">Bereit für dein Projekt?</h2>
                    <p className="ctaText">
                        Lass uns über Ziele, Budget und Timeline sprechen. Wir bringen Struktur in deine Idee und liefern eine Seite,
                        die morgen schon Ergebnisse liefert.
                    </p>
                </div>
                <div className="ctaActions">
                    <a className="ctaButton" href="/anfragen">Projekt anfragen</a>
                    <a className="ctaGhost" href="/checkup">Kostenlosen Check buchen</a>
                </div>
            </section>
        </main>
    );
}

export default Portfolio;
