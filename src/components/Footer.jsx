import { NavLink } from "react-router-dom";
import { LocationSvg, EmailSvg } from "./Svgs";
let year = new Date().getFullYear();
let footerLinks = [
  {name: "Home", link: "/"},
  {name: "Marketplace", link: "/marketplace"},
  {name: "Auctions", link: "/auctions"},
  {name: "Drops", link: "/drops"},
];

let footerLinkTwo = [
  {name: "Blogs", link: "/"},
  {name: "Wallets", link: "/marketplace"},
  {name: "Rates", link: "/auctions"},
  {name: "Higher bids", link: "/drops"},
];

function Footer() {
  return <>
    <section className="footer-container">
      <div className="footer-wrapper">
        <h1 className="footer-link-one">ARTSY.</h1>
        <div className="footer-link-one">
          {footerLinks.map((link) => 
          <NavLink
          to={link.link}
          key={link.name}
          >
            {link.name}
          </NavLink>
          )}
        </div>
        <div className="footer-link-one">
          {footerLinkTwo.map((link) => 
            <NavLink
            to={link.link}
            key={link.name}
            >
              {link.name}
            </NavLink>
            )}
        </div>
        <div className="footer-contact-container">
          <div className="footer-contact-wrapper">
            <div className="footer-icon"> <EmailSvg/></div>
            <div className="footer-contact">artsystudios@gmail.com</div>
          </div>
          <div className="footer-contact-wrapper">
            <div className="footer-icon"> <LocationSvg/></div>
            <div className="footer-contact">Lagos, Nigeria.</div>
          </div>
        </div>
      </div>
      <p>Artsystudios © {year}. All Rights Reserved.</p>
      <p>Created by Emmanuel Kalu</p>
    </section>
  </>
}

export default Footer;