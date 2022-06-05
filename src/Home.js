import bannerImg from "../images/dogsRunning.jpg";
const Home = () => {
  return (
    <div className="home-container">
      <img
        className="banner-image"
        src={bannerImg}
        alt="two brown and white dogs running on dirt road"
      />
      <h1>Home Section</h1>
    </div>
  );
};

export default Home;
