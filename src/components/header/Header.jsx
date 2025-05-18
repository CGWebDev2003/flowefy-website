import "./header.css"

function Header() {


    return(
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
                        <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Header;