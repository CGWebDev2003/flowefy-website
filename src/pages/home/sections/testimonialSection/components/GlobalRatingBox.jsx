import customerReviewBadge from "../../../../../assets/home/customer_review_badge.webp";
import { useEffect, useState } from "react";
import { supabase } from "../../../../../supabaseClient";
import "./globalRatingBox.css"; 

export default function GlobalRatingBox() {
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [recommendationPercentage, setRecommendationPercentage] = useState(0);

    useEffect(() => {
        const fetchStats = async () => {
            const { data, error } = await supabase
                .from("testimonials")
                .select("rating, recommendation")
                .eq("published", true);

            if (error) {
                console.error("Fehler beim Laden der Bewertungen:", error);
                return;
            }

            if (data.length === 0) return;

            const ratings = data.map((entry) => entry.rating).filter(Boolean);
            const recommendations = data.map((entry) => entry.recommendation).filter((val) => val === true);

            const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
            const recPercent = (recommendations.length / data.length) * 100;

            setAverageRating(Math.round(avg * 10) / 10);
            setTotalReviews(data.length);
            setRecommendationPercentage(Math.round(recPercent));
        };

        fetchStats();
    }, []);

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.25 && rating % 1 <= 0.75;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <i className="bi bi-star-fill" key={`full-${i}`}></i>
                ))}
                {halfStar && <i className="bi bi-star-half"></i>}
                {[...Array(emptyStars)].map((_, i) => (
                    <i className="bi bi-star" key={`empty-${i}`}></i>
                ))}
            </>
        );
    };

    return (
        <div className="globalRatingContent">
            <div className="globalStars">
                <div className="ratingStars">{renderStars(averageRating)}</div>
                <div className="averageRating">{averageRating} von 5 Sternen</div>
            </div>
            <img src={customerReviewBadge} className="crBadge" alt="Customer Review Badge" />
            <div className="recommendPercent">{recommendationPercentage}%<br/>Empfehlen uns weiter</div>
            <div className="ratingCount">⌀ aus {totalReviews} Bewertungen</div>
        </div>
    );
}
