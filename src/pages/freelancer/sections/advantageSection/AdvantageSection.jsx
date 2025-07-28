import { useEffect, useState } from 'react';
import "./advantageSection.css";

const CustomerExpectations = () => {
  const qualities = [
    "Schnelle & saubere Umsetzung",
    "Kommunikation auf Augenhöhe",
    "Effiziente, skalierbare Lösungen",
    "Fokus auf Markenverständnis",
    "Performance-Orientiert"
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
