import "../../CSS/modals/modalLogin.css";
import { IoCloseSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import React, {useState} from "react";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../../redux/loginSlice";
import {setUserEmail} from "../../redux/userEmailSlice";
import { setUserID } from "../../redux/userIDSlice";
import { setPremium } from "../../redux/subscription";

function ModalLogin({closeModal, openSignup}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [failStatus, setFailStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch()

    const checkURL = () => {
        if (location.pathname === "/") {
            navigate("/for-you");
        }else {
            closeModal();
        }
    } 

    const getUserID = async () => {
        const data = {
            email: email
        }

        axios.post(`${process.env.REACT_APP_BE_HOST}/get-user-id`, data)
        .then(response => {
            setUserID(response.data.id);
            dispatch(setUserID(response.data.id));
        })
        .catch(error => console.log(error));
    }

    const getSubscriptionStatus = async () => {
        const data = {
            email: email
        }

        axios.post(`${process.env.REACT_APP_BE_HOST}/check-premium-user` , data)
        .then(response => {
            if (response.data.checkUser[0].association_exists === 1) {
                dispatch(setPremium());
            }
        }).catch(error => console.log(error));
    }


    const loginUser = async () => {
        try {
            setLoading(true);

            const data = {
                email: email,
                password: password
            }

            await axios.post(`${process.env.REACT_APP_BE_HOST}/login`, data)
            .then(response => {
                if (response.data.status === "success") {
                    localStorage.setItem("userEmail", email);
                    dispatch(login());
                    dispatch(setUserEmail(email));
                    getUserID();
                    getSubscriptionStatus();
                    setStatus(response.data.status);
                    checkURL();
                    setLoading(false);
                }else {
                    console.log("login failed");
                }
            
            })
        } catch (error) {
            console.error("login failed: ", error.response ? error.response.data : error.message);
            setFailStatus(error.response ? error.response.data.message : error.message)
        }
    }

    const guestLogin = () => {
        navigate("/for-you");
    }

    return (
        <>
            
            <div className="modalCont" >
                <div className="modalCont2" data-aos="flip-down" data-aos-duration="300">

                    <div className="closeModal">
                        <IoCloseSharp className="closeBtn" onClick={closeModal}/>
                    </div>
                    
                    <h3>Log in to Summarist</h3>
                    {
                        failStatus && status !== "success" ? <h4 className="error">{failStatus}</h4> : null
                    }
                    <button className="guestLogin" onClick={guestLogin}><figure><FaUser /></figure> Login as a Guest</button>

                    <div className="divider-line">
                        <span className="divider-text">or</span>
                    </div>

                    <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                    <button className="loginBtn" onClick={loginUser}>{loading ? "logging in..." : status === "success" ? "Success..." : "Login"}</button>
                    
                    <h5>Forgot your password?</h5> 
                    
                    <div className="noAcc">
                        <h4 onClick={openSignup}>Don't have an account?</h4>
                    </div>

                </div>
            </div>
        </>
        
    );
}


export default ModalLogin;