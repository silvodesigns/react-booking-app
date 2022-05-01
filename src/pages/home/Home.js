import Header from "../../components/header/Header";
import HomeContainer from "../../components/homeContainer/HomeContainer";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HomeContainer />
    </div>
  );
};

export default Home;
