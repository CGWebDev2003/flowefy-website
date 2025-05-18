import "./home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Home() {
    return (
        <>
            <Header></Header>
            <main>
                <div className="mainContent">
                    <div className="heroSection">
                        <h1 className="heroHeadline">Webdesign<br/>Agency</h1>
                        <h3 className="heroSubTitle">creative. individual. easy.</h3>

                        <div className="downArrows">
                            <i className="bi bi-chevron-down downArrow"></i>
                            <i className="bi bi-chevron-down downArrow"></i>
                            <i className="bi bi-chevron-down downArrow"></i>
                        </div>
                    </div>
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
                </div>
                <div className="aboutSection">
                    <div className="aboutHeader">
                        <div className="headlineBox">
                            <h1 class="aboutHeadline">About Us</h1>
                        </div>
                        <div className="strokeBox">
                            <div className="stroke"></div>
                        </div>
                        <div className="headerTextBox">
                            <span className="location">
                                <i className="bi bi-geo-alt"></i>
                                Leipzig
                            </span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;