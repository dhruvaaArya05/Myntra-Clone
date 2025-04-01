import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { myntraBag, myntraWishlist } from "../store";

const MenActivewearItem = ({ item }) => {
  const bagItemIds = useSelector((store) => store.myntraBag);
  const wishlistItemIds = useSelector((store) => store.myntraWishlist);

  const elementFound = bagItemIds.indexOf(item.id);
  const wishlistElement = wishlistItemIds.indexOf(item.id);

  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    console.log(wishlistElement);
    dispatch(myntraWishlist.addToWishlist(item.id));
  }

  const handleRemoveFromWishist = () => {
    dispatch(myntraWishlist.removefromWishlist(item.id));
  }

  const handleAddToBag = () => {
    dispatch(myntraBag.addToBag(item.id));
  }

  const handleRemoveFromBag = () => {
    dispatch(myntraBag.removefromBag(item.id));
  }

  return <div className="item-boundary">
    <img className="item-image" src={item.image} alt={item.item_name} />
    <div className="rating">{item.rating.stars}⭐ | {item.rating.noOfReviews}</div>
    <div className="company_name">{item.company}</div>
    <div className="product_name">{item.item_name}</div>
    <div className="price">
      <div><span className="current_price">Rs.{item.current_price}</span> <span className="original_price">Rs.{item.original_price}</span>
        <span
          className="discount_percentage">({item.discount_percentage}% OFF)</span></div>

      {wishlistElement >= 0 ? <button className="btn-wishlist-bag" onClick={handleRemoveFromWishist}>Unwishlist</button> : <button className="btn-wishlist-bag" onClick={handleAddToWishlist}><CiHeart className="action-logo" /> Wishlist</button>}

      {elementFound >= 0 ? <button className="btn-remove-bag" onClick={handleRemoveFromBag}>Remove</button> : <button className="btn-add-bag" onClick={handleAddToBag}>Add to Bag</button>}
    </div>
  </div>
}

export default MenActivewearItem;