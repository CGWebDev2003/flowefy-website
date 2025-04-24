import "./header.css"

function Header() {


    return(
        <div className="headerContainer">
            <header className="header">
            <div className="logoBox">
                <h1 className="logo">flowefy.</h1>
            </div>
            <div className="buttonBox">
                <a href="mailto:flowefy@skymail.de" className="headerButton">
                    <i class="bi bi-envelope"></i>
                </a>
                <a href="https://www.instagram.com/flowefy.web/" className="headerButton instagramButton">
                    <i class="bi bi-instagram"></i>
                </a>
            </div>
        </header>
        </div>
    );
}

export default Header;