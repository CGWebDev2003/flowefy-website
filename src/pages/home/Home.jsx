import { useEffect } from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Home() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.ratedo.de/js/widgets/ratedo-widget1.min.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Script bereinigen, falls nötig
            document.body.removeChild(script);
        };
    }, []);


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
                    <div className="aboutContent">
                        <div className="imageBox">
                            <div className="aboutImage1"></div>
                            <div className="aboutImage2"></div>
                            <div className="aboutImage3"></div>
                        </div>
                        <div className="textBox">
                            <h1 className="headline secondAboutHeadline">We are <span className="primaryHighlight nunitoText">flowefy.</span></h1>
                            <p className="aboutText">
                                Wir sind eine kreative Webdesign-Agentur mit Sitz nahe Leipzig. Unser Ziel ist es, individuelle und ansprechende Websites zu erstellen, die den Bedürfnissen unserer Kunden entsprechen. Egal, ob du ein kleines Unternehmen oder ein großes Unternehmen bist, wir haben die Lösungen, die du brauchst.
                            </p>
                            <a href="/anfragen" className="anfrageButton">
                                Jetzt Anfragen
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="serviceSection">
                    <h1 className="headline">Unsere Services</h1>
                </div>
                <div className="testimonialSection">
                    <h1 className="headline testimonialHeadline">Das sagen Kunden</h1>
                    <div className="testimonialBox">
                        <a href="https://www.ratedo.de/profil/colin-grahm-media" target="_blank" className="testimonial">
                            <div className="testimonialTextBox">
                                <p className="testimonialText">
                                    "Unsere Erwartungen wurden weit übertroffen. Top Design, top Fachkenntnisse und super Service. Unsere Webseite wurde perfekt überarbeitet. Wir können Flowefy nur empfehlen!"
                                </p>
                            </div>
                            <div className="testimonialAuthorBox">
                                <span className="authorPosition">KNS Beschichtung</span>
                            </div>
                        </a>
                        <a href="https://www.ratedo.de/profil/colin-grahm-media" target="_blank" className="testimonial">
                            <div className="testimonialTextBox">
                                <p className="testimonialText">
                                    "Sehr gute Komplettbetreuung vom Anfang bis zum Finale des Projektes. Dazu gehören gesamtes Layout, auf Wunsch Erstellung von Fotos, Beratung zu Bildern, Textgestaltung, gut durchdachter und logischer Aufbau der Homepage. Hoher Ideenreichtum, ausgezeichnete Kreativität, zügige Umsetzung. Top."
                                </p>
                            </div>
                            <div className="testimonialAuthorBox">
                                <span className="authorPosition">Dr. Scholz</span>
                            </div>
                        </a>
                        <a href="https://www.ratedo.de/profil/colin-grahm-media" target="_blank" className="testimonial">
                            <div className="testimonialTextBox">
                                <p className="testimonialText">
                                    "Hier habe ich die perfekte Lösung für mein Grafikdesign und mein Branding gefunden. [...]"
                                </p>
                            </div>
                            <div className="testimonialAuthorBox">
                                <span className="authorPosition">Funkendesign</span>
                            </div>
                        </a>
                        <div className="testimonial">
                            <div className="ratedo-w1" data-ratedo_id="25293f2761d658cc70c19515861842d712751bdc"></div>
                        </div>
                    </div>
                </div>
                <div className="contactUsSection">
                    <div className="contactUsBox">
                        <h1 className="bigTitle contactTitle">Ready to Grow?</h1>
                        <p className="contactText">
                            Ganz einfach eine Nachricht schreiben und wir melden uns bei dir!
                        </p>
                        <div className="contactButtonBox">
                            flowefy@skymail.de
                            <a href="/anfragen" className="contactButton anfrageButton">
                                Jetzt Anfragen
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;