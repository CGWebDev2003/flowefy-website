import "./bannerSection.css";

function BannerSection() {
    return(
        <div className="runningBannerSection" id="banner-section">
            <div className="runningBannerWrapper">
                <div className="runningBanner runningBanner-top">
                    <div className="banner-track">
                        <div className="banner-text">
                            Qualitatives Webdesign aus Leipzig • Creative. Individual. Unique. • &nbsp;
                        </div>
                        <div className="banner-text">
                            Qualitatives Webdesign aus Leipzig • Creative. Individual. Unique. • &nbsp;
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