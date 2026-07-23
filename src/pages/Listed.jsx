import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getWishList } from "../utility/add";
import Book from "../components/Book/Book";
const Listed = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState('');

  const handleSort = (sortType) =>{
    setSort(sortType);

    if(sortType === 'No of pages'){
      const sortedReadList = [...readList].sort((a,b) =>a.totalPages - b.totalPages);
      setReadList(sortedReadList);
    }

    if(sortType === 'Ratings'){
      const sortedWishList = [...wishList].sort((a,b) => a.rating -b.rating)
      setWishList(sortedWishList);
    }
  }

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();

    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId),
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReadList(readList);
  }, []);

  useEffect(() => {
    const storedWishList = getWishList();

    const wishListInt = storedWishList.map((id) => parseInt(id));

    const wishList = allBooks.filter((book) =>
      wishListInt.includes(book.bookId),
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWishList(wishList);
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold text-center">Listed Books</h3>

      <div className="text-center">
        <div className="dropdown">
          <div>
            <div tabIndex={0}       role="button" className="btn btn-accent m-1 mt-5">
              Sort By
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSort("Ratings")}>
              <a className="text-gray-600">Rating</a>
            </li>
            <li onClick={() => handleSort("No of pages")}>
              <a className="text-gray-600">Number of pages</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl font-bold mb-10">
              Book I Read: {readList.length}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {readList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-2xl font-bold mb-10">
              My Wish List: {wishList.length}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {wishList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Listed;
