import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SettingsInfo() {
    const email = useSelector(state => { return state.email.email});
    const subscription = useSelector(state => {return state.subscription.subscription});

    return (
        <div>

            <div className="settings_content" data-aos="fade-down" data-aos-duration="300">
                <div className="settings_content_title">Your Subscription plan</div>
                <div className="settings_content_subcscription_type">{subscription}</div>
                {
                    subscription === "Premium" ? null : <Link to="/get-plan"><button>Upgrade to premium</button></Link>
                }
            </div>

            <div className="settings_content" data-aos="fade-down" data-aos-duration="300">
                <div className="settings_content_title">Email</div>
                <div className="settings_content_subcscription_type">{email}</div>
            </div>

        </div>
    );
}

export default SettingsInfo;