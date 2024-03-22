import "../../CSS/book-page/bookInfo.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams} from "react-router-dom";
import InnerBookInfo from "./InnerBookInfo";
import InnerBookImage from "./InnerBookImage";

function BookInfo({openModal}) {
    const {id} = useParams();

    const [book, setBook] = useState([]);
    const [bookImage, setBookImage] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`);
            setBook(response.data);
            setBookImage(response.data.imageLink);
            setLoading(false);
        }

        fetchData();
    }, [id])

    return (
        <div className="row">
            <div className="container">
                <div className="inner_wrapper">

                    <InnerBookInfo book={book} openModal={openModal} loading={loading}/>
                    <InnerBookImage bookImg={bookImage} loading={loading}/>
                    
                </div>
            </div>
        </div>
    );
}

export default BookInfo;