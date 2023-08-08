import useLocalStorageState from "use-local-storage-state";
import Navigation from "@/components/Navigation/Navigation";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

export default function FavoritePage() {
  const [favorites, setFavorites] = useLocalStorageState("favorites", []);

  return (
    <>
      <Navigation />
      <ul>
        {favorites?.map((article) => (
          <li key={article.shareURL}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </>
  );
}
