import ArticleList from "@/components/ArticleList/ArticleList";
import Navigation from "@/components/Navigation/Navigation";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";

export default function Home() {
  const [region, setRegion] = useState("");
  const [ressort, setRessort] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5); 

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
      const startIndex = (currentPage - 1) * articlesPerPage;
      const selectedArticles = filterForImageFormat(data.news).slice(
        startIndex,
        startIndex + articlesPerPage
      );
      setFilteredArticles(selectedArticles);
    }
  }, [data, currentPage, articlesPerPage]);

  const handleSearch = (searchTerm) => {
    if (data && data.news) {
      const results = data.news.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(filterForImageFormat(results));
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          😴Vorherige Seite
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          🟰Nächste Seite
        </button>
      </div>
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
