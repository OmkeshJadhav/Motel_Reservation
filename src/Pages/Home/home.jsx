import "./home.css"
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import FeaturedCities from '../../Components/FeaturedCities/FeaturedCities';
import PropertyList from "../../Components/PropertyList/PropertyList";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <FeaturedCities/>
        <PropertyList/>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home;