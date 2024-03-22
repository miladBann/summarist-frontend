import { BsMic } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import React from "react";
import ReadListenBtnSkeleton from "../../skeletos/book-page/ReadListenBtnSkeleton";

function ReadListeBtns({book, openModal, loading}) {
    const navigate = useNavigate();

    const loggedIn = useSelector(state => { return state.loggedIn.loggedIn });
    const subscription = useSelector(state => {return state.subscription.subscription});

    const readorListenBtnFunc = () => {
        if (!loggedIn) {
            openModal();
        }
        else if (book.subscriptionRequired === true && subscription === "Premium"){
            navigate(`/player/${book.id}`);
        }else if (book.subscriptionRequired === false){
            navigate(`/player/${book.id}`);
        }else if (book.subscriptionRequired === true) {
            navigate("/get-plan");
        }
    }

    return (
        <>
            {
                loading ? <ReadListenBtnSkeleton /> : <>
                    <div className="inner_wrapper_btn_cont">
                        <button className="inner_wrapper_btn" onClick={readorListenBtnFunc}><HiOutlineBookOpen className="icon_styles"/> Read</button>
                        <button className="inner_wrapper_btn" onClick={readorListenBtnFunc}><BsMic className="icon_styles"/> Listen</button>
                    </div>   
                </>
            }
        </>
    );
}

export default ReadListeBtns;