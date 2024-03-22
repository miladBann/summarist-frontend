import "../../CSS/for-you/bookCard.css";
import { Link } from "react-router-dom";
import React, { useState, useRef } from 'react';
import { FaRegStar } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";


function BookCard({book}) {
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
        <Link to={`/book/${book.id}`} className="book_container" data-aos="flip-up">
            {book.subscriptionRequired ? <div className="premium_tag">Premium</div> : null}
            <audio ref={audioRef} src={book.audioLink} onLoadedMetadata={handleLoadedMetadata}></audio>

            <figure>
                <img src={book.imageLink} alt="" />
            </figure>

            <div className="book_title">{book.title}</div>

            <div className="book_author">{book.author}</div>

            <div className="book_subtitle">{book.subtitle}</div>

            <div className="book_rating_wrapper">
                <div className="book_rating">
                    <LuClock3  className="rating_star"/>
                    {formatTime(duration)}
                </div>

                <div className="book_rating">
                    <FaRegStar className="rating_star"/>
                    {book.totalRating}
                </div>
            </div>
        </Link>
    );
}


export default BookCard;