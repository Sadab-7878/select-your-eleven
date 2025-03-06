import React from "react";
import bannermain from "../../assets/banner-main.png";
import herobgimg from "../../assets/bg-shadow.png";
const Hero = ({ claimmoney }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div
          className="bg-cover bg-center w-[1320px] h-[545px] bg-[#131313] rounded-[24px] flex flex-col justify-center items-center gap-4"
          style={{ backgroundImage: `url(${herobgimg})` }}
        >
          <div>
            <img src={bannermain} alt="banner-main" />
          </div>

          <div>
            <p className="font-sora text-[40px] text-[#FFFFFF] font-[700]">
              Assemble Your Ultimate Dream 11 Cricket Team
            </p>
          </div>

          <div>
            <p className="font-inter font-[500] text-[24px] text-[#B9B9BA]">
              Beyond Boundaries Beyond Limits
            </p>
          </div>

          <div className="border border-[#E7FE29] w-[200px] h-[50px] rounded-[16px] flex justify-center items-center cursor-pointer">
            <button
              onClick={claimmoney}
              className="w-[184px] h-[34px] bg-[#E7FE29] rounded-[12px] cursor-pointer"
            >
              Claim
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
