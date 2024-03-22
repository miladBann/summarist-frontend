import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import React, {useState} from "react";

function FAQCard({title, content}) {

    const [opened, setOpened] = useState(false);

    const toggleOpen = () => {
        setOpened(!opened);
    }

    return (
        <div className="faq_accordion_card" onClick={toggleOpen}>
            <div className="accordion_header">
                <div className="accordion_title">{title}</div>
                {
                    opened ? <BsChevronUp className="accordion_icon"/> : <BsChevronDown className="accordion_icon"/>
                }              
            </div>

            <div className={`collapse ${opened ? "show": ""}`}>
                <div className="collapes_text">
                    {content}
                </div>
            </div>

        </div>
    );
}

export default FAQCard;