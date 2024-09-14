import { useEffect } from "react";
import BooksIncategory from "../components/booksIncategory/BooksIncategory";
import CategoryList from "../components/categoryList/CategoryList";
import { useDispatch } from "react-redux";
import { fetchBooksInCategory } from "../redux/booksInCategory/operations";

const SelectCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksInCategory());
  }, [dispatch])

  return (
    <div>
      <CategoryList />
      <BooksIncategory />
    </div>
  );
};

export default SelectCategory;
