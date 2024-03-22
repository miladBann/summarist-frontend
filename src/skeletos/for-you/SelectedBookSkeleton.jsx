import { useState, useEffect } from "react";

function SelectedBookSkeleton() {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

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
        <div>
            <div className="selectedBook_container">
                {isWideScreen && <div className="selectedBook_subTitle skeleton_box"></div>}

                <div className="selectedbook_divider"></div>

                <div className="selectedbook_display">
                    <div className="selectedbook_img skeleton"></div>

                    <div className="selectedbook_info">
                            <div className="selectedbook_book_name skeleton_text"></div>
                            <div className="selectedbook_author_name skeleton_text"></div>
                            <div className="time_duration skeleton_text"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedBookSkeleton;