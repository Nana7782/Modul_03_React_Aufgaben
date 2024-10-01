interface ArticleCardProps {
  id: number;
  title: string;
  published_date: string;
  author: string;
  description: string;
  imgUrl: string;
}

export default function ArticleCard({
  id,
  title,
  published_date,
  author,
  description,
  imgUrl,
}: ArticleCardProps) {
  return (
    <>
      <div>
        <img src={imgUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{published_date}</p>
        </div>
        <p>{description}</p>
        <h4>{author}</h4>
      </div>
    </>
  );
}
