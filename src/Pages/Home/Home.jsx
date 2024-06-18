import Banner from "../../Components/Banner";
import FoodStoreBanner from "../../Components/FoodStoreBanner";
import QualityBanner from "../../Components/QualityBanner";
import AllCategories from "./AllCategories";
import NewProducts from "./NewProducts";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllCategories></AllCategories>
            <QualityBanner></QualityBanner>
            <NewProducts></NewProducts>
            <FoodStoreBanner></FoodStoreBanner>
        </div>
    );
};

export default Home;