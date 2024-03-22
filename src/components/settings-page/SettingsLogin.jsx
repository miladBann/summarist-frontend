import pic from "../../assets/login.png"
import ModalLogin from "../modals/ModalLogin";
import ModalSignUp from "../modals/ModalSignUp";
import React, {useState} from "react";


function SettingsLogin() {
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);

    const openLoginModal = () => {
        setOpenSignUp(false);
        setOpenLogin(true)
    };
    const openSignupModal = () => {
        setOpenLogin(false);
        setOpenSignUp(true);
    }

    const closeLoginModal = () => {setOpenLogin(false)};
    const closeSignupModal = () => {setOpenSignUp(false)};

    

    return (
        <div className="settings_wrapper">
            <img src={pic} alt="" className="settings_login_pic"/>

            <div className="settings_login_text">Log in to your account to see your details.</div>

            <button className="settings_login_btn" onClick={openLoginModal}>Login</button>

            {openLogin && !openSignUp && <ModalLogin closeModal={closeLoginModal} openSignup={openSignupModal}/>}
            { openSignUp && !openLogin ? <ModalSignUp closeModal={closeSignupModal} openLogin={openLoginModal}/> : null }
        </div>
    );
}

export default SettingsLogin;