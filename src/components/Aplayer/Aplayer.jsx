import React from "react";
import Userlogo from "../../assets/user 1.png";
import flag from "../../assets/flag 1.png";

const Aplayer = ({ player, buyPlayer }) => {
  const { image, name, country, role, battingType, bowlingType, biddingPrice } =
    player;

  return (
    <>
      <div className="w-[424px] h-[528px] border flex flex-col justify-center px-5 my-10 rounded-[16px] border-gray-200 ">
        {/* 1 */}
        <div className="mx-auto">
          <img
            className="w-[376px] h-[240px] rounded-[16px]"
            src={image}
            alt="player"
          />
        </div>
        {/* divider  */}
        <div className="divide-y-1 divide-[#ECECEC] ">
          {/* 2 */}
          <div className="pb-4 mt-4 space-y-2">
            <div className="flex items-center gap-3">
              <img src={Userlogo} alt="userlogo" />
              <p className="text-[20px] font-[600] font-sora">{name}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <img src={flag} alt="flag" />
                <p className="font-sora text-[16px] font-[400]">{country}</p>
              </div>
              <div className="w-[119px] h-[36px] bg-[#F3F3F3] rounded-[8px] flex justify-center items-center">
                <p className="font-sora text-[14px] font-[400]">{role}</p>
              </div>
            </div>
          </div>

          {/* 3 */}

          <div className="pt-4 space-y-2">
            <div>
              <p className="text-[16px] font-sora font-[700]">Rating</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] font-[600] font-sora">{battingType}</p>
              <p className="text-[16px] font-[400] font-sora">{bowlingType}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-sora font-[600]">
                Price: {biddingPrice}
              </p>
              <button
                onClick={() => buyPlayer(player)}
                className="border w-[134px] h-[36px] rounded-[8px] border-gray-200 text-[14px] font-[400] font-sora cursor-pointer"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aplayer;
