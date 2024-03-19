import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavLinks = ({ item, isOpen, idx, handleIsOpen }) => {
  return (
    <NavLink
      className="flex items-center gap-2 py-2 pl-3 hover:bg-[#4c41c095] "
      activeclassname="active"
      to={item.path}
      onClick={() => item.subItems && handleIsOpen(idx)}
    >
      <div
        className="tooltip tooltip-success tooltip-right"
        data-tip={item.name}
      >
        <button className="">{item.icon}</button>
      </div>
      <span style={{ display: isOpen ? "block" : "none" }}>{item.name}</span>
    </NavLink>
  );
};
NavLinks.propTypes = {
  item: PropTypes.object,
  isOpen: PropTypes.bool,
  idx: PropTypes.number,
  handleIsOpen: PropTypes.func,
};
export default NavLinks;
