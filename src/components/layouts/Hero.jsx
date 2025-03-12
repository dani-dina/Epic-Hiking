import { hero } from "../../constants";
import Button from "../widgets/Button";
import Empty from "../../assets/icons/Empty";
import Jumbotron from "../widgets/Jumbotron";

const Hero = () => {
    return (
        <div className="relative w-full h-[90vh] flex flex-col items-center">
            <div className="w-full h-full lg:h-[85vh] flex flex-col justify-around items-center lg:flex-row lg:justify-center">
                
                <div className="lg:hidden w-[90%] h-[40%] rounded-lg bg-[url('/banner-sm.jpg')] bg-cover bg-center">
                </div>

                <div className="w-[90%] h-[45%] lg:h-[85%] rounded-md lg:bg-[url('/banner-lg.jpg')] bg-cover bg-center flex">
                    
                    <div className="w-[100%] lg:w-[50%] h-[100%] lg:h-[90%] flex items-center justify-center">
                        <div className="w-[100%] lg:w-[85%] h-[100%] lg:h-[60%] flex flex-col justify-around">
                            <h1 className="text-5xl lg:text-6xl font-extrabold lg:font-bold text-[rgba(44,9,220,0.8)]">
                                {hero[0]}
                            </h1>
                            <p className="text-[20px] lg:text-[15px]">
                                {hero[1]}
                            </p>
                            <Button
                                title={hero[2]}
                                className="w-[40%] h-[15%] lg:w-[7em] lg:h-[2.5em] border border-green-900 rounded-sm bg-[rgb(44,9,220)] text-white lg:text-black lg:bg-transparent"
                                Child={Empty}
                            />
                        </div>
                    </div>

                    <div className="w-[1%] lg:w-[50%] h-[100%]">
                    </div>

                </div>
            </div>

            <div className="hidden lg:flex absolute bottom-5 w-[80%] h-[10em] rounded-md shadow-lg bg-white backdrop-blur-lg p-4">
                <Jumbotron />
            </div>
        </div>
    );
};

export default Hero;
