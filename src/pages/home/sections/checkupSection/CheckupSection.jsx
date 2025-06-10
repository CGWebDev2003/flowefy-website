import "./checkupSection.css";
import 'atropos/css';
import Atropos from 'atropos/react';

function CheckupSection() {
    return(
        <>
            <div className="checkupSection">
                <div className="content checkupContent">
                    <Atropos shadow={false} activeOffset={30} stretchZ={100} className="checkup-atropos">
                        <div className="checkupBox atropos-layer" data-atropos-offset="-1">
                            <h1 className="checkupTitle headline atropos-layer" data-atropos-offset="1" >Dein Gratis Website Check</h1>
                            <p className="checkupText atropos-layer" data-atropos-offset="1">Lasse deine Website im kostenlosen flowefy-Website-Check testen und erfahre wo noch Luft nach oben ist. Dafür brauchst nicht mehr, als deine URL und eine Email. </p>
                            <div className="checkupService">
                                <p className="checkupItem atropos-layer" data-atropos-offset="2">
                                    <i className="bi bi-check-circle"></i> 
                                    Design
                                </p>
                                <p className="checkupItem atropos-layer" data-atropos-offset="3">
                                    <i className="bi bi-check-circle"></i> 
                                    Performance
                                </p>
                                <p className="checkupItem atropos-layer" data-atropos-offset="3">
                                    <i className="bi bi-check-circle"></i> 
                                    Barrierefreiheit
                                </p>
                                <p className="checkupItem atropos-layer" data-atropos-offset="3">
                                    <i className="bi bi-check-circle"></i> 
                                    Techn. Umsetzung
                                </p>
                                <p className="checkupItem atropos-layer" data-atropos-offset="3">
                                    <i className="bi bi-check-circle"></i> 
                                    SEO 
                                </p>
                            </div>
                            <a className="checkupButton  atropos-layer" data-atropos-offset="4" href="/checkup">Testen Lassen <i className="bi bi-arrow-up-right"></i></a>
                        </div>
                    </Atropos>
                </div>
            </div>
        </>
    );
}

export default CheckupSection;