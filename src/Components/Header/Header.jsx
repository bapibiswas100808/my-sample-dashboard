import { FaBars } from "react-icons/fa";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";

const Header = ({ handleToggle, setIsOpen, isClose }) => {
  const iconRef = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);
  useEffect(() => {
    const handler = (e) => {
      if (!iconRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div
      style={{ paddingLeft: isClose ? "65px" : "20px" }}
      className="text-black p-3 flex justify-between items-center bg-violet-100 border-b-2 border-gray-400 sticky top-0"
    >
      <div>
        <h2>
          <FaBars className="cursor-pointer" onClick={handleToggle} />
        </h2>
      </div>
      <div className="flex items-center gap-3 pr-2 lg:pr-5">
        <div>
          <h2 className="h-10 w-10 bg-green-400 rounded-full flex justify-center items-center">
            PI
          </h2>
        </div>
        <div className="">
          <h2>Name</h2>
          <p className="text-sm">Admin</p>
        </div>
        <div ref={iconRef}>
          <div onClick={() => setShowOptions(!showOptions)}>
            <MdOutlineKeyboardArrowDown className="text-xl bg-gray-300 rounded-sm" />
          </div>
          {showOptions && (
            <ul className="absolute right-5 lg:right-8 top-[70px] bg-white p-3 space-y-2">
              <li className="flex items-center gap-3  border-b-2 pb-2">
                <span>
                  <ImProfile />
                </span>
                <span>Profile</span>
              </li>
              <li className="flex items-center gap-3 border-b-2 pb-2">
                <span>
                  <RiLockPasswordFill />
                </span>
                <span> Change Password</span>
              </li>
              <li className="flex items-center gap-3 border-b-2 pb-2">
                <span>
                  <IoLogOutOutline />
                </span>
                <span>Log Out</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isClose: PropTypes.bool,
};
export default Header;
