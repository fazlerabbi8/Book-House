import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookName,
    bookId,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
  } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-6">
        <figure>
          <img className="w-80 h-80 rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-10">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-outline btn-accent">{tag}</button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="text-gray-500 font-bold">By: {author}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
