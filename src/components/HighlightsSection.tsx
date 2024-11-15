import React from "react";
import Imagem1 from "../assets/heads-black-white-holstein-cows.jpg";
import Imagem2 from "../assets/cows-green-field-sunny-day.jpg";
import Imagem3 from "../assets/cattleman-holding-tablet.jpg";

const HighlightsSection: React.FC = () => {
    return (
        <section id="highlights">
            <div className="container content">
                <h2>Nossos Destaques</h2>
                <div className="highlights-cards">
                    <div className="highlight-item">
                        <h3>Monitoramento do ciclo reprodutivo</h3>
                        <img src={Imagem1} alt="Imagem de exemplo" className="gallery-image" />
                        <p>
                            Acompanhe de forma eficiente o ciclo reprodutivo de vacas e novilhas, com alertas
                            automáticos e relatórios detalhados sobre o estado de saúde e o período fértil.
                        </p>
                    </div>
                    <div className="highlight-item">
                        <h3>Gestão de reprodutores</h3>
                        <img src={Imagem2} alt="Imagem de exemplo" className="gallery-image" />
                        <p>
                            Cadastre e gerencie touros reprodutores, monitorando a performance de cada um e
                            maximizando os resultados do seu programa de reprodução.
                        </p>
                    </div>
                    <div className="highlight-item">
                        <h3>Suporte Especializado</h3>
                        <img src={Imagem3} alt="Imagem de exemplo" className="gallery-image" />
                        <p>
                            Oferecemos suporte técnico e consultoria especializada para otimizar a gestão do seu
                            rebanho, garantindo que você tire o máximo proveito do sistema.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightsSection;
