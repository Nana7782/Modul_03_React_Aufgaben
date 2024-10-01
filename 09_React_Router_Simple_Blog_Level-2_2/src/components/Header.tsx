import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>My Life</h1>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
      </nav>
    </header>
  );
}
