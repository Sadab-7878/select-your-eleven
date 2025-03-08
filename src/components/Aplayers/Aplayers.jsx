import React, { useEffect, useState } from "react";
import Aplayer from "../Aplayer/Aplayer";
import { ToastContainer, toast } from "react-toastify";
import Aplayerselected from "../Aplayerselected/Aplayerselected";

const Aplayers = ({ increasemoney, setIncreasemoney }) => {
  const [activetab, setActivetab] = useState("Available");
  const [players, setPlayers] = useState([]);
  const [selectedplayers, setselectedplayers] = useState([]);
  const [selectedCount, setSelectedCount] = useState();

  const buyPlayer = (player) => {
    const price = parseInt(player.biddingPrice.replace(/[$,]/g, ""), 10);

    if (increasemoney >= price) {
      if (selectedplayers.some((p) => p.playerId === player.playerId)) {
        toast.warn("Player already bought");
      } else {
        setIncreasemoney((prevMoney) => prevMoney - price);
        setselectedplayers([...selectedplayers, player]);
        toast.success(
          `${player.name} has been bought successfully for $${price}`
        );
      }
    } else {
      toast.warn("Not enough money! Claim more money.");
    }
  };

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  useEffect(() => {
    setSelectedCount(selectedplayers.length);
  }, [selectedplayers]);

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
            {["Available", `Selected (${selectedCount})`].map((tab, index) => (
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
                <Aplayer
                  key={player.playerId}
                  player={player}
                  buyPlayer={buyPlayer}
                />
              ))}
            </div>
          )}

          {activetab === `Selected (${selectedCount})` && (
            <div>
              {/* display selected players here */}

              {
                selectedplayers.map((player) => (
                  <Aplayerselected key={player.playerId} player={player}/>
                ))
              }
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Aplayers;
