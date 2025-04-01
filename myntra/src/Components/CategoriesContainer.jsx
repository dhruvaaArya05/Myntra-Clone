import Category from "./Category";
import { categoryImage } from "../data/categoryImages";

const CategoriesContainer = () => {

  return <div className="category-image-container">
    {categoryImage.map((image) => <Category key={image.id} image={image}></Category>)}
  </div>
}

export default CategoriesContainer;