import SearchBar from "../components/search-bar/SearchBar";
import SideNav from "../components/side-nav/SideNav";
import BookInfo from "../components/book-page/BookInfo";
import ModalLogin from "../components/modals/ModalLogin";
import ModalSignUp from "../components/modals/ModalSignUp";
import React, {useState, useEffect} from "react";

function Book() {
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
            <BookInfo openModal={openLoginModal}/>
            {openLogin && !openSignUp && <ModalLogin closeModal={closeLoginModal} openSignup={openSignupModal}/>}
            {openSignUp && !openLogin ? <ModalSignUp closeModal={closeSignupModal} openLogin={openLoginModal}/> : null }
        </div>
    );
}

export default Book;