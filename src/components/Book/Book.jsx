const Book = ({ book }) => {
    const {bookName,author,image,review,totalPages,rating,category,tags} = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img className="w-80 h-80 rounded-lg"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
