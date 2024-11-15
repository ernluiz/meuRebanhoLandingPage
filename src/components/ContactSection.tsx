import { useState } from "react";
import Button from "./button/button";

const AUTH_TOKEN = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEyMTQyMDY2NTk3NzIxNTEyNDE1IiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJsZmVybkBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI4bkVobE4zcHg3LTB3TWpqdDlHZGtRIiwibmJmIjoxNzMxNjI4NzIxLCJpYXQiOjE3MzE2MjkwMjEsImV4cCI6MTczMTYzMjYyMSwianRpIjoiMjViMjQ5ZjE3MWIxNTA2YmI1Y2RiOTU0MDQ1ZWJmZjFlMTliYTIyMCJ9.Ba8DDDi8rSZ5XnR-3225MpTnrlxo5Q9JuiYWAsYl2NroMvAAEgPkckKv2hYUme-AhGEsT7Bn1PObr54wXrntDzi0VwAIbPyH-rk6Ez-QOafNccqAQb5Cwh-YrO7ud4SnIxJ5um_GowcGJbIvK2bmfy9DL5JSVqFfEYwXH0iIOr74CjSA7NWv6BVSNSChOiG8dVLzghysLIoGkcRLPv1J2AC42XGF04szixwn9vUEiYqGl953rmNyqsgM2poP8MHyM0EBlhaoUUVzy15b6ws9uYo6w6pkXqXIYwsPmKshHsdMOOp7g96qo356Zvy3SGZ2aS1OOPFOqwMaby-ha9w3Lw";

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

        // Alterando a URL para usar o caminho do proxy
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

                return response.json(); // Convertendo a resposta para JSON
            })
            .then((data) => {
                console.log("Resposta da função:", data); // Exibindo resposta da API
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
