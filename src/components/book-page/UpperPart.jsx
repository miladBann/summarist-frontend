import React, {useState, useRef} from "react";
import UpperPartSkeleton from "../../skeletos/book-page/UpperPartSkeleton";
import { LuClock } from "react-icons/lu";
import { TbBulb } from "react-icons/tb";
import { LuStar } from "react-icons/lu";
import { BsMic } from "react-icons/bs";



function UpperPart({book, loading}) {

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
        <>
            {
                loading ? <> <UpperPartSkeleton /> </> : <>
                    <audio ref={audioRef} src={book.audioLink} onLoadedMetadata={handleLoadedMetadata}></audio>

                    <div className="inner_book_title">{book.title}</div>

                    <div className="inner_book_author">{book.author}</div>

                    <div className="inner_book_subTitle">{book.subTitle}</div>

                    <div className="inner_book_description_container">
                        <div className="inner_book_description_wrapper">
                            <div className="inner_book_description">
                                <div className="firstDiv"><LuStar className="icon_styles"/> {book.averageRating} {`(${book.totalRating} ratings)`}</div>
                                <div ><BsMic className="icon_styles"/> {book.type}</div>
                            </div>

                            <div className="inner_book_description">
                                <div className="firstDiv"><LuClock className="icon_styles"/> {formatTime(duration)}</div>
                                <div><TbBulb className="icon_styles"/> {`${book.keyIdeas} Key ideas`}</div>
                            </div>
                        </div>
                    </div>   
                </>
            }
        </>
    );
}

export default UpperPart;