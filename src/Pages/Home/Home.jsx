
import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import FoodStoreBanner from "../../Components/FoodStoreBanner";
import QualityBanner from "../../Components/QualityBanner";
import AllCategories from "./AllCategories";
import NewProducts from "./NewProducts";
import OrganicProducts from "./OrganicProducts";



const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Vegist || Home</title>
            </Helmet>
            <Banner></Banner>
            <AllCategories></AllCategories>
            <OrganicProducts></OrganicProducts>
            <QualityBanner></QualityBanner>
            <NewProducts></NewProducts>
            <FoodStoreBanner></FoodStoreBanner>
        </div>
    );
};

export default Home;