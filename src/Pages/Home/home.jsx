import "./home.css"
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import FeaturedCities from '../../Components/FeaturedCities/FeaturedCities';
import PropertyList from "../../Components/PropertyList/PropertyList";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <FeaturedCities/>
        <PropertyList/>
        <FeaturedProperties/>
      </div>
    </div>
  )
}

export default Home;