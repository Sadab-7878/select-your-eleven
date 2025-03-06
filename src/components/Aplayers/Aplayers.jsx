import React, { useState } from "react";

const Aplayers = () => {
  const [activetab, setActivetab] = useState("Available");
  return (
    <>
      <div>
        <div className="flex justify-between m-10">
          <div>
            <p className="font-sora font-[700] text-[28px] text-[#131313]">
              Available Players
            </p>
          </div>
          <div className="inline-flex border border-gray-200 rounded-2xl">
            {["Available", "Selected (0)"].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActivetab(tab)}
                className={`py-2 px-4 transition-all cursor-pointer ${
                  activetab === tab
                    ?    `bg-[#E7FE29] font-bold ${ index === 0 ? "rounded-l-2xl" : "rounded-r-2xl"}`
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Aplayers;
