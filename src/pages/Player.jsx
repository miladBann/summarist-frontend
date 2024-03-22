import { useParams} from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";
import SideNav from "../components/side-nav/SideNav";
import SearchBar from "../components/search-bar/SearchBar";
import AudioBookInfo from "../components/player-page/AudioBookInfo";
import AudioPlayer from "../components/player-page/AudioPlayer";
import ModalLogin from "../components/modals/ModalLogin";
import ModalSignUp from "../components/modals/ModalSignUp";


function Player() {
    const {id} = useParams();

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);

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
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`);
            setBook(response.data);
            setLoading(false);
        }

        fetchData();
    }, [id])

    return (
        <div className="wrapper">
            <SearchBar openModal={openLoginModal}/>
            {isWideScreen && <SideNav openModal={openLoginModal}/>}
            <AudioBookInfo book={book} loading={loading}/>
            <AudioPlayer book={book}/>
            {openLogin && !openSignUp && <ModalLogin closeModal={closeLoginModal} openSignup={openSignupModal}/>}
            {openSignUp && !openLogin ? <ModalSignUp closeModal={closeSignupModal} openLogin={openLoginModal}/> : null }
        </div>
    );
}

export default Player;