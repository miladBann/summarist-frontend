import "../../CSS/for-you/recommendedBooks.css";
import React, {useState, useEffect} from "react";
import BookCard from "./BookCard";
import axios from "axios";
import BookCardSkeleton from "../../skeletos/for-you/BookCardSkeleton";

function RecommendedBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended");
            setBooks(response.data);
            setLoading(false);
        }
        
        fetchData();
    }, [])

    return (
        <div className="row">
            <p className="recommendedbooks_title">Recommended For You</p>
            <p className="recommendedbooks_subtitle">We think you’ll like these</p>
            
            <div className="recommendedbooks_container">
                {
                    loading ? <>
                        {   
                            Array(5).fill(0).map((_, index) => {
                                return <BookCardSkeleton key={index}/>
                            })
                        }
                    </> : <>
                        {
                            books.map((book, index) => {
                                return <BookCard key={index} book={book}/>
                            })
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default RecommendedBooks;