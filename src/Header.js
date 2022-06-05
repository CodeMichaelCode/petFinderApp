import { Link } from "react-router-dom";
import logo from "../images/lightModeLogo.png";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <button>Light/Dark Mode</button>
    </nav>
  );
};

export default Header;
