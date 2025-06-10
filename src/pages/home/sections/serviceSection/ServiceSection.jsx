import "./serviceSection.css";
import 'atropos/css';
import Atropos from 'atropos/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function ServiceSection() {
    return(
        <div className="serviceSection" id="service">
            <h1 className="headline serviceHeadline">Unsere Services</h1>
            <div className="serviceContent">
                <Atropos shadow={false} activeOffset={30} stretchZ={100} className="service-atropos">
                    <div class="serviceCard">
                        <div class="content">
                            <div class="title atropos-layer" data-atropos-offset="1">Landingpage</div>
                            <div class="price atropos-layer" data-atropos-offset="2"><span className="ab">ab</span> 999€</div>
                            <div class="description atropos-layer" data-atropos-offset="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                        </div>
                        <a href="/anfragen" className="anfrageButton atropos-layer" data-atropos-offset="2">
                            Anfragen
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
                    </div>
                </Atropos>
                <Atropos shadow={false} activeOffset={30} stretchZ={100} className="service-atropos">
                    <div class="serviceCard">
                        <div class="content">
                            <div class="title atropos-layer" data-atropos-offset="1">One Pager</div>
                            <div class="price atropos-layer" data-atropos-offset="2"><span className="ab">ab</span> 1999€</div>
                            <div class="description atropos-layer" data-atropos-offset="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                        </div>
                        <a href="/anfragen" className="anfrageButton atropos-layer" data-atropos-offset="2">
                            Anfragen
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
                    </div>
                </Atropos>
                <Atropos shadow={false} activeOffset={30} stretchZ={100} className="service-atropos">
                    <div class="serviceCard">
                        <div class="content">
                            <div class="title atropos-layer" data-atropos-offset="1">Full Website</div>
                            <div class="price atropos-layer" data-atropos-offset="2"><span className="ab">ab</span> 4999€</div>
                            <div class="description atropos-layer" data-atropos-offset="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                        </div>
                        <a href="/anfragen" className="anfrageButton atropos-layer" data-atropos-offset="2">
                            Anfragen
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
                    </div>
                </Atropos>
                <Atropos shadow={false} activeOffset={30} stretchZ={100} className="service-atropos">
                    <div class="serviceCard">
                        <div class="content">
                            <div class="title atropos-layer" data-atropos-offset="1">Startup Bundle</div>
                            <div class="price atropos-layer" data-atropos-offset="2">2499€</div>
                            <div class="description atropos-layer" data-atropos-offset="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                        </div>
                        <a href="/anfragen" className="anfrageButton atropos-layer" data-atropos-offset="2">
                            Anfragen
                            <i className="bi bi-arrow-up-right"></i>
                        </a>
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
                                <div class="price"><span className="ab">ab</span> 999€</div>
                                <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                            </div>
                            <a href="/anfragen" className="anfrageButton">
                                Anfragen
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
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
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
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
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div class="serviceCard">
                            <div class="content">
                                <div class="title">Startup Bundle</div>
                                <div class="price">2499€</div>
                                <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>
                            </div>
                            <a href="/anfragen" className="anfrageButton">
                                Anfragen
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <span className="swipeText">
                <i className="bi bi-chevron-double-left"></i>
                Swipen
                <i className="bi bi-chevron-double-right"></i>
            </span>
            <div className="moreServiceBox">
                
            </div>
        </div>
    );
}

export default ServiceSection;