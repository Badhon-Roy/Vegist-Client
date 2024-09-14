import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import JuiceAndCoffee from "./JuiceAndCoffee";

const CherryJuices = () => {

    const { data: cherryJuices } = useQuery({
        queryKey: "Cherry Juice",
        queryFn: async () => {
            const res = await axios.get(`https://vegist-server-one.vercel.app/categories/Cherry Juice`)
            return res.data;
        }
    })



    return (
        <div className="max-w-[1600px] mx-auto">
            <div className="w-full lg:h-[600px]  md:h-[400px] object-cover flex flex-col justify-center lg:px-44 md:px-32 p-10 text-white" style={{
                backgroundImage: "url('https://prestashop.coderplace.com/PRS03/PRS03061/demo/modules/cp_cmsbanner3/views/img/cms-banner1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <p className="md:text-xl">50% Off</p>
                <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold my-3"> Organic <br /> Cherry Juice
                </h2>
                <p>The Real Taste And Boost Your Day With The Power</p>
            </div>

            <div className="px-4 my-16 max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {
                    cherryJuices?.map(cherryJuice => <JuiceAndCoffee key={cherryJuice?._id} product={cherryJuice}></JuiceAndCoffee>)
                }
            </div>
        </div>
    );
};

export default CherryJuices;