import Liked from "../../assets/icons/Liked";
import Button from "./Button";
import { useState } from "react";

const Card = ({ image, title, price, btnText, id }) => {
    return (
        <div
            className="w-[90%] h-[30%] lg:w-[25%] lg:h-[110%] mt-[-2em] shadow-lg bg-white backdrop-blur-lg 
                       p-4 rounded-lg"
        >
            <div
                className="relative w-full h-[65%] bg-center bg-cover rounded-tl-2xl rounded-tr-2xl"
                style={{ backgroundImage: `url(${image})` }}
            >
                <h3 className="absolute top-5 left-5 text-white w-[70%] pl-[2em] mt-[2em] rounded-2xl font-bold">
                    {title}
                </h3>
            </div>

            <div className="w-full h-[35%] flex">
                <div className="w-[60%] h-[100%] flex items-center justify-center">
                    <div className="w-[90%] h-[90%] flex flex-col items-start justify-around">
                        <h3 className="text-red-600 font-semibold">{price}</h3>
                        <h3>Reference : {id}</h3>
                        <h3 className="w-[50%] bg-[rgba(44,9,220,0.1)] rounded-md px-5 text-center">
                            {btnText}
                        </h3>
                    </div>
                </div>

                <div className="w-[35%] h-[100%] flex items-center justify-center">
                    <div className="w-[20%] h-[50%] rounded-[50%]">
                        <div>
                            <Liked />
                            <span>9.5k Likes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
