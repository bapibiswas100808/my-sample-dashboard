import { FaBars } from "react-icons/fa";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Header = ({ handleToggle, setIsOpen }) => {
  const [showBars, setShowBars] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowBars(window.innerWidth > 991);
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

  return (
    <div className="text-black p-3 flex justify-between items-center bg-violet-100 border-b-2 border-gray-400 sticky top-0 ">
      <div>
        <h2>
          {showBars && (
            <FaBars className="cursor-pointer" onClick={handleToggle} />
          )}
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <h2 className="h-10 w-10 bg-green-400 rounded-full flex justify-center items-center">
            PI
          </h2>
        </div>
        <div className="">
          <h2>Name</h2>
          <p className="text-sm">Admin</p>
        </div>
        <div>
          <select name="" id="">
            <option value="">one</option>
            <option value="">two</option>
            <option value="">three</option>
          </select>
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default Header;
