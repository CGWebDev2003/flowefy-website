import "./processSection.css";

function ProcessSection() {
    return(
        <div className="processSection">
            <div className="processContent">
                <div className="processHeader">
                    <h2 className="processHeadline">Wie funktionierts?</h2>
                </div>
                <div className='processList'>
                    <div className='processCard'>
                        <span className="processCardIcon">
                            <i className="bi bi-file-earmark"></i>
                        </span>
                        <h3 className='processCardTitle'>
                            Schritt 1
                        </h3>
                        <p className='processCardDescription'>
                            Formular ausfüllen & Domain angeben
                        </p>
                    </div>
                    <div className='processCard'>
                        <span className="processCardIcon">
                            <i className="bi bi-search"></i>
                        </span>
                        <h3 className='processCardTitle'>
                            Schritt 2
                        </h3>
                        <p className='processCardDescription'>
                            Wir analysieren deine Seite (innerhalb von 48h)
                        </p>
                    </div>
                    <div className='processCard'>
                        <span className="processCardIcon">
                            <i className="bi bi-envelope-at"></i>
                        </span>
                        <h3 className='processCardTitle'>
                            Schritt 3
                        </h3>
                        <p className='processCardDescription'>
                            Du bekommst eine individuelle Auswertung als PDF zugeschickt
                        </p>
                    </div>
                </div>
                <div className="processButtonBox">
                    <a href="https://tally.so/r/wk4EG1" target="_blank" className="checkInquiryButton" >Test Starten <i className="bi bi-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default ProcessSection;