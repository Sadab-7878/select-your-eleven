import React from "react";
import { BsTrash } from "react-icons/bs";

const Aplayerselected = ({ player, removeitem }) => {
  const { playerId, name, image, role } = player;

  const handleRemove = (event) => {
    event.preventDefault(); // Prevent default action (page refresh)
    removeitem(playerId);
  };
  return (
    <div className="flex justify-between items-center border border-gray-200 p-5 rounded-[16px]">
      <div className="flex items-center gap-5">
        <div>
          <img
            className="rounded-[16px] w-[80px] h-[80px]"
            src={image}
            alt="player"
          />
        </div>
        <div>
          <p className="font-sora text-[24px] font-[600]">{name}</p>
          <p className="font-sora text-[16px] font-[400]">{role}</p>
        </div>
      </div>
      <div>
        <BsTrash
          onClick={handleRemove}
          className="text-[#F14749] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Aplayerselected;
