import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src="https://i.ibb.co/CnYh8YW/light-Mode-Logo.png" alt="" />
      </Link>
      <button>Light/Dark Mode</button>
    </nav>
  );
};

export default Header;
