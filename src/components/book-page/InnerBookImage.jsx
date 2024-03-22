import InnerBookImgSkeleton from "../../skeletos/book-page/InnerBookImgSkeleton";

function InnerBookImage({bookImg, loading}) {
    return (
        <>
            {
                loading ? <InnerBookImgSkeleton /> : <>
                    <div className="image_wrapper" data-aos="flip-right" data-aos-duration="500">
                        <figure>
                            <img src={bookImg} alt="" />
                        </figure>
                    </div>
                </>
            }
        </>
    );
}

export default InnerBookImage;