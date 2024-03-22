

function PlanFeatureCard({icon, boldText, regularText}) {
    return (
        <div className="plan_features_card">
            <figure className="plan_icon_container">
                {icon} 
            </figure>

            <div className="plan_feature_text"><b>{boldText}</b> {regularText}</div>
        </div>
    );
}

export default PlanFeatureCard;