import { FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"
import { ImFacebook2 } from "react-icons/im"

const Footer = () => {
  return <footer>
    <div className="footer_container">
      <div className="footer_column">
        <h3>Online Shopping</h3>
        <br />
        <div className="footer_links">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Cards</a>
          <a href="#">Myntra Insider</a>
        </div>
      </div>

      <div className="footer_column">
        <h3>Customer Policies</h3>
        <br />
        <div className="footer_links">
          <a href="#">Contact US</a>
          <a href="#">FAQ</a>
          <a href="#">T&C</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Track Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policies</a>
        </div>
      </div>

      <div className="footer_column">
        <h3>Useful Links</h3>
        <br />
        <div className="footer_links">
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Site Pag</a>
          <a href="#">Corporate Information</a>
          <a href="#">Whitehat</a>
          <a href="#">Cleartrip</a>
        </div>
      </div>

      <div className="footer_column">
        <h3>Keep in touch</h3>
        <br />
        <div className="footer_icons">
          <FaInstagramSquare className="icons" />

          <FaYoutube className="icons" />

          <FaSquareXTwitter className="icons" />

          <ImFacebook2 className="icons" />

        </div>
      </div>
    </div>

    <div className="search_container">
      <h3>Popular Searches</h3>
      <p>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies
        | Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack
        |Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes |
        Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree |
        Watches | Dresses | Lehenga | Nike Shoes | Goggles Bras Suit | Chinos Shoes Adidas Shoes | Woodland Shoes |
        Jewellery | Designers Sarees</p>
    </div>
    <br />
    <div className="copyright_info">
      <div className="contact_us">In case of concern,<a href="#"> Contact Us</a></div>
      <div className="rights">@2024 www.myntra.com. All rights reserved</div>
      <div className="aguire_info">A Flipkart Company</div>
    </div>
  </footer>
}

export default Footer;