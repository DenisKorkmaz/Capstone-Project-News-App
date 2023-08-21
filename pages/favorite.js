import useLocalStorageState from "use-local-storage-state";
import Navigation from "@/components/Navigation/Navigation";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useState, useEffect } from "react";

export default function FavoritePage() {
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: [],
  });
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);

  useEffect(() => {
    setFilteredFavorites(favorites);
  }, [favorites]);

  const handleSearch = (searchTerm) => {
    const results = favorites.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFavorites(results);
  };

  return (
    <>
      <Navigation />
      <SearchBar onSearch={handleSearch} />

      {filteredFavorites.length > 0 ? (
        <>
          <ul>
            {filteredFavorites.map((article) => (
              <li key={article.shareURL}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Keine Favoriten mit dem Suchbegriff gefunden.</p>
      )}
    </>
  );
}
