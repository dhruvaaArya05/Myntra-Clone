import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {

  // const [categoryItems, setCategoryItems] = useState('bannerImages');

  // const handleSetCategoryItems = (categoryName) => {
  //   // console.log(categoryName);
  //   setCategoryItems(categoryName);
  // }

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;

{/* {categoryItems === 'bannerImages' && <>
        <BannerContainer></BannerContainer>
        <CategoriesContainer handleSetCategoryItems={handleSetCategoryItems}></CategoriesContainer>
        <AppBanner></AppBanner>
      </>}
      {categoryItems === 'women activewear' && <WomenActivewearCollection></WomenActivewearCollection>}
      {categoryItems === 'watches' && <WatchesCollection></WatchesCollection>}
      <Bag handleBagButton={onBagButtonClicked}></Bag> */}