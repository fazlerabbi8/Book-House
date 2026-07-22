import BannerImage from "../../assets/books.jpg"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="rounded-lg"
          src={BannerImage}
        />
        <div>
          <h1 className="text-5xl font-bold mb-5">Books to freshen up your bookshelf</h1>
          
          <button className="btn btn-primary">View The Listed</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
