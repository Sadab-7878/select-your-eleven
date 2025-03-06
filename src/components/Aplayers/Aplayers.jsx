import React, { useEffect, useState } from "react";
import Aplayer from "../Aplayer/Aplayer";

const Aplayers = () => {
  const [activetab, setActivetab] = useState("Available");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-between mx-10 mt-20">
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
                    ? `bg-[#E7FE29] font-bold ${
                        index === 0 ? "rounded-l-2xl" : "rounded-r-2xl"
                      }`
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}

        <div className="mx-10 my-10">

          {activetab === "Available" && (
            <div className="flex flex-wrap justify-between items-center">
              {players.map((player) => (
                <Aplayer key={player.playerId} player={player} />
              ))}
            </div>
          )}

          {activetab === "Selected (0)" && <div>Selected Tab</div>}
        </div>
      </div>
    </>
  );
};

export default Aplayers;
