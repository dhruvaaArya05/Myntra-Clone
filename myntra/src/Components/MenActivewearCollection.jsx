import MenActivewearItem from "./MenActivewearItem";
import { useSelector } from "react-redux";

const MenActivewearCollection = () => {

  const menActivewearItems = useSelector((store) => store.menActivewear);

  return <div className="category-item-container">
    {menActivewearItems.map((item) => <MenActivewearItem key={item.id} item={item}></MenActivewearItem>)}
  </div>
}

export default MenActivewearCollection;