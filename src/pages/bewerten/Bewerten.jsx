import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import Login from "./components/Login";
import "./bewerten.css";

function Bewerten() {
    const [projectId, setProjectId] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        company: "",
        testimonial: "",
        rating: 5,
        recommendation: true
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (data?.user) {
                setUser(data.user);
            }
        };
        checkUser();
    }, []);

    const verifyProject = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .eq("id", projectId)
            .single();

        if (data) {
            setIsVerified(true);
            setError("");
        } else {
            setError("Projekt-ID ist ungültig. Bitte überprüfe deine Eingabe.");
        }
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.from("testimonials").insert([
            {
                ...formData,
                project_url: projectId
            }
        ]);

        if (!error) {
            setSubmitted(true);
        } else {
            setError("Fehler beim Senden des Formulars.");
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    return (
        <div className="bewertenSection">
            <h1>Projekt bewerten</h1>

            {!user ? (
                <Login />
            ) : !isVerified && !submitted ? (
                <div className="verifyProjectBox">
                    <p>Bitte gib deine Projekt-ID ein:</p>
                    <input
                        type="text"
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        placeholder="Projekt-ID"
                    />
                    <button onClick={verifyProject} disabled={loading}>
                        {loading ? "Prüfe..." : "Verifizieren"}
                    </button>
                    {error && <p className="errorText">{error}</p>}
                </div>
            ) : !submitted ? (
                <form className="testimonialForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Dein Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="role"
                        placeholder="Deine Rolle"
                        value={formData.role}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Unternehmen (optional)"
                        value={formData.company}
                        onChange={handleChange}
                    />
                    <textarea
                        name="testimonial"
                        placeholder="Dein Feedback"
                        value={formData.testimonial}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <label>
                        Bewertung:
                        <select
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                        >
                            {[1, 2, 3, 4, 5].map((val) => (
                                <option key={val} value={val}>
                                    {val} Sterne
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="recommendation"
                            checked={formData.recommendation}
                            onChange={handleChange}
                        />
                        Ich empfehle euch weiter
                    </label>
                    <button type="submit" disabled={loading}>
                        {loading ? "Senden..." : "Bewertung abschicken"}
                    </button>
                    {error && <p className="errorText">{error}</p>}
                </form>
            ) : (
                <div className="successMessage">
                    <h2>Vielen Dank für dein Feedback!</h2>
                    <p>Deine Bewertung wurde erfolgreich übermittelt.</p>
                </div>
            )}
        </div>
    );
}

export default Bewerten;
