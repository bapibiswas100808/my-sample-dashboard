import { FaBars } from "react-icons/fa";
import PropTypes from "prop-types";

const Header = ({ handleToggle }) => {
  return (
    <div className="text-black p-3 flex justify-between items-center bg-violet-100 border-b-2 border-gray-400 sticky top-0 ">
      <div>
        <h2>
          <FaBars className="cursor-pointer" onClick={handleToggle} />
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
};
export default Header;
