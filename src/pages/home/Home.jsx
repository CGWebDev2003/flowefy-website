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

                    </div>
                    <div className="runningBannerSection">
                        <div className="runningBannerWrapper">
                            <div className="runningBanner runningBanner-top">
                                <div className="banner-track">
                                <div className="banner-text">
                                    BRANDING • SEO • WEB DEVELOPMENT • DESIGN • &nbsp;
                                </div>
                                <div className="banner-text">
                                    BRANDING • SEO • WEB DEVELOPMENT • DESIGN • &nbsp;
                                </div>
                                </div>
                            </div>

                            <div className="runningBanner runningBanner-bottom">
                                <div className="banner-track reverse">
                                <div className="banner-text">
                                    BRANDING • SEO • WEB DEVELOPMENT • DESIGN • &nbsp;
                                </div>
                                <div className="banner-text">
                                    BRANDING • SEO • WEB DEVELOPMENT • DESIGN • &nbsp;
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutSection">
                    <h1>About Us</h1>
                    
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;