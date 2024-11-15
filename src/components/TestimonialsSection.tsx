import React from "react";
import Imagem4 from "../assets/young-man-farmer-hat-smiling.jpg";
import Imagem5 from "../assets/grass-farmer-black-man.jpg";

const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials">
            <div className="container content">
                <h2>Depoimentos</h2>
                <h3>Veja o que dizem alguns de nossos clientes:</h3>
                <div className="highlights-cards">
                    {[{
                        text: "Desde que começamos a usar o Meu Rebanho, a produtividade da nossa fazenda aumentou significativamente...",
                        author: "Carlos Souza",
                        role: "Produtor Rural, Fazenda Santa Clara",
                        image: Imagem4
                    }, {
                        text: "A implementação do Meu Rebanho revolucionou a nossa fazenda, pois antes o controle do ciclo reprodutivo das vacas era muito manual...",
                        author: "Rodrigo Oliveira",
                        role: "Pecuarista de leite, Sítio Boa Vista",
                        image: Imagem5
                    }].map((testimonial, index) => (
                        <div key={index} className="highlight-item">
                            <p>{testimonial.text}</p>
                            <div className="author">
                                <h3>– {testimonial.author},</h3>
                                <p>{testimonial.role}</p>
                            </div>
                            <img src={testimonial.image} alt="Imagem de exemplo" className="gallery-image" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
