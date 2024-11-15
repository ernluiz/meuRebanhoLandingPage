import { useState } from "react";
import Button from "./button/button";

const AUTH_TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEyMTQyMDY2NTk3NzIxNTEyNDE1IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJsZmVybkBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJZcjFQZURFbUFnbXJFU1VyNHdNNUhRIiwibmJmIjoxNzMxNjM3NDQ4LCJpYXQiOjE3MzE2Mzc3NDgsImV4cCI6MTczMTY0MTM0OCwianRpIjoiY2FlMWY3MTkyZWFkYzRjMGUyZjUwNWFkMTcxZTc3ZTIyYTQ4NDRlMSJ9.2PJ0k5eWKymNw75hkB0LFqRG3uf2JxiwjHnAkhUsbDqHypzwZseTC9bITzLNZWk_LaOfnlfikjmxYYMURte10mwzj5-5vvVCJ5T3FuUTziPn39rhaUAhDtLDSbRuH3-Bw7i-J1KXPvUzQXeEQCHOwifRh8roICSxceq1iJseINpt9PogKI-z7Wxcg6QUGEL_76A_STY58CPg-7BgQwq7XWboeFhYsuT8wM1M2shIn7x-oqJhWkfrC470utnQNhoMajwPy8W8XzzhLEIb0z9ssr0NYHiDRBiSgmf9oHlXeXZR1HUt-FBOUQbq7xqaFVtbrjmawER6WBqxxzTYb-Asww";

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !message) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        setStatus("sending");

        fetch('/api', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${AUTH_TOKEN}`
            },
            body: JSON.stringify({
                email: email,
                conteudo: message
            }),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Erro ao enviar a mensagem");

                return response.json();
            })
            .then((data) => {
                console.log("Resposta da função:", data);
                setStatus("success");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.error("Erro:", error);
                setStatus("error");
            });
    };


    return (
        <section id="contact">
            <div className="container content">
                <h3>Alguma dúvida?</h3>
                <h2>Entre em contato</h2>
                <h4>Preencha seu e-mail e deixe sua mensagem para que possamos ajudar com suas dúvidas, ouvir sugestões ou resolver qualquer questão. Retornaremos sua mensagem o mais breve possível!</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Sua pergunta, sugestão ou crítica"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <Button
                        text={status === "sending" ? "Enviando..." : "Enviar"}
                        func={handleSubmit}
                        disabled={status === "sending"}
                    />
                </form>
                {status === "success" && <p>Mensagem enviada com sucesso!</p>}
                {status === "error" && <p>Erro ao enviar mensagem. Tente novamente mais tarde.</p>}
            </div>
        </section>
    );
};

export default ContactForm;
