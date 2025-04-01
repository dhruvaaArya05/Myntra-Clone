import AppBanner from "./AppBanner";
import CategoriesContainer from "./CategoriesContainer";
import DealsBanner from "./DealsBanner";

const BannerContainer = () => {
  return <>
    <DealsBanner></DealsBanner>
    <CategoriesContainer></CategoriesContainer>
    <AppBanner></AppBanner>
  </>
}

export default BannerContainer;