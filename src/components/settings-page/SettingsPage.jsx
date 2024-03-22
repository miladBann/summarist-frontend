import "../../CSS/settings-page/settingsPage.css";
import { useSelector } from "react-redux";
import SettingsLogin from "./SettingsLogin";
import SettingsInfo from "./SettingsInfo";


function SettingsPage() {
    const loggedIn = useSelector(state => { return state.loggedIn.loggedIn });

    return (
        <div className="row">
            <div className="container">
                
                <div className="settings_title">Settings</div>

                <div>
                    {
                        !loggedIn ? <SettingsLogin /> : <SettingsInfo />
                    }
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;