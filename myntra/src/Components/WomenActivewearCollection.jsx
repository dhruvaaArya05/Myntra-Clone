import WomenActivewearItem from "./WomenActivewearItem";
// import { womenActivewearItems } from "../data/womenActivewearItems";
import { useSelector } from "react-redux";

const WomenActivewearCollection = () => {

  const womenActivewearItems = useSelector((store) => store.womenActivewear);

  return <div className="category-item-container">
    {womenActivewearItems.map((item) => <WomenActivewearItem key={item.id} item={item}></WomenActivewearItem>)}
  </div>
}

export default WomenActivewearCollection;