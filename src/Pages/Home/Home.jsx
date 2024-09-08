
import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner";
import FoodStoreBanner from "../../Components/FoodStoreBanner";
import QualityBanner from "../../Components/QualityBanner";
import AllCategories from "./AllCategories";
import NewProducts from "./NewProducts";
import OrganicProducts from "./OrganicProducts";
import { Link } from "react-router-dom";



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
            <div className="max-w-[1600px] mx-auto my-16 p-4 md:flex justify-between gap-10">
                <Link to='/cheeryJuices' className="md:w-2/5">
                    <div className=" md:h-[300px] p-4 object-cover flex flex-col justify-center px-10 text-white rounded-lg"  style={{
                        backgroundImage: "url('https://prestashop.coderplace.com/PRS03/PRS03061/demo/modules/cp_cmsbanner3/views/img/cms-banner1.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <p className="text-xl">50% Off</p>
                        <h2 className="md:text-3xl text-2xl font-bold my-3"> Organic <br /> Cherry Juice
                        </h2>
                       <a href="" className="underline">shop now</a>
                    </div>
                </Link>
                <Link to='/coffees' className="md:w-3/5">
                    <div className="md:h-[300px] md:mt-0 mt-8 object-cover flex flex-col justify-center px-10 text-white rounded-lg p-4"  style={{
                        backgroundImage: "url('https://prestashop.coderplace.com/PRS03/PRS03061/demo/modules/cp_cmsbanner3/views/img/cms-banner2.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <p className="text-xl">50% Off</p>
                        <h2 className="md:text-3xl text-2xl font-bold my-3"> Organic <br /> Cherry Juice
                        </h2>
                       <a href="" className="underline">shop now</a>
                    </div>
                </Link>
            </div>
            <FoodStoreBanner></FoodStoreBanner>
            <NewProducts></NewProducts>
        </div>
    );
};

export default Home;