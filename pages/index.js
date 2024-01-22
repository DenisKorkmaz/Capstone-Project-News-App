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
      const selectedArticles = filterForImageFormat(data.news);
      setFilteredArticles(selectedArticles);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
      <div className="buttonContainer">
        <button className="topButton" onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </button>
      </div>
    </>
  );
}
