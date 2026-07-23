import { useLoaderData, useParams } from "react-router";
import { addToStoredList, addToWishList } from "../../utility/add";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();

  const id = parseInt(bookId);
  const book = data.find((book) => (book.bookId === id));

  const handleMarkAsRead = (id) =>{
    addToStoredList(id)
    toast.success("Book added successfully.")
  }
  const handleWishList = (id) =>{
    addToWishList(id)
    toast.success("Book added in wish list successfully.")
  }


  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
    tags,
  } = book;
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img className="w-96 rounded-2xl" src={image} />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-6">By: {author}</p>
          <h1 className=" mt-3 font-semibold text-gray-600">{category}</h1>

          <hr className="border border-gray-400 mt-2" />

          <p className="py-6">
            <span className="font-bold">Review :</span> {review}
          </p>

          <div className="flex gap-10 items-center">
            <p className="font-semibold">Tag </p>
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-default text-green-500">
                #{tag}
              </button>
            ))}
          </div>

          <hr className="border border-gray-400 mt-2 mb-5" />

          <div className="grid grid-cols-[180px_auto] gap-y-2 mb-5">
            <h3 className="text-gray-600">Number of pages:</h3>
            <p className="font-bold">{totalPages}</p>

            <h3 className="text-gray-600">Publisher:</h3>
            <p className="font-bold">{publisher}</p>

            <h3 className="text-gray-600">Year of publishing:</h3>
            <p className="font-bold">{yearOfPublishing}</p>

            <h3 className="text-gray-600">Rating:</h3>
            <p className="font-bold">{rating}</p>
          </div>

          <div className="flex gap-6">
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-dash btn-accent">Mark as Read</button>
            <button onClick={() => handleWishList(bookId)} className="btn btn-dash btn-accent">Add  to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
