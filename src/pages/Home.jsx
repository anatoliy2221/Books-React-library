import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BooksAllCategories from "../components/booksAllCategories/BooksAllCategories";
import CategoryList from "../components/categoryList/CategoryList";
import { fetchTopBooks } from '../redux/books/operations';
import { fetchCategoryList } from '../redux/categories/operations';
import Header from '../components/header/Header';
import css from './home.module.css';


const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTopBooks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch])


  return (
    <div className={css.container}>
      <Header />
      <h1>Best Sellers Books</h1>
      <div className={css.content}>
        <CategoryList className={css.categoryList} />
        <BooksAllCategories className={css.booksAllCategories} />
      </div>
    </div>
  )
}

export default Home;