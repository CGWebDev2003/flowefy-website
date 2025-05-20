import "./serviceSection.css";

function ServiceSection() {
    return(
        <div className="serviceSection">
            <h1 className="headline serviceHeadline">Unsere Services</h1>
            <div className="serviceContent">
                <div class="serviceCard">
                    <div class="content">
                        <div class="title">Landingpage</div>
                        <div class="price"><span className="ab">ab</span> 999€</div>
                        <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                    </div>
                    <a href="/anfragen" className="anfrageButton">
                        Anfragen
                        <i className="bi bi-arrow-up-right"></i>
                    </a>
                </div>
                <div class="serviceCard">
                    <div class="content">
                        <div class="title">One Pager</div>
                        <div class="price"><span className="ab">ab</span> 1999€</div>
                        <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                    </div>
                    <a href="/anfragen" className="anfrageButton">
                        Anfragen
                        <i className="bi bi-arrow-up-right"></i>
                    </a>
                </div>
                <div class="serviceCard">
                    <div class="content">
                        <div class="title">Full Website</div>
                        <div class="price"><span className="ab">ab</span> 4999€</div>
                        <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                    </div>
                    <a href="/anfragen" className="anfrageButton">
                        Anfragen
                        <i className="bi bi-arrow-up-right"></i>
                    </a>
                </div>
            </div>
            <div className="moreServiceBox">
                <a href="/service" className="moreServiceButton">
                    Alle Services 
                    <i className="bi bi-arrow-up-right"></i>
                </a>
            </div>
        </div>
    );
}

export default ServiceSection;