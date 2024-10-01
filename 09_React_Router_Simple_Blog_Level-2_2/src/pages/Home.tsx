import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div></div>
      <div>
        <h2>Welcome to my simple Blog</h2>
        <Link to={"/blog"}>Go to articles</Link>
      </div>
    </div>
  );
}
