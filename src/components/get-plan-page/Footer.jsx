import FooterBlock from "./FooterBlock";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row" data-aos="fade-up" data-aos-duration="500">

                    <div className="footer_top_wrapper">
                        <FooterBlock title="Actions" link1="Summarist Magazine" link2="Cancel Subscription" link3="Help" link4="Contact us"/>
                        <FooterBlock title="Useful Links" link1="Pricing" link2="Summarist Business" link3="Gift Cards" link4="Authors & Publishers"/>
                        <FooterBlock title="Company" link1="About" link2="Careers" link3="Partners" link4="Code of Conduct"/>
                        <FooterBlock title="Other" link1="Sitemap" link2="Legal Notice" link3="Terms of Service" link4="Privacy Policies"/>
                    </div>

                    <div className="footer_copyright">Copyright Milad Bannourah © {new Date().getFullYear()} Summarist.</div>

                </div>
            </div>
        </div>
    );
}

export default Footer;