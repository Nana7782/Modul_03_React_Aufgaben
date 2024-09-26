import { useEffect, useState } from "react";

interface INewsArticle {
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string;
}

function NewsApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [news, setNews] = useState<INewsArticle[]>([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const [shouldFetchNews, setShouldFetchNews] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      if (shouldFetchNews && searchTerm) {
        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=${searchTerm}&language=${selectedLanguage}&apiKey=${apiKey}`
          );

          const data = await response.json();

          const filteredArticles = data.articles.filter(
            (article: { url: string }) => article.url !== "https://removed.com"
          );
          setNews(filteredArticles);
        } catch (error) {
          console.error("Error fetching news:", error);
        } finally {
          setShouldFetchNews(false);
        }
      }
    };

    if (shouldFetchNews) {
      fetchNews();
    }
  }, [shouldFetchNews, searchTerm, selectedLanguage]);

  function handleSearchClick() {
    setShouldFetchNews(true);
  }

  return (
    <div>
      <div className="input-div">
        <input
          type="text"
          placeholder="Search for..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <select
          value={selectedLanguage}
          onChange={(event) => setSelectedLanguage(event.target.value)}
        >
          <option value="en">English</option>
          <option value="de">German</option>
        </select>
        <button onClick={handleSearchClick}>Search</button>
      </div>

      {news.length > 0 && (
        <ul className="newsCard">
          {news.map((article, index) => (
            <li key={article.url || index}>
              <h3>{article.title}</h3>
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} />
              )}
              <p>{article.description}</p>
              <a href={article.url} target="blank">
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}

      {news.length === 0 && <p>No News found!</p>}
    </div>
  );
}

export default NewsApp;
