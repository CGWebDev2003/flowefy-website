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
                        <a href="/home" className="headerLink" aria-label="Gehe zur Home-Seite">Home</a>
                        <a href="/freelancer" className="headerLink" aria-label="Gehe zu Freelance-Seite">Freelance</a>
                        <a href="/checkup" className="headerLink" aria-label="Gehe zur Webseiten-Checkup-Seite">Free Check Up</a>
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
                        aria-label="Menü öffnen"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
            <div className={`sidebar ${isOpen ? "sidebarOpen" : ""}`}>
                <nav className="sidebarNav">
                    <h1 className="sidebarHeadline">Menü</h1>
                    <a href="/home" className="headerLink" aria-label="Gehe zu Home-Seite">Home</a>
                    <a href="/freelancer" className="headerLink" aria-label="Gehe zu Freelance-Seite">Freelance</a>
                    <a href="/checkup" className="headerLink" aria-label="Gehe zur Webseiten-Checkup-Seite">Free Check Up</a>
                </nav>
                <div className="sidebarButtonBox">
                    <div className="sidebarSocialButtonBox">
                        <a target="_blank" href="https://www.instagram.com/flowefy/" className="sidebarSocialButton" aria-label="Gehe zum Instagram Profil"><i className="bi bi-instagram"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/company/flowefy/" className="sidebarSocialButton" aria-label="Gehe zum LinkedIn Profil"><i className="bi bi-linkedin"></i></a>
                        <a target="_blank" href="https://www.behance.net/colingrahm2" className="sidebarSocialButton" aria-label="Gehe zum Behance-Profil"><i className="bi bi-behance"></i></a>
                    </div>
                    <a href="/anfragen" className="anfrageButton sidebarInquiryButton" aria-label="Webseite anfragen">Jetzt anfragen <i className="bi bi-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Header;
