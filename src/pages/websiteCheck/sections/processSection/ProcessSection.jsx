import "./processSection.css";

function ProcessSection() {
    return(
        <div className="processSection">
            <div className="processContent">
                <div className="processHeader">
                    <h2 className="processHeadline">Wie funktionierts?</h2>
                    <a href="/checkupTest" className="checkInquiryButton" >Test Starten <i className="bi bi-play-circle"></i></a>
                </div>
                <div className='processList'>
                    <div className='processCard'>
                        <h3 className='cardTitle'>
                            Schritt 1
                        </h3>
                        <p className='cardDescription'>
                            Formular ausfüllen & Domain angeben
                        </p>
                    </div>
                    <div className='processCard'>
                        <h3 className='cardTitle'>
                            Schritt 2
                        </h3>
                        <p className='cardDescription'>
                            Wir analysieren deine Seite (innerhalb von 48h)
                        </p>
                    </div>
                    <div className='processCard'>
                        <h3 className='cardTitle'>
                            Schritt 3
                        </h3>
                        <p className='cardDescription'>
                            Du bekommst eine individuelle Auswertung als PDF zugeschickt
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProcessSection;