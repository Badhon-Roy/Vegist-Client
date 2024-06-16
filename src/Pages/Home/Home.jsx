import Banner from "../../Components/Banner";
import FoodStoreBanner from "../../Components/FoodStoreBanner";
import QualityBanner from "../../Components/QualityBanner";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
            <QualityBanner></QualityBanner>
            <br />
            <FoodStoreBanner></FoodStoreBanner>
        </div>
    );
};

export default Home;