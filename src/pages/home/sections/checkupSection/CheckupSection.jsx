import "./checkupSection.css";

function CheckupSection() {
    return (
        <div className='checkupSection' id='checkup'>
            <div className='checkupInner'>
                <div className='checkupBox'>
                    <h1 className='checkupTitle headline'>
                        Dein Gratis Website Check
                    </h1>
                    <p className='checkupText'>
                        Lasse deine Website im kostenlosen flowefy-Website-Check
                        testen und erfahre wo noch Luft nach oben ist. Dafür
                        brauchst nicht mehr, als deine URL und eine Email.
                    </p>
                    <div className='checkupService'>
                        <p className='checkupItem'>
                            <i className='bi bi-check-circle'></i>
                            Design
                        </p>
                        <p className='checkupItem'>
                            <i className='bi bi-check-circle'></i>
                            Performance
                        </p>
                        <p className='checkupItem'>
                            <i className='bi bi-check-circle'></i>
                            Barrierefreiheit
                        </p>
                        <p className='checkupItem'>
                            <i className='bi bi-check-circle'></i>
                            Techn. Umsetzung
                        </p>
                        <p className='checkupItem'>
                            <i className='bi bi-check-circle'></i>
                            SEO
                        </p>
                    </div>
                    <a className='checkupButton' href='/checkup aria-label="Webseite Anfragen"'>
                        Test Starten <i className='bi bi-arrow-up-right'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CheckupSection;
