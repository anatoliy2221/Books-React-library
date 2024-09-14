import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../../redux/books/selectors";
import css from "./BooksAllCategories.module.css";
import { fetchBooksInCategory } from "../../redux/booksInCategory/operations";
import { Link, useParams } from "react-router-dom";

const BooksAllCategories = () => {
  const listBooks = useSelector(selectBooks);
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  // const handleOnCategory = (category) => {
  //   console.log(category);
  //   dispatch(fetchBooksInCategory(category));
  // };

  const handleOnCategory = (categoryId) => {
    console.log(categoryId);
    dispatch(fetchBooksInCategory(categoryId));
  };

  console.log(categoryId);

  return (
    <div>
      <ul>
        {listBooks.map(({ list_name, books, index }) => (
          <li key={index}>
            <h2>{list_name}</h2>
            <ul className={css.list}>
              {books.map(({ _id, book_image, title, author }) => (
                <li key={_id}>
                  {
                    <>
                      <img src={book_image} width={200} height={275} />
                      <div className={css.wrapper}>
                        <h4>{title}</h4>
                        <p>{author}</p>
                      </div>
                    </>
                  }
                </li>
              ))}
            </ul>
            <Link to={`/books/${list_name}`} >
              <button
                type="button"
                onClick={handleOnCategory}
              >
                See More
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksAllCategories;


// <button
//                 type="button"
//                 onClick={() => handleOnCategory(list_name)}
//                 data-select={list_name}
//               >
//                 See More
//               </button>