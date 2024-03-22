import { Link } from "react-router-dom";

function SideNavLink({icon, page, text, allowed, active, logout, login}) {
    if (page !== "") {
        return (
            <Link to={`/${page}`} className={`sidebar_link_wrapper ${allowed}`} onClick={logout || login}>
                <div className={`sidebar_link_line ${active}`}></div>
                <div className="sidebar_icon">{icon}</div>
                <div className="sidebar_text">{text}</div>
            </Link>
        );
    } else {
        return (
            <div className={`sidebar_link_wrapper ${allowed}`} onClick={logout || login}>
                <div className={`sidebar_link_line ${active}`}></div>
                <div className="sidebar_icon">{icon}</div>
                <div className="sidebar_text">{text}</div>
            </div>
        );
    }
}

export default SideNavLink;