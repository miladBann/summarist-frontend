

function UpperPartSkeleton() {
    return (
        <>
            <div className="inner_book_title skeleton_text_title"></div>

            <div className="inner_book_author skeleton_text"></div>

            <div className="inner_book_subTitle skeleton_text_long"></div>

            <div className="inner_book_description_container">
                <div className="inner_book_description_wrapper">
                    <div className="inner_book_description">
                        <div className="firstDiv skeleton_text"></div>
                        <div className="skeleton_text"></div>
                    </div>

                    <div className="inner_book_description">
                        <div className="firstDiv skeleton_text"></div>
                        <div className="skeleton_text"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpperPartSkeleton;