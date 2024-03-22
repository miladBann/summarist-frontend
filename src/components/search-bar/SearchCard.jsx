import { LuClock3 } from "react-icons/lu";
import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";

function SearchCard({book, close}) {
    const audioRef = useRef(null);
    const [duration, setDuration] = useState(0);

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <Link to={`/book/${book.id}`} className="search_book_card" onClick={close}>
            <audio ref={audioRef} src={book.audioLink} onLoadedMetadata={handleLoadedMetadata}></audio>

            <figure>
                <img src={book.imageLink} alt="" />
            </figure>

            <div className="search_book_card_info">
                <div className="search_book_card_title">{book.title}</div>
                <div className="search_book_card_author">{book.author}</div>
                <div className="book_rating">
                    <LuClock3  className="rating_star"/>
                    {formatTime(duration)}
                </div>
            </div>
        </Link>    
    );
}

export default SearchCard;