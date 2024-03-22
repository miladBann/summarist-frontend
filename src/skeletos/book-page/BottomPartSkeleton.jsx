

function BottomPartSkeleton() {
    return (
        <>
            <div className="inner_wrapper_about">What's it about?</div>

            <div>
                <div className="inner_wrapper_tag_container">
                    {
                        Array(2).fill(0).map((_, index) => {
                            return <div key={index} className="skeleton_button"></div>
                        })
                    }
                </div>
            </div>

            <div className="inner_wrapper_book_Description">
                {
                    Array(5).fill(0).map((_, index) => {
                        return <div className="skeleton_text_long" key={index}></div>
                    })
                }
            </div>

            <div className="inner_wrapper_about">About the author</div>

            <div className="inner_wrapper_book_Description">
                {
                    Array(5).fill(0).map((_, index) => {
                        return <div className="skeleton_text_long" key={index}></div>
                    })
                }
            </div>
        </>
    );
}

export default BottomPartSkeleton;