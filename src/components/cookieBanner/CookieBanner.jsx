import "./cookieBanner.css"

function CookieBanner() {
    function closeCookieBanner() {
        const cookieBanner = document.getElementById('cookieBanner');
        cookieBanner.style.display = 'none';
    }

    return(
        <div class="card animate__animated animate__jello" id="cookieBanner">
            <i className="bi bi-cookie cookieSvg"></i>
            <p class="cookieHeading">Wir nutzen keine Cookies</p>
            <p class="cookieDescription">Wir wollten dir nur Mitteilen, dass wir keine Cookies auf dieser Website nutzen</p>
            <div class="buttonContainer">
                <button class="acceptButton" onClick={closeCookieBanner}>Wundervoll</button>
            <button class="declineButton" onClick={closeCookieBanner}>Mir egal!</button>
            </div>
        </div>
    );
}

export default CookieBanner;