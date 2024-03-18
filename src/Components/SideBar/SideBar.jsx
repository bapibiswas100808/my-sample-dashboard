import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { RxDashboard } from "react-icons/rx";
import { MdNotificationsActive } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

const SideBar = ({ children, isOpen }) => {
  console.log(isOpen);
  const menuItems = [
    { name: "Dashboard", id: 1, icon: <RxDashboard />, path: "/dashboard" },
    {
      name: "Notifications",
      id: 2,
      icon: <MdNotificationsActive />,
      path: "/notification",
    },
    { name: "Reports", id: 3, icon: <TbReportSearch />, path: "/report" },
    { name: "Settings", id: 4, icon: <CiSettings />, path: "/settings" },
  ];
  return (
    <div className="flex">
      <div
        style={{ width: isOpen ? "250px" : "50px" }}
        className="h-screen bg-blue-950 text-white"
      >
        <div className="flex p-[22px] justify-between bg-white">
          <h2 className="text-green-950">{isOpen ? "Logo" : "LG"}</h2>
        </div>
        <div className="flex flex-col p-5 space-y-5">
          {menuItems.map((item, idx) => (
            <NavLink
              className="flex items-center gap-2"
              key={idx}
              to={item.path}
            >
              <span> {item.icon}</span>
              <span style={{ display: isOpen ? "block" : "none" }}>
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
      <main className="w-full bg-violet-100">{children}</main>
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SideBar;
