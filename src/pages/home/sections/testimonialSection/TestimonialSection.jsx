import TestimonialChat from "./components/TestimonialChat";
import "./testimonialSection.css";

function TestimonialSection() {
    return (
        <div className="testimonialSection" id="testimonials">
            <h1 className="headline testimonialHeadline">Das sagen Kunden</h1>
            <div className="testimonialBox">
                <TestimonialChat />
            </div>
        </div>
    );
}

export default TestimonialSection;
