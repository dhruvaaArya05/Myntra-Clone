import { useSelector } from "react-redux";
import BagItems from "./BagItems";

const Wishlist = () => {
  const womenActivewear = useSelector((state) => state.womenActivewear);
  const watches = useSelector((state) => state.watches);
  const menActivewear = useSelector((state) => state.menActivewear);
  const wishlistItems = useSelector((state) => state.myntraWishlist);

  const allItems = [...womenActivewear, ...watches, ...menActivewear];
  const finalItems = allItems.filter(item => {
    const itemIndex = wishlistItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return <div className="wishlist-container">
    {finalItems.map(item => <BagItems key={item.id} item={item}></BagItems>)}
  </div>

}

export default Wishlist;