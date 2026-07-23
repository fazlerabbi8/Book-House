import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../utility/add";
import Book from "../components/Book/Book";
const Listed = () => {
    const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList();

       const storedReadListInt = storedReadList.map(id =>parseInt(id));

       const readList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

       // eslint-disable-next-line react-hooks/set-state-in-effect
       setReadList(readList);

    },[])
  return (
    <div>
      <h3 className="text-3xl font-bold text-center">Listed Books</h3>

      <div className="mt-5">
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl font-bold mb-10">Book I Read: {readList.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                {
                    readList.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
          </TabPanel>
          <TabPanel>
            <h2>My Wish List</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Listed;
