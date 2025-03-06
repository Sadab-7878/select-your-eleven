import React from "react";
import Logo from "../../assets/logo.png";
import dollar from '../../assets/dollar 1.png'
const Header = ({increasemoney}) => {
  return (
    <>
      <div className="flex justify-between m-10">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex gap-4 justify-center items-center">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
            <span className="border-gray-300 border px-6 py-2 rounded-lg flex gap-2">
              {increasemoney} Coin <img src={dollar} alt="dollar" />
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
