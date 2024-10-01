import { Link } from "react-router-dom";
import { blogData } from "../data/main";

export default function Blog() {
  return (
    <>
      <section>
        {blogData.map((article) => (
          <div>
            <img src={article.img_url} alt={article.title} />
            <h3>{article.title}</h3>
            <Link to={article.title}>Read more</Link>
          </div>
        ))}
      </section>
    </>
  );
}
