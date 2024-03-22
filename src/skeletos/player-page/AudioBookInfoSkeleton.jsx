

function AudioBookInfoSkeleton() {
    return (
        <div className="row">
            <div className="audio_book_summary">
                <div className="audio_book_container">

                    <div className="audio_book_title">
                         <div className="skeleton_text_title"></div>
                    </div>

                    {
                        Array(4).fill(0).map((_,index) => {
                            return <>
                                <div className="audio_book_text" key={index}>
                                    {
                                        Array(6).fill(0).map((_,index) => {
                                            return <div className="skeleton_text_long" key={index}></div>
                                        })
                                    }
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default AudioBookInfoSkeleton;