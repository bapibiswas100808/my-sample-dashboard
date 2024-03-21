import { useState } from "react";
import PropTypes from "prop-types";

const Tooltip = ({ text, children }) => {
  const [showToolTip, setShowToolTip] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={() => setShowToolTip(false)}
      className="relative"
    >
      {children}
      {showToolTip && (
        <span className="absolute bg-red-500 left-28 -top-5 py-1 px-2 rounded-lg ">
          {text}
        </span>
      )}
    </div>
  );
};
Tooltip.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};
export default Tooltip;
