import { useDispatch, useSelector } from "react-redux";
import { selectCategoryList } from "../../redux/categories/selectors";
import css from "./CategoryList.module.css";
import { Link, useParams } from "react-router-dom";
import { fetchBooksInCategory } from "../../redux/booksInCategory/operations";

const CategoryList = () => {
  const list = useSelector(selectCategoryList);
  const dispatch = useDispatch();
  const {categoryId} = useParams();
  console.log(categoryId);
 
const handleClick = () => {
  console.log(categoryId);
  dispatch(fetchBooksInCategory(categoryId));
}


  return (
    <ul className={css.list}>
      {list.map((item, index) => {
        return <li key={index}><Link to={`/books/${item.list_name}`} onClick={handleClick}>{item.list_name}</Link></li>;
      })}
    </ul>
  );
};

export default CategoryList;
