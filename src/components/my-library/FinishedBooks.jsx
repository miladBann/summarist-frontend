import "../../CSS/my-library/savedBooks.css";
import "../../CSS/my-library/finishedBooks.css";
import React, {useState, useEffect} from "react";
import BookCard from "../for-you-page/BookCard";
import { useSelector } from "react-redux";
import axios from "axios";
import BookCardSkeleton from "../../skeletos/for-you/BookCardSkeleton";


function FinishedBooks() {
    const [books, setBooks] = useState([]);
    const [bookCount, setBookCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const userId = useSelector(state => { return state.userID.userID });

    useEffect(() => {
        const fetchData = async () => {
            const data = {
                user_id: userId,
            };

            try {
                setLoading(true);
                const response = await axios.post(`${process.env.REACT_APP_BE_HOST}/get-finished-books`, data);
                const userBooks = await response.data.books;
                setBookCount(userBooks.length);
                
                //fetching all the books at the same time with promise.all
                const fetchedBooks = await Promise.all(userBooks.map(async book => {
                    const bookResponse = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${book.book_id}`);
                    return bookResponse.data;
                }));

                setBooks(fetchedBooks);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchData();
    }, [userId]);

    return (
        <div className="row">
            <div className="container">
                <div className="saved_books_title">Finished</div>
                <div className="saved_books_count">{bookCount} items</div>

                {
                    bookCount ? <>
                        <div className="display_Saved_books">
                            {
                                loading ? <>
                                    {
                                        Array(bookCount).fill(0).map((_, index) => {
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
                    </> : <>
                        <div className="finished_books_cont">
                            <div className="finished_books_first">Done and dusted!</div>
                            <div className="finished_books_second">When you finish a book, you can find it here later.</div>
                        </div>
                    </>
                }

            </div>
        </div>
    );
}

export default FinishedBooks;