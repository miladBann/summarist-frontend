import "../../CSS/player-page/audioPlayer.css";
import { MdPlayCircle, MdPauseCircleFilled  } from "react-icons/md";
import { RiForward10Line, RiReplay10Line  } from "react-icons/ri";
import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from "axios";


function AudioPlayer({book}) {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [finishedBook, setFinishedBook] = useState(false);

    const userId = useSelector(state => { return state.userID.userID });

    const togglePlay = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleSeek = (e) => {
        const seekTime = parseFloat(e.target.value);
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    const handleSkip = (amount) => {
        audioRef.current.currentTime += amount;
        setCurrentTime(audioRef.current.currentTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        if (userId && !finishedBook) {
            const audioElement = audioRef.current;

            if (audioElement) {
                const handleEnded = () => {
                    const data = {
                        userID: userId,
                        bookId: book.id
                    }
        
                    axios.post(`${process.env.REACT_APP_BE_HOST}/add-to-finsied-books`, data)
                    .then(response => {
                        console.log("book saved: ", response.data);
                        setIsPlaying(false);
                        setFinishedBook(true);
                        setCurrentTime(0);
                    })
                    .catch(error => {console.log("error saving book: ", error)})
                };
        
                audioElement.addEventListener('ended', handleEnded);
                
                return () => {
                    audioElement.removeEventListener('ended', handleEnded);
                };
            }
        }
        //run after the book finished wether it was saved or not
        const audioElement = audioRef.current;
        if (audioElement) {
            const handleEnded = () => {
                setIsPlaying(false);
                setCurrentTime(0);
            };

            audioElement.addEventListener('ended', handleEnded);

            return () => {
                audioElement.removeEventListener('ended', handleEnded);
            };
    }
        
    }, [audioRef, userId, book.id, finishedBook]);
    
    useEffect(() => {
        const checkBookFinished = async () => {
            const data = {
                userID: userId,
                bookId: book.id
            }
            try {
                const response = await axios.post(`${process.env.REACT_APP_BE_HOST}/check-finsied-books`, data);
                if (response.data.addBook[0].association_exists === 1) {
                    setFinishedBook(true);
                }else {
                    setFinishedBook(false);
                }
            } catch (error) {
                console.log(error);
                setFinishedBook(false);
            }
        }
        if (userId) {
            checkBookFinished();
        }
    }, [userId, book.id])
    

    return (
        <div className="audio_player_wrapper">
            <audio ref={audioRef} src={book.audioLink} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata}/>

            <div className="audio_track_info">
                <figure >
                    <img src={book.imageLink} alt="" />
                </figure>

                <div className="audio_track_wrapper">
                    <div className="audio_track_title">{book.title}</div>
                    <div className="audio_track_author">{book.author}</div>
                </div>
            </div>

            <div className="audio_player_controls">
                <button onClick={() => handleSkip(-10)}><RiReplay10Line className="control_icon_style_time_btns"/></button>

                <button onClick={togglePlay}>{isPlaying ? <MdPauseCircleFilled className="control_icon_style"/> : <MdPlayCircle className="control_icon_style"/>}</button>

                <button onClick={() => handleSkip(10)}><RiForward10Line className="control_icon_style_time_btns"/></button>
            </div>

            <div className="audio_progress_wrapper">
                <div className="audio_time">{formatTime(currentTime)}</div>

                <input type="range" value={currentTime} max={duration || 0} className="audio_progress_bar" onChange={handleSeek} />

                <div className="audio_time">{formatTime(duration)}</div>
            </div>
        </div>
    );
}

export default AudioPlayer;

