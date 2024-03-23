import SideNav from "../components/side-nav/SideNav";
import "../CSS/payment-success-cancle.css";
import { useState, useEffect } from "react";
import SearchBar from "../components/search-bar/SearchBar";
import ModalLogin from "../components/modals/ModalLogin";
import ModalSignUp from "../components/modals/ModalSignUp";
import axios from "axios";
import { useDispatch } from 'react-redux';
import {setPremium} from "../redux/subscription";


function PaymentSuccess() {
    const dispatch = useDispatch();
    const userEmail = localStorage.getItem("userEmail");
    const [isPremium, setIsPremium] = useState(false);
    const [isAddedToPremium, setIsAddedToPremium] = useState(false);
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

    useEffect(() => {

        const addPremiumUser = async () => {
            if (!isPremium && !isAddedToPremium) {
                const data = {
                    email: userEmail
                }
                const response = await axios.post(`${process.env.REACT_APP_BE_HOST}/add-premium-user`, data);
                dispatch(setPremium());
                console.log(await response.data)
                setIsAddedToPremium(true); 
            }      
        }
        addPremiumUser();
    }, [isPremium, dispatch, isAddedToPremium]);

    return (
        <div className="wrapper">
            <SearchBar openModal={openLoginModal}/>
            {isWideScreen && <SideNav openModal={openLoginModal}/>}
            <div className="row">
                <div className="container">
                    <h1 className="successful_pay">Your Payment for the subscribtion was Successful 🥳🥳</h1>
                </div>
            </div>
            {openLogin && !openSignUp && <ModalLogin closeModal={closeLoginModal} openSignup={openSignupModal}/>}
            { openSignUp && !openLogin ? <ModalSignUp closeModal={closeSignupModal} openLogin={openLoginModal}/> : null }
        </div>
    );
}

export default PaymentSuccess;
