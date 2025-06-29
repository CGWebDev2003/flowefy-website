import TestimonialChat from "./components/TestimonialChat";
import GlobalRatingBox from "./components/GlobalRatingBox";
import "./testimonialSection.css";

function TestimonialSection() {
    return (
        <div className="testimonialSection" id="testimonials">
            <h1 className="headline testimonialHeadline">Das sagen Kunden</h1>
            <div className="testimonialBox">
                <div className="customerReviewChat">
                    <TestimonialChat />
                </div>
                <div className="globalRatingBox">
                    <GlobalRatingBox />
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;
