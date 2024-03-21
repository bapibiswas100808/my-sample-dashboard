import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Tooltip from "../Tooltip/Tooltip";

const NavLinks = ({ item, isOpen, idx, handleIsOpen, isClose }) => {
  const [showDrop, setShowDrop] = useState(false);
  const handleShowDrop = () => {
    setShowDrop(!showDrop);
  };
  return (
    <>
      <NavLink
        className="flex items-center gap-2 py-2 pl-3 hover:bg-[#4c41c095]"
        to={item.path}
        onClick={() => {
          if (item.subItems) {
            handleIsOpen(idx);
            handleShowDrop();
          }
        }}
      >
        <div style={{ display: isClose ? "none" : "block" }}>
          <Tooltip text={item.name}>
            <button>{item.icon}</button>
          </Tooltip>
        </div>

        <div className="flex items-center justify-between w-[80%]">
          <span
            className="w-full"
            style={{
              display: isOpen ? "block" : "none",
            }}
          >
            {item.name}
          </span>
          <div>
            {isOpen && item.subItems && (
              <span className="">
                {!showDrop ? <FaAngleDown /> : <IoIosArrowUp />}
              </span>
            )}
          </div>
        </div>
      </NavLink>
    </>
  );
};
NavLinks.propTypes = {
  item: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  idx: PropTypes.number.isRequired,
  handleIsOpen: PropTypes.func.isRequired,
  isClose: PropTypes.bool,
};
export default NavLinks;
