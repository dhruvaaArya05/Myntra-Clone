import { useSelector } from "react-redux";
import WatchesItem from "./WatchesItem";

const WatchesCollection = () => {

  // const item = {
  //   id: '041',
  //   image: 'images/watches-images/watches-1.webp',
  //   company: 'JOKER & WITCH',
  //   item_name: 'Gatsby & Daisy Couple Watches',
  //   original_price: '15999',
  //   current_price: '3039',
  //   discount_percentage: '81',
  //   rating: {
  //     stars: '0',
  //     noOfReviews: '0',
  //   }
  // }

  const watches = useSelector((state) => state.watches);

  return <div className="category-item-container">
    {watches.map((item) => <WatchesItem key={item.id} item={item}></WatchesItem>)}
  </div>
}

export default WatchesCollection;