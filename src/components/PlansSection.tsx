import React from "react";
import Button from "../components/button/button";
import Check from "../assets/check.svg";

const PlansSection: React.FC = () => {
    const basicPlanFeatures = [
        "Suporte limitado",
        "Cadastro simplificado de animais",
        "Alertas de manejo e eventos importantes",
    ];

    const advancedPlanFeatures = [
        "Relatórios detalhados de produção",
        "Integração com dispositivos IoT",
        "Controle financeiro e de despesas",
    ];

    const premiumPlanFeatures = [
        "Gestão avançada de rebanho",
        "Previsão de produção com inteligência artificial",
        "Planejamento de manejo e nutrição",
        "Suporte técnico prioritário e treinamentos exclusivos",
    ];

    return (
        <section id="planos">
            <div className="container content">
                <h4>Escolha o melhor plano para você</h4>
                <h2>Nossos Planos</h2>
                <div className="planos-cards">
                    {[
                        {
                            title: "Plano Básico",
                            price: "Grátis",
                            description: "Ideal para pequenos produtores.",
                            features: basicPlanFeatures,
                        },
                        {
                            title: "Plano Avançado",
                            price: "R$ 99,90/mês",
                            description: "Ideal para produtores que buscam otimizar a gestão do gado.",
                            features: advancedPlanFeatures,
                        },
                        {
                            title: "Plano Premium",
                            price: "R$ 149,90/mês",
                            description: "Para quem busca controle completo e máximo aproveitamento do rebanho.",
                            features: premiumPlanFeatures,
                        },
                    ].map((plan, index) => (
                        <div key={index} className="plano-card">
                            <h3>{plan.title}</h3>
                            <h3 className="plano-preco">{plan.price}</h3>
                            <h4>{plan.description}</h4>
                            <Button
                                text="Assinar"
                                func={() => console.log(`Você assinou o ${plan.title}!`)}
                            />
                            <div className="features-container">
                                {plan.features.map((feature, index) => (
                                    <span className="features" key={index}>
                                        <img src={Check} alt="ícone check" width={24} height={24} />
                                        <h4>{feature}</h4>
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PlansSection;
