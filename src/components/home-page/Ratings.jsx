import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { BiCrown } from 'react-icons/bi';
import { RiLeafLine } from 'react-icons/ri';

function Ratings() {
    return (
        <section id="numbers">
            <div className="container">
                <div className="row">
                <div className="section__title">Start growing with Summarist now</div>
                <div className="numbers__wrapper">
                    <div className="numbers" data-aos="fade-left" data-aos-duration="1000">
                    <div className="numbers__icon">
                        <BiCrown />
                    </div>
                    <div className="numbers__title">3 Million</div>
                    <div className="numbers__sub--title">Downloads on all platforms</div>
                    </div>

                    <div className="numbers" data-aos="fade-left" data-aos-duration="1200">
                    <div className="numbers__icon numbers__star--icon">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                    </div>
                    <div className="numbers__title">4.5 Stars</div>
                    <div className="numbers__sub--title">
                        Average ratings on iOS and Google Play
                    </div>
                    </div>

                    <div className="numbers" data-aos="fade-left" data-aos-duration="1400">
                    <div className="numbers__icon">
                        <RiLeafLine />
                    </div>
                    <div className="numbers__title">97%</div>
                    <div className="numbers__sub--title">
                        Of Summarist members create a better reading habit
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Ratings;