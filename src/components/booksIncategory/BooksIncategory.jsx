
import { useSelector } from "react-redux";
import { selectBooksInCategory } from "../../redux/booksInCategory/selectors";

const BooksIncategory = () => {
  const listBooks = useSelector(selectBooksInCategory);

  return (
    <ul>
      {listBooks.map(({ list_name, books, index }) => (
        <li key={index}>
          <h2>{list_name}</h2>
          <ul >
            {books.map(({ _id, book_image, title, author }) => (
              <li key={_id}>
                {
                  <>
                    <img src={book_image} width={200} height={275} />
                    <div >
                      <h4>{title}</h4>
                      <p>{author}</p>
                    </div>
                  </>
                }
              </li>
            ))}
          </ul>

        </li>
      ))}
    </ul>

  );
};

export default BooksIncategory;
