import pic from "../../assets/pricing-top.png";

function UpperHalf() {
    return (
        <div className="plan_upper_half" data-aos="fade-down" data-aos-duration="500">
            <div className="plan_upper_half_title">Get unlimited access to many amazing books to read</div>
            <div className="plan_upper_half_title_subtitle">Turn ordinary moments into amazing learning opportunities</div>

            <figure className="pricing_pic_cont">
                <img src={pic} alt="" />
            </figure>
        </div>
    );
}

export default UpperHalf;