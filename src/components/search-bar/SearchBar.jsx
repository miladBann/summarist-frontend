import "../../CSS/search-bar/searchBar.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchCard from "./SearchCard";
import SideNav from "../side-nav/SideNav";
//icons
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";


function SearchBar({openModal}) {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);
    const [inputValue, setInputValue] = useState("");
    const [serachResults, setSearchResults] = useState([]);
    const [openSideNav, setOpenSideNav] = useState(false);

    const clearInput = () => {
        setInputValue("");
        const inputField = document.querySelector(".search_input_wrapper input");
        if (inputField) {
            inputField.value = "";
        }
    }

    useEffect(() => {
        if (inputValue) {
            const timer = setTimeout(async () => {
                const response = await axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${inputValue}`);
                setSearchResults(response.data);
            }, 300);
    
            // Cleanup function to clear the timer if user continues typing
            return () => clearTimeout(timer);
        }
        
    }, [inputValue]);

    const toggleSideNav = () => {
        setOpenSideNav(!openSideNav);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="search_background">
            <div className="search_wrapper">
                <figure><img src="" alt="" /></figure>

                <div className="search_content">
                    <div className="search">
                        <div className="search_input_wrapper">
                            <input type="text" placeholder="Search for books" onChange={(e) => setInputValue(e.target.value)}/>
                            <div className="search_icon">{inputValue ? <IoMdClose onClick={clearInput}/> : <AiOutlineSearch/>}</div>
                        </div>
                    </div>
                    {!isWideScreen ?  openSideNav ? <MdClose className="menu_icon" onClick={toggleSideNav}/> : <FiMenu className="menu_icon" onClick={toggleSideNav}/> : null}
                </div>

                {openSideNav && <SideNav openModal={openModal} />}

                {
                    inputValue ? 
                    <>
                        <div className="search_content_books">
                            {
                                serachResults ? 
                                    serachResults.map((book, index) => {
                                        return <SearchCard book={book} close={clearInput} key={index}/>
                                    })
                                : null
                            }  
                        </div>
                    </>: 
                    null
                }
                
            </div>
        </div>
    );
}

export default SearchBar;