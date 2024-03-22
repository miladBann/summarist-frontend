import logo from "../../assets/logo.png";

function NavBar({openLogin}) {
    return (
        <nav className="nav" data-aos="fade-down">
            <div className="nav__wrapper">
                <figure className="nav__img--mask">
                <img className="nav__img" src={logo} alt="logo" />
                </figure>
                <ul className="nav__list--wrapper">
                <li className="nav__list nav__list--login" onClick={openLogin}>Login</li>
                <li className="nav__list nav__list--mobile">About</li>
                <li className="nav__list nav__list--mobile">Contact</li>
                <li className="nav__list nav__list--mobile">Help</li>
                </ul>
            </div>
        </nav>
    );
}


export default NavBar;