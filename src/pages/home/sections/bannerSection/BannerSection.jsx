import "./bannerSection.css";

function BannerSection() {
    return(
        <div className="runningBannerSection">
            <div className="runningBannerWrapper">
                <div className="runningBanner runningBanner-top">
                    <div className="banner-track">
                        <div className="banner-text">
                            Websites • One Pager • Flyer • Visitenkarten • &nbsp;
                        </div>
                        <div className="banner-text">
                            Websites • One Pager • Flyer • Visitenkarten • &nbsp;
                        </div>
                    </div>
                </div>

                <div className="runningBanner runningBanner-bottom">
                    <div className="banner-track reverse">
                        <div className="banner-text">
                            Websites • One Pager • Flyer • Visitenkarten • &nbsp;
                        </div>
                        <div className="banner-text">
                            Websites • One Pager • Flyer • Visitenkarten • &nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerSection;