import { IoPersonSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagCheck } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

  const bag = useSelector((store) => store.myntraBag);
  const wishlistItems = useSelector((store) => store.myntraWishlist);

  return <header className="p-3 text-bg-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-space-between">
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img className="logo" src="images/myntraLogo.png" alt="myntra-logo" />
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0 nav-bar" style={{ justifyContent: "space-around" }}>
          <li><Link to="/men-activewear" className="nav-link px-2 text-black">Men</Link></li>
          <li><Link to="/women-activewear" className="nav-link px-2 text-black">Women</Link></li>
          <li><a href="#" className="nav-link px-2 text-black">Kids</a></li>
          <li><a href="#" className="nav-link px-2 text-black">Home & Living</a></li>
          <li><a href="#" className="nav-link px-2 text-black">Beauty</a></li>
          <li><a href="#" className="nav-link px-2 text-black">Studio</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search-input" role="search">
          <input type="search" className="form-control form-control-dark text-bg-white" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="action_bar">
          <div className="action_container">
            <IoPersonSharp className="action-logo" />
            <span><a className="action_name" href="#">Profile</a></span>
          </div>

          <div className="action_container position-relative">
            <CiHeart className="action-logo" />
            <span>
              <Link className="action_name" to="/wishlist">Wishlist</Link>
            </span>
            {wishlistItems.length !== 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {wishlistItems.length}
            </span>}
          </div>

          {/* <div className="action_container">
            <CiHeart className="action-logo" />
            <span><Link className="action_name" to="/wishlist">Wishlist</Link></span>
            {wishlistItems.length !== 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {wishlistItems.length}
            </span>}
          </div> */}

          <div className="action_container position-relative">
            <IoBagCheck className="action-logo" />
            <span>
              <Link className="action_name" to="/bag">Bag</Link>
            </span>
            {bag.length !== 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {bag.length}
            </span>}
          </div>

        </div>
      </div>
    </div>
  </header>
}

export default Header;

{/* <div className="action_container">
            <IoBagCheck className="action-logo" />
            <span><a className="action_name" href="#">Bag
            </a></span>
          </div>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+

          </span> */}