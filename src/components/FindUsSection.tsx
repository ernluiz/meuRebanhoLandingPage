import React from "react";
import Imagem6 from "../assets/mapa.jpg";
import Imagem7 from "../assets/youtube.png";
import Imagem8 from "../assets/instagram.png";
import Imagem9 from "../assets/facebook.png";
import Imagem10 from "../assets/linkedin.png";

const FindUsSection: React.FC = () => {
    return (
        <section id="find-us">
            <div className="container content">
                <h2>Onde nos encontrar</h2>
                <div className="highlights-cards">
                    <div className="highlight-item">
                        <h3>Horário de atendimento:</h3>
                        <p>Segunda a Sexta: 8h - 18h e Sábado: 8h - 12h</p>
                        <h3>Contato:</h3>
                        <p>Telefone: (45) 99876-5432</p>
                        <h3>Email:</h3>
                        <p>contato@techgold.com.br</p>
                        <br />
                        <div className="icon-container">
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Imagem7} alt="Youtube logo" className="icon" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Imagem8} alt="Instagram logo" className="icon" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Imagem9} alt="Facebook logo" className="icon" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Imagem10} alt="Linkedin logo" className="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="highlight-item">
                        <h3>Nosso escritório:</h3>
                        <p>Techgold – Av. da FAG, 551 - Loteamento FAG, Cascavel - PR, CEP 85806-095</p>
                        <img src={Imagem6} alt="Imagem de exemplo" className="gallery-image" />
                        <a href="https://www.google.com/maps/place/Av.+da+Fag,+551+-+Santo+In%C3%A1cio,+Cascavel+-+PR,+85806-096" target="_blank" rel="noopener noreferrer">
                            Clique aqui para abrir no Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindUsSection;