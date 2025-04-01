import BagItems from "./BagItems";
import BagSummary from "./BagSummary";
import { useSelector } from 'react-redux';

const Bag = () => {
  const womenActivewear = useSelector((state) => state.womenActivewear);
  const watches = useSelector((state) => state.watches);
  const menActivewear = useSelector((state) => state.menActivewear);
  const bagItems = useSelector((state) => state.myntraBag);

  const allItems = [...womenActivewear, ...watches, ...menActivewear];
  const finalItems = allItems.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  const CONVINENCE_FEES = 99;
  let length = finalItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  for (let i = 0; i < length; i++) {
    totalMRP += Number(finalItems[i].original_price);
    totalDiscount += Math.floor(Number(finalItems[i].original_price) * Number(finalItems[i].discount_percentage) * 0.01);
  }

  let totalAmount = totalMRP - totalDiscount + CONVINENCE_FEES;

  const bagSummary = {
    items: finalItems.length,
    totalMRP: totalMRP,
    totalDiscount: totalDiscount,
    totalAmount: totalAmount,
  }

  return <div className="bag-container">
    <div style={{ width: '50%' }}>
      {finalItems.map(item => <BagItems key={item.id} item={item}></BagItems>)}
    </div>
    <BagSummary bagSummary={bagSummary}></BagSummary>
  </div>
}

export default Bag;