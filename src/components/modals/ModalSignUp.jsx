import { IoCloseSharp } from "react-icons/io5";
import "../../CSS/modals/modalSignUp.css";
import React, {useState} from "react";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from "../../redux/loginSlice";
import { setUserID } from "../../redux/userIDSlice";
import {setUserEmail} from "../../redux/userEmailSlice";

function ModalSignUp({closeModal, openLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [failStatus, setFailStatus] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();

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

    const register = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_BE_HOST}/register`, {
                email: email,
                password: password
            });

            console.log("Register successful: ", response.data);
            localStorage.setItem("userEmail", email);
            setStatus(response.data.status);
            dispatch(login());
            dispatch(setUserEmail(email));
            getUserID();
            checkURL();
        } catch (error) {
            console.error("Regestration failed: ", error.response ? error.response.data : error.message);
            setFailStatus(error.response.data.message);
        }   
    }

    return (
        <>
            <div className="SignUpmodalCont">
                <div className="SignUpmodalCont2" data-aos="flip-left" data-aos-duration="300">

                    <div className="closeModal">
                        <IoCloseSharp className="closeBtn" onClick={closeModal}/>
                    </div>
                        
                    <h3>Sign up to Summarist</h3>

                    {
                        failStatus && status !== "success" ? <h4 className="error">Email Already Registered</h4> : null
                    }

                    <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                    <button className="loginBtn" onClick={register}>{status === "success" ? "Success..." : "Sign up"}</button>

                    <div className="noAcc">
                        <h4 onClick={openLogin}>Already have an account?</h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalSignUp;