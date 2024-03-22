import PlanCard from "./PlanCard";
import FAQCard from "./FAQCard";
import PlanFeatureCard from "./PlanFeatureCard";
import React, {useState} from "react";
import {loadStripe} from "@stripe/stripe-js";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";

function PlanContent() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [stripeLoading, setStripeLoading] = useState(false);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };


    let stripePromise 
    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
        }

        return stripePromise;
    }

    const redirectToCheckout = async (priceId) => {
        setStripeLoading(true);

        const stripe = await getStripe();
        const session = await stripe.redirectToCheckout({
            lineItems: [{ price: priceId, quantity: 1 }],
            mode: 'subscription',
            successUrl: `${window.location.origin}/success`,
            cancelUrl: `${window.location.origin}/cancel`
        });

        if (session.error) {
            alert(session.error.message);
        }
        setStripeLoading(false);
    };
     
    return (
        <div className="row">
            <div className="container" data-aos="fade-up" data-aos-duration="500">

                <div className="plan_features_cont">
                    <PlanFeatureCard icon={<IoDocumentTextSharp className="plan_icon"/>} boldText="Key ideas in few min" regularText=" with many books to read"/>
                    <PlanFeatureCard icon={<RiPlantFill className="plan_icon"/>} boldText="3 million" regularText="people growing with Summarist everyday"/>
                    <PlanFeatureCard icon={<FaHandshake className="plan_icon"/>} boldText="Precise recommendations" regularText=" collections curated by experts"/>
                </div>
                
                <div className="plan_title">Choose the plan that fits you</div>
                
                
                <PlanCard isActive={activeIndex === 0} onclick={() => handleCardClick(0)} type="Premium Plus Yearly" price="$99.99/year" trail="7-day free trial included"/>

                <div className="plan_divider-line">
                    <span className="plan_divider-text">or</span>
                </div>
                
                <PlanCard isActive={activeIndex === 1} onclick={() => handleCardClick(1)} type="Premium Monthly" price="$9.99/month" trail="No trial included"/>
                
                {
                    activeIndex === 0 ? <>
                        <div className="floating_plan_div">
                            <button onClick={() => redirectToCheckout("price_1OqFfPHleP3qOdte7veZl6kN")}>{stripeLoading ? "Loading..." : "Start your free 7-day trial"}</button>
                            <div className="plan_disclaimer">Cancel your trial at any time before it ends, and you won’t be charged.</div>
                        </div>
                    </> : <>
                        <div className="floating_plan_div">
                            <button onClick={() => redirectToCheckout("price_1OqFgNHleP3qOdteInDmS1QY")}>{stripeLoading ? "Loading..." : "Start your first month"}</button>
                            <div className="plan_disclaimer">30-day money back guarantee, no questions asked.</div>
                        </div>
                    </>
                }
                

                <div className="faq_wrapper">
                    <FAQCard title={"How does the free 7-day trial work?"} content={"Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial."}/>
                    <FAQCard title={"Can I switch subscriptions from monthly to yearly, or yearly to monthly?"} content={"While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option."}/>
                    <FAQCard title={"What's included in the Premium plan?"} content={"Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle."}/>
                    <FAQCard title={"Can I cancel during my trial or subscription?"} content={"You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day."}/>
                </div>

            </div>
        </div>
    );
}

export default PlanContent;