
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
            <div className="max-w-[1600px] mx-auto my-16 p-4 flex justify-between gap-10">
                <Link to='/cheeryJuices' className="w-2/5">
                    <div className=" h-[300px] object-cover flex flex-col justify-center px-10 text-white rounded-lg"  style={{
                        backgroundImage: "url('https://prestashop.coderplace.com/PRS03/PRS03061/demo/modules/cp_cmsbanner3/views/img/cms-banner1.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <p className="text-xl">50% Off</p>
                        <h2 className="text-3xl font-bold my-3"> Organic <br /> Cherry Juice
                        </h2>
                       <a href="" className="underline">shop now</a>
                    </div>
                </Link>
                <Link to='/coffees' className="w-3/5">
                    <div className=" h-[300px] object-cover flex flex-col justify-center px-10 text-white rounded-lg"  style={{
                        backgroundImage: "url('https://prestashop.coderplace.com/PRS03/PRS03061/demo/modules/cp_cmsbanner3/views/img/cms-banner2.jpg')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <p className="text-xl">50% Off</p>
                        <h2 className="text-3xl font-bold my-3"> Organic <br /> Cherry Juice
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