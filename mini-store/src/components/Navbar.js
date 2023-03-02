import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <Logo />
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/product">products</Link>
          </li>
          <li>
            <Link to="/categories">categories</Link>
          </li>
          <li>
            <Link to="/Signin">Sign in</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
