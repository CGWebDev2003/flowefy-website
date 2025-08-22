import { useState, useRef, useEffect } from "react";
import { makeStyles } from "@griffel/react";

const useClasses = makeStyles({
  aboutSection: {
    width: "100vw",
    backgroundColor: "var(--bg-color)",
    padding: "6rem 1rem",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  aboutSectionContent: {
    width: "100%",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxSizing: "border-box",
  },
  accordionItem: {
    width: "100%",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    overflow: "hidden",
    transition: "box-shadow 0.3s ease",
    ":hover": {
      boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "16px 20px",
    fontSize: "1.1rem",
    fontWeight: 600,
    background: "white",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    transition: "background 0.2s ease",
    ":hover": {
      background: "#f9fafb",
    },
  },
  chevron: {
    transition: "transform 0.3s ease",
    fontSize: "1.2rem",
  },
  contentWrapper: {
    overflow: "hidden",
    transition: "max-height 0.35s ease, opacity 0.25s ease",
  },
  content: {
    padding: "16px 20px",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#374151",
    background: "#fafafa",
  },
  // Media Queries für Responsiveness
  "@media (max-width: 600px)": {
    aboutSection: {
      padding: "3rem 1rem",
    },
    header: {
      fontSize: "1rem",
      padding: "14px 16px",
    },
    content: {
      fontSize: "0.9rem",
      padding: "14px 16px",
    },
  },
});

function AccordionItem({ title, children, isOpen, onClick }) {
  const classes = useClasses();
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, children]);

  return (
    <div className={classes.accordionItem}>
      <button className={classes.header} onClick={onClick}>
        <span>{title}</span>
        <i
          className="bi bi-chevron-down"
          style={{
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        ></i>
      </button>
      <div
        className={classes.contentWrapper}
        style={{
          maxHeight: height,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className={classes.content} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const styles = useClasses();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSectionContent}>
        <h1 className="headline serviceHeadline">Häufige Fragen</h1>
        <AccordionItem
          title="Was macht flowefy anders als andere Webdesign-Agenturen?"
          isOpen={openIndex === 0}
          onClick={() => toggle(0)}
        >
          Wir glauben, dass eine Website mehr ist als ein digitales Schaufenster. Sie ist Ausdruck Ihrer Marke, Ihrer Werte und Ihrer Vision. Während viele Agenturen standardisierte Lösungen liefern, entwickeln wir bei flowefy maßgeschneiderte, performante und benutzerfreundliche Websites, die Ihre Identität sichtbar machen.
        </AccordionItem>

        <AccordionItem
          title="Ist eine Website überhaupt noch wichtig, wenn heute Social Media dominiert?"
          isOpen={openIndex === 1}
          onClick={() => toggle(1)}
        >
          Ja – Social Media verkauft, eine Website schafft Vertrauen. Plattformen wie Instagram oder LinkedIn sind für Reichweite und Kundenkontakte unverzichtbar. Doch die Website ist das Aushängeschild für Seriosität, Professionalität und Differenzierung. Genau deshalb setzen wir auf modernes Webdesign, das Ihre Marke glaubwürdig und einzigartig im Markt positioniert.
        </AccordionItem>

        <AccordionItem
          title="Welche Leistungen bietet flowefy im Bereich Webdesign?"
          isOpen={openIndex === 2}
          onClick={() => toggle(2)}
        >
          flowefy entwickelt Landingpages, One-Pager und Full Websites, die individuell auf Marke und Zielgruppe zugeschnitten sind. Für Startups bieten wir zusätzlich ganzheitliche Lösungen, die Website, Branding und Positionierung verbinden. Ergänzend entstehen bei uns digitale Tools wie ein E-Mail-Signatur-Generator und ein Bionic Reading Plugin, die den modernen Webauftritt abrunden.
        </AccordionItem>

        <AccordionItem
          title="Was bedeutet „modernes Webdesign“ für flowefy?"
          isOpen={openIndex === 3}
          onClick={() => toggle(3)}
        >
          Modernes Webdesign bedeutet für uns die perfekte Verbindung aus Performance, Markenidentität und Nutzererlebnis. Ihre Website wird technisch schnell, mobil optimiert und SEO-stark entwickelt, während Design und Storytelling Ihre Werte sichtbar machen und Besucher intuitiv durch die Inhalte führen. So entsteht ein digitales Erlebnis, das Vertrauen schafft und Ihre Marke einzigartig positioniert.
        </AccordionItem>

        <AccordionItem
          title="Wie läuft ein typisches Webdesign-Projekt bei flowefy ab?"
          isOpen={openIndex === 4}
          onClick={() => toggle(4)}
        >
          <ol>
            <li>Vision verstehen – Wir sprechen mit dem Gründer und tauchen in die Markenidentität ein *</li>
            <li>Konzept entwickeln – Struktur, Designidee und Markenbotschaft werden erarbeitet</li>
            <li>Umsetzung – Design, Development und Feinschliff</li>
            <li>Testing & Go-Live – Performance, SEO und UX final optimieren</li>
            <li>Hypercare-Phase – Fixen letzter Bugs und Probleme, falls noch vorhanden</li>
          </ol>
          <p><strong>* Optional:</strong> Einen Tag vor Ort beim Kunden für intensiveres Verständnis.</p>
        </AccordionItem>

        <AccordionItem
          title="Welche Philosophie verfolgt flowefy?"
          isOpen={openIndex === 5}
          onClick={() => toggle(5)}
        >
          Unsere Arbeit basiert auf den Werten Kreativität, Einzigartigkeit, Teamgeist und Weiterentwicklung. Wir wollen nicht nur Websites bauen, sondern digitale Marken-Erlebnisse, die Kunden spüren lassen, wofür ein Unternehmen steht. Unser Motto: Webdesign, das Ihre Vision lebendig macht.
        </AccordionItem>

        <AccordionItem
          title="Für wen ist flowefy die richtige Wahl?"
          isOpen={openIndex === 6}
          onClick={() => toggle(6)}
        >
          flowefy ist die richtige Wahl für Startups, die schnell und professionell online sichtbar werden wollen, genauso wie für KMU, die ihre veraltete Website modernisieren und ihr Unternehmen digital neu positionieren möchten. Besonders Gründer und Macher profitieren von unserem Ansatz, da wir Websites nicht von der Stange liefern, sondern individuelle Lösungen entwickeln, die zur Marke passen und echte Differenzierung schaffen. Unser Ziel ist es, jedem Kunden einen Webauftritt zu geben, der Vertrauen aufbaut, Professionalität ausstrahlt und die Vision des Unternehmens klar vermittelt.
        </AccordionItem>
      </div>
    </div>
  );
}
