import ArticleList from "@/components/ArticleList/ArticleList";
import Navigation from "@/components/Navigation/Navigation";
import useSWR from "swr";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState, useEffect } from "react";

export default function Home() {
  const { data, error } = useSWR("https://www.tagesschau.de/api2/news");
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    if (data && data.news) {
      setFilteredArticles(data.news);
    }
  }, [data]);

  const handleSearch = (searchTerm) => {
    if (data && data.news) {
      const results = data.news.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(results);
    }
  };

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  const stories = data.news.filter(
    (item) =>
      item.type === "story" && item.teaserImage?.imageVariants?.["16x9-1920"]
  );

  return (
    <>
      <Navigation />
      <SearchBar onSearch={handleSearch} />
      {filteredArticles.length > 0 ? (
        <ArticleList articles={filteredArticles} />
      ) : (
        <p>Keine Artikel mit dem Suchbegriff gefunden.</p>
      )}
    </>
  );
}
