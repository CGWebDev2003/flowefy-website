import { useState } from "react";
import "./header.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="headerContainer">
            <header className="header">
                <div className="logoBox">
                    <a href="/" className="logoLink">
                        <h1 className="logo">flowefy.</h1>
                    </a>
                </div>
                <div className="linkBox">
                    <nav className="headerNav">
                        <a href="/#home" className="headerLink">Home</a>
                        <a href="/#about" className="headerLink">Über uns</a>
                        <a href="/checkup" className="headerLink">Check Up</a>
                        <a href="/#service" className="headerLink">Service</a>
                        <a href="/#testimonials" className="headerLink">Bewertungen</a>
                    </nav>
                </div>
                <div className="buttonBox">
                    <a href="/anfragen" className="anfrageButton">
                        Jetzt Anfragen
                        <i className="bi bi-arrow-up-right"></i>
                    </a>
                    <button
                        type="button"
                        className={`menuButton ${isOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
            <div className={`sidebar ${isOpen ? "sidebarOpen" : ""}`}>
                <nav className="sidebarNav">
                    <a href="/#home" className="headerLink">Home</a>
                    <a href="/#about" className="headerLink">Über uns</a>
                    <a href="/checkup" className="headerLink">Check Up</a>
                    <a href="/#service" className="headerLink">Service</a>
                    <a href="/#testimonials" className="headerLink">Bewertungen</a>
                </nav>
                <a href="/anfragen" className="anfrageButton">
                    Jetzt Anfragen
                    <i className="bi bi-arrow-up-right"></i>
                </a>
            </div>
        </div>
    );
}

export default Header;
