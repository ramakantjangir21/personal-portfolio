import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {expandNavbar ? <CloseIcon /> : <ReorderIcon />}
        </button>
      </div>
      <div className="links">
        <Link to="/personal-portfolio">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
      </div>
    </div>
  );
};

export default Navbar;
