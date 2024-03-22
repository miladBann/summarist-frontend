import "../../CSS/player-page/audioBookInfo.css";
import { useSelector } from "react-redux";
import AudioBookInfoSkeleton from "../../skeletos/player-page/AudioBookInfoSkeleton";

function AudioBookInfo({book, loading}) {
    const fontSize = useSelector(state => { return state.fontSize.fontSize });

    return (
        <>
        {
            loading ? <AudioBookInfoSkeleton /> : <>
                <div className="row">
                    <div className="audio_book_summary">
                        <div className="audio_book_container">

                            <div className="audio_book_title" data-aos="fade-down" data-aos-duration="500">
                                <b>{book.title}</b> 
                            </div>

                            <div className="audio_book_text" style={{fontSize: fontSize}} data-aos="fade-down" data-aos-duration="500">
                                {book.summary}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
        </>
    );
}

export default AudioBookInfo;