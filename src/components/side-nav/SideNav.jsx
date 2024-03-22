import "../../CSS/side-nav/sideNav.css";
import logo from "../../assets/logo.png";
import SideNavLink from "./SideNavLink";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/loginSlice';
import { small, extraSmall, big, extraBig } from "../../redux/fontSizeSlice";
//icons
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { IoBookmarkOutline, IoSettingsOutline  } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { RiBallPenLine } from "react-icons/ri";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { RiFontSize } from "react-icons/ri";

function SideNav({openModal }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [page, setPage] = useState("");
    const [playerPage, setPlayerPage] = useState(false);
    const loggedIn = useSelector(state => { return state.loggedIn.loggedIn });

    function checkPageURL() {
        const currentURL = window.location.href;
        const urlString = currentURL.toString();

        if (urlString.includes("for-you")) {
            setPage("for-you");
        }else if (urlString.includes("book")) {
            setPage("book");
        }else if (urlString.includes("my-library")) {
            setPage("my-library");
        }else if (urlString.includes("settings")) {
            setPage("settings");
        }else if (urlString.includes("player")) {
            setPlayerPage(true);
            document.querySelector(".sidebar_wrapper").classList.add("player_page");
        }
    }

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        window.location.reload();
    };

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    useEffect(() => {
        checkPageURL();
    }, []);

    return (
        <div className="sidebar" data-aos="fade-right" data-aos-duration="300">

            <div className="sidebar_logo">
                <img src={logo} alt="" />
            </div>

            <div className="sidebar_wrapper">
   
                <div className="sidbar_top">
                    <SideNavLink icon={<AiOutlineHome />} page={"for-you"} text="For you" active={page === "for-you" ? "active_tab" : null} allowed={""}/>
                    <SideNavLink icon={<IoBookmarkOutline />} page={"my-library"} text="My Library" active={page === "my-library" ? "active_tab" : null} allowed={""}/>
                    <SideNavLink icon={<RiBallPenLine />} page={""} text="Highlights" active={""} allowed={"not_allowed"}/>
                    <SideNavLink icon={<AiOutlineSearch />} page={""} text="Search" active={""} allowed={"not_allowed"}/>
                    {
                        playerPage ? 
                        <>
                            <div className="font_div">
                                <div className={`font font_extra_small ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>
                                    <RiFontSize className="font_icon" onClick={() => dispatch(extraSmall())}/>
                                </div>
                                <div className={`font font_small ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>
                                    <RiFontSize className="font_icon" onClick={() => dispatch(small())}/>
                                </div>
                                <div className={`font font_larg_small ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)}>
                                    <RiFontSize className="font_icon" onClick={() => dispatch(big())}/>
                                </div>
                                <div className={`font font_extra_larg ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleClick(3)}>
                                    <RiFontSize className="font_icon" onClick={() => dispatch(extraBig())}/>
                                </div>
                            </div>
                        </> : null
                    }
                </div>

                <div className="sidebar_bottom">
                    <SideNavLink icon={<IoSettingsOutline />} page={"settings"} text="Settings" active={page === "settings" ? "active_tab" : null} allowed={""}/>
                    <SideNavLink icon={<FaRegCircleQuestion />} page={""} text="Help & Support" active={""} allowed={"not_allowed"}/>
                    {
                        loggedIn ? 
                            <SideNavLink icon={<FiLogOut />} page={""} text="Logout" active={""} allowed={""} logout={handleLogout}/>
                            :
                            <>
                            <SideNavLink icon={<LuLogIn />} page={""} text="Login" active={""} allowed={""} login={openModal}/>
                            
                            </>
                    }
                    
                </div>
            </div>
            
        </div>
    );
}

export default SideNav;