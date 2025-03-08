import React from "react";

const Aplayerselected = ({ player }) => {
  const { name, image, role } = player;
  return (
    <div>
      <img src={image} alt="player" />
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
};

export default Aplayerselected;
