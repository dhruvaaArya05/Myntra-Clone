import Carousel from "./Carousel";

const DealsBanner = () => {
  return <>
    <div className="crazy-deal-banner">
      <img src="images/crazy-deals-banner.webp" alt="crazy-deals" />
    </div>
    <Carousel></Carousel>
    <div className="category-banner">
      <img src="images/category-images/category-banner.webp" alt="category-deals" />
    </div>
  </>
}

export default DealsBanner;