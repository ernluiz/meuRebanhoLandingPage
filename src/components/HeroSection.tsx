import React from "react";
import Button from "../components/button/button";

const HeroSection: React.FC = () => {
    return (
        <section id="hero">
            <span className="desktop-only">
                <img src="/r1.svg" alt="Retangulo um tela inicial" />
            </span>
            <img src="/r2.svg" alt="Retangulo dois tela inicial" />
            <div className="container content">
                <h1>Gestão do seu rebanho na palma da sua mão</h1>
                <h2>Já pensou em monitorar o ciclo reprodutivo das suas vacas através do celular?</h2>
                <h3>
                    Transforme a gestão do seu rebanho com tecnologia de ponta: monitore o ciclo reprodutivo
                    das suas vacas em tempo real, diretamente do seu celular, e maximize a eficiência do seu
                    negócio rural.
                </h3>
                <div className="flex gap-1">
                    <Button
                        text="Cadastre-se"
                        func={() => {
                            console.log("Ação de cadastro");
                        }}
                    />
                    <span className="desktop-only">
                        <Button
                            text="Veja mais"
                            secondary
                            func={() => {
                                console.log("Ação de ver mais");
                            }}
                        />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
