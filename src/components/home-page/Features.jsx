import { AiFillFileText, AiFillBulb, AiFillAudio } from 'react-icons/ai';
import React, {useState, useEffect} from 'react';
import "../../CSS/features.css";

function Features() {
    const sentences = ["Enhance your knowledge", "Achieve greater success", "Improve your health", "Develop better parenting skills", "Increase happiness", " Be the best version of yourself!"];
    const sentences2 = ["Expand your learning", "Accomplish your goals", "Strengthen your vitality", "Become a better caregiver", "Improve your mood", "Maximize your abilities"];
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [sentences.length]);

    return (
        <section id="features">
            <div className="container">
                <div className="row">
                <div className="section__title">Understand books in few minutes</div>
                    <div className="features__wrapper" data-aos="flip-down" data-aos-easing="linear" data-aos-duration="800">
                        <div className="features">
                        <div className="features__icon">
                            <AiFillFileText />
                        </div>
                        <div className="features__title">Read or listen</div>
                        <div className="features__sub--title">
                            Save time by getting the core ideas from the best books.
                        </div>
                        </div>
                        <div className="features">
                        <div className="features__icon">
                            <AiFillBulb />
                        </div>
                        <div className="features__title">Find your next read</div>
                        <div className="features__sub--title">
                            Explore book lists and personalized recommendations.
                        </div>
                        </div>
                        <div className="features">
                        <div className="features__icon">
                            <AiFillAudio />
                        </div>
                        <div className="features__title">Briefcasts</div>
                        <div className="features__sub--title">
                            Gain valuable insights from briefcasts
                        </div>
                        </div>
                    </div>

                    <div className="statistics__wrapper" data-aos="flip-left">
                        <div className="statistics__content--header">
                            {
                                sentences.map((sentence, index) => {
                                    return <div className={`statistics__heading ${index === currentSentenceIndex ? 'green-text' : ''}`} key={index} id={`sentence-${index}`}>{sentence}</div>
                                })
                            }
                        </div>
                        <div className="statistics__content--details">
                        <div className="statistics__data">
                            <div className="statistics__data--number">93%</div>
                            <div className="statistics__data--title">
                            of Summarist members <b>significantly increase</b> reading
                            frequency.
                            </div>
                        </div>
                        <div className="statistics__data">
                            <div className="statistics__data--number">96%</div>
                            <div className="statistics__data--title">
                            of Summarist members <b>establish better</b> habits.
                            </div>
                        </div>
                        <div className="statistics__data">
                            <div className="statistics__data--number">90%</div>
                            <div className="statistics__data--title">
                            have made <b>significant positive</b> change to their lives.
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="statistics__wrapper" data-aos="flip-right">
                        <div
                        className="statistics__content--details statistics__content--details-second"
                        >
                        <div className="statistics__data">
                            <div className="statistics__data--number">91%</div>
                            <div className="statistics__data--title">
                            of Summarist members <b>report feeling more productive</b>
                            after incorporating the service into their daily routine.
                            </div>
                        </div>
                        <div className="statistics__data">
                            <div className="statistics__data--number">94%</div>
                            <div className="statistics__data--title">
                            of Summarist members have <b>noticed an improvement</b> in
                            their overall comprehension and retention of information.
                            </div>
                        </div>
                        <div className="statistics__data">
                            <div className="statistics__data--number">88%</div>
                            <div className="statistics__data--title">
                            of Summarist members <b>feel more informed</b> about current
                            events and industry trends since using the platform.
                            </div>
                        </div>
                        </div>
                        <div
                        className="statistics__content--header statistics__content--header-second"
                        >
                            {
                                sentences2.map((sentence, index) => {
                                    return <div className={`statistics__heading ${index === currentSentenceIndex ? 'green-text' : ''}`} key={index} id={`sentence-${index}`}>{sentence}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;