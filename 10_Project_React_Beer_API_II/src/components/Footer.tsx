import { NavLink } from "react-router-dom";
import footerImg from "../assets/img/Logo.svg";

export default function Footer() {
  return (
    <div className="button" id="footer">
      <NavLink to="/">
        <img
          src={footerImg}
          alt="Logo"
          className="logo"
          aria-placeholder="Home"
        />
      </NavLink>
    </div>
  );
}
