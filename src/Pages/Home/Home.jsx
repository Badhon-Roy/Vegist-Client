import Banner from "../../Components/Banner";
import FoodStoreBanner from "../../Components/FoodStoreBanner";
import QualityBanner from "../../Components/QualityBanner";
import AllCategories from "./AllCategories";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllCategories></AllCategories>
            <br />
            <QualityBanner></QualityBanner>
            <br />
            <FoodStoreBanner></FoodStoreBanner>
        </div>
    );
};

export default Home;