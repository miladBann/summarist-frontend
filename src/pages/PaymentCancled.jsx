import SideNav from "../components/side-nav/SideNav";
import SearchBar from "../components/search-bar/SearchBar";
import ModalLogin from "../components/modals/ModalLogin";
import ModalSignUp from "../components/modals/ModalSignUp";
import "../CSS/payment-success-cancle.css";
import { useState, useEffect } from "react";

function PaymentCancle() {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

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

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="wrapper">
            <SearchBar openModal={openLoginModal}/>
            {isWideScreen && <SideNav openModal={openLoginModal}/>}
            <div className="row">
                <div className="container">
                    <h1 className="calncled_pay">Your Payment for the subscribtion was Cancelled 🥲</h1>
                </div>
            </div>
            {openLogin && !openSignUp && <ModalLogin closeModal={closeLoginModal} openSignup={openSignupModal}/>}
            { openSignUp && !openLogin ? <ModalSignUp closeModal={closeSignupModal} openLogin={openLoginModal}/> : null }
        </div>
    );
}

export default PaymentCancle;