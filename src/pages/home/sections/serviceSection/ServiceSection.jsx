import "./serviceSection.css";
import 'atropos/css';
import Atropos from 'atropos/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ServiceSection() {
    function openInquiry() {
        window.location.href = "/anfragen";
    }

    return(
        <div className="serviceSection" id="service">
            <h1 className="headline serviceHeadline">Unsere Services</h1>
            <div className="serviceContent">
                <Atropos shadow={false} activeOffset={30} stretchZ={100} className="service-atropos">
                    <div class="serviceCard">
                        <div class="content">
                            <div class="title atropos-layer" data-atropos-offset="1">🚀 Landingpage</div>
                            <div class="description atropos-layer" data-atropos-offset="1">
                                Für Kampagnen, Produkte oder Events. Klar fokussiert, schnell & individuell. <br/>

                                <div className="features">
                                    <strong className="contents">Enthalten:</strong><br/>
                                    <i className="bi bi-check-circle"></i> Individuelles Design <br/>
                                    <i className="bi bi-check-circle"></i> Conversion-Optimierung <br/>
                                    <i className="bi bi-check-circle"></i> Responsive (Mobil & Desktop) <br/>
                                    <i className="bi bi-check-circle"></i> SEO-Basics <br/>
                                    <i className="bi bi-check-circle"></i> Coding in React & CSS <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Atropos>
                <Atropos shadow={false} activeOffset={30} stretchZ={100} className="service-atropos">
                    <div class="serviceCard">
                        <div class="content">
                            <div class="title atropos-layer" data-atropos-offset="1">📄 Onepager</div>
                            <div class="description atropos-layer" data-atropos-offset="1">
                                Ideal für Startups, Freelancer & kleine Unternehmen. Alle Inhalte auf einer Seite – klar & effektiv. <br/>

                                <div className="features">
                                    <strong className="contents">Enthalten:</strong> <br/>
                                    <i className="bi bi-check-circle"></i> Strukturierte Abschnitte (z. B. Über uns, Kontakt) <br/>
                                    <i className="bi bi-check-circle"></i> Maßgeschneidertes Design <br/>
                                    <i className="bi bi-check-circle"></i> Mobile-Optimierung <br/>
                                    <i className="bi bi-check-circle"></i> Coding in React & CSS <br/>
                                    <i className="bi bi-check-circle"></i> SEO & Performance <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Atropos>
                <Atropos shadow={false} activeOffset={30} stretchZ={100} className="service-atropos">
                    <div class="serviceCard">
                        <div class="content">
                            <div class="title atropos-layer" data-atropos-offset="1">🌐 Full Website</div>
                            <div class="description atropos-layer" data-atropos-offset="1">
                                Für Unternehmen mit mehreren Seiten & komplexeren Anforderungen. <br/>

                                <div className="features">
                                    <strong className="contents">Enthalten:</strong> <br/>
                                    <i className="bi bi-check-circle"></i> Mehrseitige Website <br/>
                                    <i className="bi bi-check-circle"></i> Individuelles, modulares Design <br/>
                                    <i className="bi bi-check-circle"></i> Coding in React & CSS <br/>
                                    <i className="bi bi-check-circle"></i> Responsive & Schnell <br/>
                                    <i className="bi bi-check-circle"></i> SEO-Basics <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Atropos>
                <Atropos shadow={false} activeOffset={30} stretchZ={100} className="service-atropos">
                    <div class="serviceCard">
                        <div class="content">
                            <div class="title atropos-layer" data-atropos-offset="1">🌱 Startup Bundle</div>
                            <div class="description atropos-layer" data-atropos-offset="1">Das Komplettpaket für Gründer:innen.
                            Kompakt, professionell & sofort startklar. <br/>

                            <div className="features">
                                <strong className="contents">Enthalten:</strong> <br/>
                                <i className="bi bi-check-circle"></i> Onepager <br/>
                                <i className="bi bi-check-circle"></i> Digitale Visitenkarten <br/>
                                <i className="bi bi-check-circle"></i> E-Mail-Signatur <br/>
                                <i className="bi bi-check-circle"></i> React & CSS <br/>
                                <i className="bi bi-check-circle"></i> Beratung zu Hosting & Domain <br/>
                            </div>
                        </div>
                        </div>
                    </div>
                </Atropos>
            </div>
            <div className="serviceContentMobile">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide className="swiperSlide">
                        <div class="serviceCard">
                            <div class="content">
                                <div class="title">Landingpage</div>
                                <div class="description">
                                    Für Kampagnen, Produkte oder Events. Klar fokussiert, schnell & individuell. <br/>

                                    <div className="features">
                                        <strong className="contents">Enthalten:</strong><br/>
                                        <i className="bi bi-check-circle"></i> Individuelles Design <br/>
                                        <i className="bi bi-check-circle"></i> Conversion-Optimierung <br/>
                                        <i className="bi bi-check-circle"></i> Responsiv (mobil & desktop) <br/>
                                        <i className="bi bi-check-circle"></i> React & CSS <br/>
                                        <i className="bi bi-check-circle"></i> SEO-Basics <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div class="serviceCard">
                            <div class="content">
                                <div class="title">Onepager</div>
                                <div class="description">
                                    Ideal für Startups, Freelancer & kleine Unternehmen. Alle Inhalte auf einer Seite – klar & effektiv. <br/>

                                    <div className="features">
                                        <strong className="contents">Enthalten:</strong> <br/>
                                        <i className="bi bi-check-circle"></i> Strukturierte Abschnitte (z. B. Über uns, Kontakt) <br/>
                                        <i className="bi bi-check-circle"></i> Maßgeschneidertes Design <br/>
                                        <i className="bi bi-check-circle"></i> Mobile-Optimierung <br/>
                                        <i className="bi bi-check-circle"></i> React & CSS <br/>
                                        <i className="bi bi-check-circle"></i> SEO & Performance <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div class="serviceCard">
                            <div class="content">
                                <div class="title">Full Website</div>
                                <div class="description">
                                    Für Unternehmen mit mehreren Seiten & komplexeren Anforderungen. <br/>

                                    <div className="features">
                                        <strong className="contents">Enthalten:</strong> <br/>
                                        <i className="bi bi-check-circle"></i> Mehrseitige Website <br/>
                                        <i className="bi bi-check-circle"></i> Individuelles, modulares Design <br/>
                                        <i className="bi bi-check-circle"></i> React & CSS <br/>
                                        <i className="bi bi-check-circle"></i> Responsiv & schnell <br/>
                                        <i className="bi bi-check-circle"></i> SEO-Basics <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div class="serviceCard">
                            <div class="content">
                                <div class="title">Startup Bundle</div>
                                <div class="description">
                                    Kompakt, professionell & sofort startklar. <br/>

                                    <div className="features">
                                        <strong className="contents">Enthalten:</strong> <br/>
                                        <i className="bi bi-check-circle serviceCheck"></i> Onepager <br/>
                                        <i className="bi bi-check-circle serviceCheck"></i> Digitale Visitenkarten <br/>
                                        <i className="bi bi-check-circle serviceCheck"></i> E-Mail-Signatur <br/>
                                        <i className="bi bi-check-circle serviceCheck"></i> React & CSS <br/>
                                        <i className="bi bi-check-circle serviceCheck"></i> Beratung zu Hosting & Domain <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <span className="swipeText">
                <i className="bi bi-chevron-double-left"></i>
                Swipen
                <i className="bi bi-chevron-double-right"></i>
            </span>
            <div className="serviceButtonBox">
                <a href="/anfragen" className="anfrageButton serviceAnfrageButton" data-atropos-offset="2"  aria-label="Webseite Anfragen">
                            Anfragen
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
            </div>
        </div>
    );
}

export default ServiceSection;