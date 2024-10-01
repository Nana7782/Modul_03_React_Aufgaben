import { useParams } from "react-router-dom";

import { blogData } from "../data/main";

function getArticle(title: string) {
  return blogData.find((article) => article.title === title);
}

export default function ArticlePage() {
  const { article } = useParams();

  const articleDetail = getArticle(article!);

  if (!articleDetail) {
    return "Oh no, no articles found!";
  }

  return (
    <div key={articleDetail.id}>
      <img src={articleDetail.img_url} alt={articleDetail.title} />
      <div>
        <h3>{articleDetail.title}</h3>
        <p>{articleDetail.published_date}</p>
      </div>
      <p>{articleDetail.description}</p>
      <h5>by {articleDetail.author}</h5>
    </div>
  );
}
