import "../CSS/get-plan-page/getPlan.css";
import Footer from "../components/get-plan-page/Footer";
import UpperHalf from "../components/get-plan-page/UpperHalf";
import PlanContent from "../components/get-plan-page/PlanContent";
import React, {useState, useEffect} from "react";


function GetPlan() {
    
    return (
        <div className="plan">
            <UpperHalf />
            <PlanContent />
            <Footer />
        </div>
    );
}

export default GetPlan;