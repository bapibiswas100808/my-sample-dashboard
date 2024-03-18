import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SideBar = ({ children }) => {
  const menuItems = [
    { name: "Dashboard", id: 1, icon: "DS", path: "/dashboard" },
    { name: "Notifications", id: 2, icon: "DS", path: "/notification" },
    { name: "Reports", id: 3, icon: "DS", path: "/report" },
    { name: "Settings", id: 4, icon: "DS", path: "/settings" },
  ];
  return (
    <div className="flex">
      <div className="h-screen bg-gray-400">
        <div className="flex p-5 justify-between">
          <h2>Logo</h2>
          <p>BB</p>
        </div>
        <div className="flex flex-col p-5">
          {menuItems.map((item, idx) => (
            <NavLink key={idx} to={item.path}>
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.array.isRequired,
};

export default SideBar;
