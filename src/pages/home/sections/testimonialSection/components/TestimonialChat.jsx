import flowefyPB from "../../../../../assets/home/flowefy_pb.webp";
import { useEffect, useState } from "react";
import { supabase } from "../../../../../supabaseClient";
import "./testimonialChat.css";

export default function TestimonialChat() {
    const [chatEntries, setChatEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonialsWithAnswers = async () => {
            setLoading(true);
            const { data: testimonials, error: testimonialsError } =
                await supabase
                    .from("testimonials")
                    .select("*")
                    .eq("published", true)
                    .order("created_at", { ascending: false });

            if (testimonialsError) {
                console.error("Fehler beim Laden der Testimonials:", testimonialsError);
                setLoading(false);
                return;
            }

            const { data: answers, error: answersError } = await supabase
                .from("testimonialAnswers")
                .select("*");

            if (answersError) {
                console.error("Fehler beim Laden der Antworten:", answersError);
                setLoading(false);
                return;
            }

            const entries = testimonials.map((testimonial) => {
                const answer = answers.find(
                    (a) => a.testimonial_id === testimonial.id
                );
                return { testimonial, answer };
            });

            setChatEntries(entries);
            setLoading(false);
        };

        fetchTestimonialsWithAnswers();
    }, []);

    return (
        <div className='chatBoxElement'>
            <div className='chatBoxHeader'>
                <img
                    src={flowefyPB}
                    className='flowefyPB'
                    alt='flowefy Profilbild'
                />
                <span className='chatTitle'>Kundenstimmen-Chat 💬</span>
            </div>
            <div className='chat-container'>
                <div className='chatMessageBox'>
                    {loading ? (
                        <p>Lade Rezensionen...</p>
                    ) : chatEntries.length === 0 ? (
                        <p>Noch keine Rezensionen vorhanden.</p>
                    ) : (
                        chatEntries.map(({ testimonial, answer }) => (
                            <div key={testimonial.id} className='chat-entry'>
                                {answer && (
                                    <div className='answer-box'>
                                        <p className='message-header answer-header'>
                                            flowefy.
                                        </p>
                                        <p className='answer-text'>{answer.answer}</p>
                                        <p className='answer-timestamp'>
                                            {new Date(answer.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                )}
                                <div className='testimonial-box'>
                                    <p className='message-header'>
                                        <span className='hover-name-wrapper'>
                                            {testimonial.name}
                                            {(testimonial.company ||
                                                testimonial.role ||
                                                testimonial.rating !== null ||
                                                typeof testimonial.recommendation === "boolean") && (
                                                <div className='info-panel'>
                                                    {testimonial.company?.trim() && (
                                                        <p>
                                                            <strong>Unternehmen:</strong>{" "}
                                                            {testimonial.company}
                                                        </p>
                                                    )}
                                                    {testimonial.role?.trim() && (
                                                        <p>
                                                            <strong>Rolle:</strong>{" "}
                                                            {testimonial.role}
                                                        </p>
                                                    )}
                                                    {testimonial.rating !== null && (
                                                        <p className='rating-stars'>
                                                            <strong>Bewertung:</strong>{" "}
                                                            {Array.from({ length: 5 }, (_, i) =>
                                                                i < testimonial.rating ? (
                                                                    <i key={i} className='bi bi-star-fill' />
                                                                ) : (
                                                                    <i key={i} className='bi bi-star' />
                                                                )
                                                            )}
                                                        </p>
                                                    )}
                                                    {typeof testimonial.recommendation === "boolean" && (
                                                        <p>
                                                            <strong>Empfehlung:</strong>{" "}
                                                            {testimonial.recommendation ? "Ja 👍" : "Nein 👎"}
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </span>
                                        {testimonial.project_url?.trim() && (
                                            <a
                                                className='testimonialURL'
                                                href={testimonial.project_url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <i className='bi bi-box-arrow-up-right'></i>
                                            </a>
                                        )}
                                    </p>
                                    <p className='testimonial-text'>{testimonial.testimonial}</p>
                                    <p className='timestamp'>
                                        {new Date(testimonial.created_at).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className='flowefyProductBanner'>
                <p className='flowefyProductBannerText'>v1.0.1 | Ein Produkt von flowefy.</p>
            </div>
        </div>
    );
}
