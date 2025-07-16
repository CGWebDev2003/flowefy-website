import { useState } from "react";
import { supabase } from "../../../supabaseClient"; // ggf. Pfad anpassen
import "./testen.css";

export default function Testen() {
    const [email, setEmail] = useState("");
    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState("");

    const handleMagicLink = async (e) => {
        e.preventDefault();
        setSending(true);
        setMessage("");

        const { error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
                emailRedirectTo: window.location.origin + "/checkup/testen", // oder andere Zielseite
            },
        });

        setSending(false);

        if (error) {
            console.error(error);
            setMessage("Fehler beim Senden des Links. Bitte versuch's nochmal.");
        } else {
            setMessage("Magic-Link wurde gesendet. Bitte überprüfe deine E-Mail.");
        }
    };

    return (
        <div className="testenPage">
            <h1>Einmaliger Login</h1>
            <form className="checkupForm" onSubmit={handleMagicLink}>
                <input
                    type="email"
                    placeholder="E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" disabled={sending}>
                    {sending ? "Wird gesendet..." : "Magic-Link senden"}
                </button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
}
