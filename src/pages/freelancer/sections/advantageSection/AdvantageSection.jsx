import { useEffect, useState } from 'react';
import "./advantageSection.css";

const CustomerExpectations = () => {
  const qualities = [
    "schnelle & saubere Umsetzung",
    "Kommunikation auf Augenhöhe",
    "effiziente, skalierbare Lösungen",
    "Fokus auf Markenverständnis & Nutzererlebnis"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % qualities.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="advantageSection">
      <h2 className="advantageText">
        Was Kunden von der Zusammenarbeit mit mir erwarten können:{" "}
        <span className="advantageQualities">
            {qualities[index]}.
        </span>
      </h2>
    </div>
  );
};

export default CustomerExpectations;
