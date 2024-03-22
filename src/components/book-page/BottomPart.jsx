import BottomPartSkeleton from "../../skeletos/book-page/BottomPartSkeleton";

function BottomPart({book, loading}) {
    return (
        <>
            {
                loading ? <BottomPartSkeleton /> : <>
                    <div className="inner_wrapper_about">What's it about?</div>

                    <div>
                        <div className="inner_wrapper_tag_container">
                            {
                                book.tags && book.tags.map((tag, index) => {
                                    return (
                                        <div key={`${index}-${tag}`} className="inner_wrapper_tag">
                                            {tag}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="inner_wrapper_book_Description">{book.bookDescription}</div>

                    <div className="inner_wrapper_about">About the author</div>

                    <div className="inner_wrapper_book_Description">{book.authorDescription}</div>
                </>
            }
        </>
    );

}

export default BottomPart;