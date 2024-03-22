

function BookCardSkeleton() {
    return (
        <div className="book_container">

            <figure>
                <img alt="" className="skeleton"/>
            </figure>

            <div className="book_title skeleton_text"></div>

            <div className="book_author skeleton_text"></div>

            <div className="book_subtitle skeleton_text"></div>

            <div className="book_rating_wrapper">
                <div className="book_rating skeleton_text"></div>
 
                <div className="book_rating skeleton_text"></div>
            </div>
        </div>
    );
}


export default BookCardSkeleton;