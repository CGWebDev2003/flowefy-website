import React, { useState } from "react";
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
                    <a href="/" className="headerLink">Home</a>
                    <a href="/service" className="headerLink">Service</a>
                    <a href="/portfolio" className="headerLink">Portfolio</a>
                    <a href="/kontakt" className="headerLink">Kontakt</a>
                </div>
                <div className="buttonBox">
                    <a href="/anfragen" className="anfrageButton">
                        Jetzt Anfragen
                        <i className="bi bi-arrow-right"></i>
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
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "sidebarOpen" : ""}`}>
                <a href="/">Home</a>
                <a href="/service">Service</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/kontakt">Kontakt</a>
            </div>
        </div>
    );
}

export default Header;
