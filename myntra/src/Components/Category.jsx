import { Link } from "react-router-dom";

const Category = ({ image }) => {

  return <Link to={image.name} className="category-image"><img src={image.image} alt={image.name} /></Link>
}

export default Category;