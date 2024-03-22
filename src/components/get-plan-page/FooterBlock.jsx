

function FooterBlock({title, link1, link2, link3, link4}) {
    return (
        <div className="footer_section">
            <div className="footer_section_title"><b>{title}</b></div>
            <div className="footer_section_content">{link1}</div>
            <div className="footer_section_content">{link2}</div>
            <div className="footer_section_content">{link3}</div>
            <div className="footer_section_content">{link4}</div>
        </div>
    );
}

export default FooterBlock;