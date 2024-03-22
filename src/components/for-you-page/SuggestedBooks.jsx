import React, {useState, useEffect} from "react";
import BookCard from "./BookCard";
import axios from "axios";
import BookCardSkeleton from "../../skeletos/for-you/BookCardSkeleton";

function SuggestedBooks() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await axios.get("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested");
            setBooks(response.data);
            setLoading(false);
        }
        
        fetchData();
    }, [])


    return (
        <div className="row">
            <p className="recommendedbooks_title">Suggested Books</p>
            <p className="recommendedbooks_subtitle">Browse those books</p>

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

export default SuggestedBooks;