import { IoBookmarkOutline} from "react-icons/io5";
import { useSelector } from "react-redux";
import axios from "axios";
import React, {useState, useEffect} from "react";

function AddToLibrary({book, openModal}) {
    const [savedBook, setSavedBook] = useState(false);

    const loggedIn = useSelector(state => { return state.loggedIn.loggedIn });
    const userEmail = useSelector(state => { return state.email.email});
    const userId = useSelector(state => { return state.userID.userID });

    const saveBookBtn = async () => {
        if (!loggedIn) {
            openModal();
        }else {
            if (!savedBook) {
                const data = {
                    email: userEmail,
                    bookId: book.id
                }
                
                axios.post(`${process.env.REACT_APP_BE_HOST}/add-to-library`, data)
                .then(response => {
                    console.log("book saved: ", response.data);
                    setSavedBook(true);
                })
                .catch(error => {console.log("error saving book: ", error)})
            }
        }
    }

    useEffect(() => {
        const checkSavedBook = async () => {
            const data = {
                userId: userId,
                bookId: book.id
            }

            axios.post(`${process.env.REACT_APP_BE_HOST}/check-book-saved`, data)
            .then(response => {
                if (response.data.checkBook[0].association_exists === 1) {
                    setSavedBook(true);
                }
            })
            .catch(error => console.log(error))
        }

        checkSavedBook();
        
    }, [userId, book.id, savedBook])


    return (
        <>
            <div className="inner_wrapper_bookmark" onClick={saveBookBtn}><IoBookmarkOutline className="icon_styles" />
                {savedBook ? "Book Saved!" : "Add title to My Library"}
            </div>
        </>
    );
}

export default AddToLibrary;