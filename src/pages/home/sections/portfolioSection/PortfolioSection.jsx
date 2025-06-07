import "./portfolioSection.css";
import 'atropos/css'
import Atropos from 'atropos/react';

function PortfolioSection() {
    return(
        <>
            <div className="portfolioSection">
                <div className="portfolioContent">
                    <h1 className="headline portfolioHeadline">Latest Projects</h1>
                    <div className="portfolioList">
                        <Atropos shadow={false} activeOffset={20} stretchZ={200} className="portfolio-atropos">
                            <div className="portfolioItem">
                                <div className="">
                                    <p className="atropos-layer" data-atropos-offset="2">Unternehmen</p>
                                    <a href="#" className="atropos-layer" data-atropos-offset="2">Öffnen <i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </Atropos>
                        <Atropos shadow={false} activeOffset={20} stretchZ={200} className="portfolio-atropos">
                            <div className="portfolioItem">
                                <div className="">
                                    <p>Unternehmen</p>
                                    <a href="#">Öffnen <i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </Atropos>
                        <Atropos shadow={false} activeOffset={20} stretchZ={200} className="portfolio-atropos">
                            <div className="portfolioItem">
                                <div className="">
                                    <p>Unternehmen</p>
                                    <a href="#">Öffnen <i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </Atropos>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioSection;