import useLocalStorageState from "use-local-storage-state";
import Navigation from "@/components/Navigation/Navigation";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

export default function FavoritePage() {
  const [favorites, setFavorites] = useLocalStorageState("favorites", []);

  return (
    <div>
      <Navigation />
      <div>
        {favorites?.map((article) => (
          <ArticleCard key={article.shareURL} article={article} />
        ))}
      </div>
    </div>
  );
}