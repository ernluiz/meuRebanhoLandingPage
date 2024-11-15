import Check from "../assets/check.svg";

interface FeatureListProps {
  features: string[];
}

function FeatureList({ features }: FeatureListProps) {
  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <span className="features" key={index}>
          <img src={Check} alt="ícone check" width={24} height={24} />
          <h4>{feature}</h4>
        </span>
      ))}
    </div>
  );
}

export default FeatureList;
