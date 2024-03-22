import React, {useState} from "react";

function PlanCard({isActive, onclick, type, price, trail}) {

    return (
        <div className={`plan_card ${isActive ? "active_card" : ""}`} onClick={onclick}>
            <div className="plan_card_circle">
                {
                    isActive ? <div className="plan_card_dot"></div> : null 
                }
            </div>

            <div className="plan_card_info">
                <div className="plan_card_title">{type}</div>
                <div className="plan_card_price">{price}</div>
                <div className="plan_card_trial">{trail}</div>
            </div>
        </div>
    );
}

export default PlanCard;