// src/components/Login.js
import { useState } from "react";
import { supabase } from "../../../supabaseClient";

export default function Login() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: "https://flowefy.de/bewerten", 
            },
        });

        if (error) {
            setError(error.message);
        } else {
            setSent(true);
        }
    };

    return (
        <div className="loginBox">
            <h2>Login erforderlich</h2>
            {sent ? (
                <p>Check dein E-Mail-Postfach für den Login-Link.</p>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Deine E-Mail-Adresse"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Magic-Link senden</button>
                </form>
            )}
            {error && <p className="errorText">{error}</p>}
        </div>
    );
}
