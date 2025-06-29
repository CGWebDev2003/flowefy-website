import { useEffect, useState } from 'react';
import { supabase } from '../../../../../supabaseClient';
import "./testimonialChat.css";

export default function TestimonialChat() {
  const [chatEntries, setChatEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonialsWithAnswers = async () => {
      setLoading(true);
      const { data: testimonials, error: testimonialsError } = await supabase
        .from('testimonials')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (testimonialsError) {
        console.error('Fehler beim Laden der Testimonials:', testimonialsError);
        setLoading(false);
        return;
      }

      const { data: answers, error: answersError } = await supabase
        .from('testimonialAnswers')
        .select('*');

      if (answersError) {
        console.error('Fehler beim Laden der Antworten:', answersError);
        setLoading(false);
        return;
      }

      const entries = testimonials.map((testimonial) => {
        const answer = answers.find((a) => a.testimonial_id === testimonial.id);
        return { testimonial, answer };
      });

      setChatEntries(entries);
      setLoading(false);
    };

    fetchTestimonialsWithAnswers();
  }, []);

  return (
    <div className="chat-container">
      {loading ? (
        <p>Lade Rezensionen...</p>
      ) : chatEntries.length === 0 ? (
        <p>Noch keine Rezensionen vorhanden.</p>
      ) : (
        chatEntries.map(({ testimonial, answer }) => (
          <div key={testimonial.id} className="chat-entry">
            <div className="testimonial-box">
              <p className="testimonial-header">
                {testimonial.name} {testimonial.role && `– ${testimonial.role}`}
                {testimonial.company && ` @ ${testimonial.company}`}
              </p>
              <p className="testimonial-text">{testimonial.testimonial}</p>
              <p className="timestamp">{new Date(testimonial.created_at).toLocaleString()}</p>
            </div>
            {answer && (
              <div className="answer-box">
                <p className="answer-header ">flowefy. antwortet:</p>
                <p className="answer-text">{answer.answer}</p>
                <p className="answer-timestamp">{new Date(answer.created_at).toLocaleString()}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
