import React, { useEffect, useState } from "react";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import useLocalStorageState from "use-local-storage-state";
import { StyledLink, StyledUL, StyledLI, StyledButton } from "./styles";

function ThreeDotMenu({ article }) {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>•••</StyledButton>
      {isOpen && (
        <StyledUL>
          <StyledLI>
            <FavoriteButton
              isFavorite={isFavorite}
              handleMarkFavorite={handleMarkFavorite}
            />
          </StyledLI>
          <StyledLI>
            <Link
              href={article.shareURL}
              passHref
              target="_blank"
              rel="noopener noreferrer">
              <StyledLink>Zum Artikel</StyledLink>
            </Link>
          </StyledLI>
          <StyledLI>
            <Link
              href={`/summary?shareURL=${encodeURIComponent(
                article.shareURL
              )}&teaserImage=${encodeURIComponent(
                article.teaserImage?.imageVariants?.["16x9-256"] || ""
              )}`}>
              <StyledLink>Zusammenfassung</StyledLink>
            </Link>
          </StyledLI>
        </StyledUL>
      )}
    </>
  );
}

export default ThreeDotMenu;
