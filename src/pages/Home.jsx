import NavBar from "../components/home-page/NavBar";
import Landing from "../components/home-page/Landing";
import Features from "../components/home-page/Features";
import Reviews from "../components/home-page/Reviews";
import Ratings from "../components/home-page/Ratings";
import Footer from "../components/home-page/Footer";
import ModalLogin from "../components/modals/ModalLogin";
import ModalSignUp from "../components/modals/ModalSignUp";
import React, {useState} from "react";


function Home() {

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
        <>
            <NavBar openLogin={openLoginModal}/>
            <Landing openLogin={openLoginModal}/>
            <Features />
            <Reviews openLogin={openLoginModal}/>
            <Ratings />
            <Footer />
            { openLogin && !openSignUp ? <ModalLogin closeModal={closeLoginModal} openSignup={openSignupModal}/> : null }
            { openSignUp && !openLogin ? <ModalSignUp closeModal={closeSignupModal} openLogin={openLoginModal}/> : null }
        </>
    );
}

export default Home;