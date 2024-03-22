import "../../CSS/for-you/selectedbook.css";
import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import SelectedBookSkeleton from "../../skeletos/for-you/SelectedBookSkeleton.jsx";

function SelectedBook() {
    const [book, setBook] = useState([]);
    const audioRef = useRef(null);
    const [duration, setDuration] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected");
            setBook(response.data["0"]);
            setLoading(false);
        }
        
        fetchData();
    }, [])

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const formatTime2 = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes} mins ${seconds} secs`;
    };

    return (
        <div className="row">
            <div className="container" data-aos="fade-left">
                <audio ref={audioRef} src={book.audioLink} onLoadedMetadata={handleLoadedMetadata}></audio>

                <p className="recommendedbooks_title">Selected just for you</p>
                {
                    loading ? <>
                        <SelectedBookSkeleton />
                    </> : <>
                        <Link to={`/book/${book.id}`}>
                            <div className="selectedBook_container">
                                <h3 className="selectedBook_subTitle">{book.subTitle}</h3>

                                <div className="selectedbook_divider"></div>

                                <div className="selectedbook_display">
                                    <img src={book.imageLink} alt="selectedbook_img" className="selectedbook_img"/>

                                    <div className="selectedbook_info">
                                            <h4 className="selectedbook_book_name">{book.title}</h4>
                                            <h5 className="selectedbook_author_name">{book.author}</h5>
                                            <div className="time_duration"><FaCirclePlay className="duration_icon"/> {formatTime2(duration)}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </>
                }
                
            </div>
        </div>
    );
}

export default SelectedBook;