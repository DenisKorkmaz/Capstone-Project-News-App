import ArticleList from "@/components/ArticleList/ArticleList";
import Navigation from "@/components/Navigation/Navigation";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";

export default function Home() {
  const [region, setRegion] = useState("");
  const [ressort, setRessort] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  const baseUrl = "https://www.tagesschau.de/api2/news";
  const params = [];

  if (region) {
    params.push(`regions=${region}`);
  }

  if (ressort) {
    params.push(`ressort=${ressort}`);
  }

  const finalUrl = `${baseUrl}${params.length ? `?${params.join("&")}` : ""}`;
  const { data, error } = useSWR(finalUrl);

  const filterForImageFormat = (articles) => {
    return articles.filter(
      (item) =>
        item.type === "story" && item.teaserImage?.imageVariants?.["16x9-1920"]
    );
  };

  useEffect(() => {
    if (data && data.news) {
      setFilteredArticles(filterForImageFormat(data.news));
    }
  }, [data]);

  const handleSearch = (searchTerm) => {
    if (data && data.news) {
      const results = data.news.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(filterForImageFormat(results));
    }
  };

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Navigation />
      <Header
        onSearch={handleSearch}
        onRegionChange={(e) => setRegion(e.target.value)}
        onRessortChange={(e) => setRessort(e.target.value)}
        selectedRegion={region}
        selectedRessort={ressort}
      />
      {filteredArticles.length > 0 ? (
        <ArticleList articles={filteredArticles} />
      ) : (
        <p>Keine Artikel mit dem Suchbegriff gefunden.</p>
      )}
    </>
  );
}
