import React, { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { MarkIcon, ColoredMarkIcon } from "../Icons/Icons";
import { StyledMarkButton } from "./styles";

export default function FavoriteButton({ article }) {
  const [favorites, setFavorites] = useLocalStorageState("favorites", []);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!favorites) return;
    const found = favorites.some(
      (favorite) => favorite.shareURL === article.shareURL
    );
    setIsFavorite(found);
  }, [favorites, article.shareURL]);

  function handleMarkFavorite() {
    const currentFavorites = favorites || [];
    let newFavorites = [...currentFavorites];
    {
      if (isFavorite) {
        newFavorites = newFavorites.filter(
          (favorite) => favorite.shareURL !== article.shareURL
        );
      } else {
        newFavorites.push(article);
      }
      setFavorites(newFavorites);
      setIsFavorite(!isFavorite);
    }
  }

  return (
    <StyledMarkButton onClick={handleMarkFavorite}>
      {isFavorite ? <ColoredMarkIcon /> : <MarkIcon />}
    </StyledMarkButton>
  );
}
