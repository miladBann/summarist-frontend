import UpperPart from "./UpperPart";
import ReadListeBtns from "./ReadListenBtns";
import AddToLibrary from "./AddToLibrary";
import BottomPart from "./BottomPart";

function InnerBookInfo({book, openModal, loading}) {
   
    return (
        <div className="inner_book" data-aos="flip-left" data-aos-duration="500">
            <UpperPart book={book} loading={loading}/>
            <ReadListeBtns book={book} openModal={openModal} loading={loading}/>
            <AddToLibrary book={book} openModal={openModal}/>
            <BottomPart book={book} loading={loading}/>
        </div>
    );
}

export default InnerBookInfo;