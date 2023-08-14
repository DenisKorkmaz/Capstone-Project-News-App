import React, { useEffect, useState } from "react";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { StyledP, StyledUL, StyledLI, StyledButton } from "./styles";

function ThreeDotMenu({ article, onMarkFavorite, isFavorite }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>•••</StyledButton>
      {isOpen && (
        <StyledUL>
          <StyledLI>
            <FavoriteButton
              isFavorite={isFavorite}
              handleMarkFavorite={() => onMarkFavorite(article)}
            />
          </StyledLI>
          <StyledLI>
            <Link
              href={article.shareURL}
              passHref
              target="_blank"
              rel="noopener noreferrer">
              <StyledP>Zum Artikel</StyledP>
            </Link>
          </StyledLI>
          <StyledLI>
            <Link
              href={`/summary?shareURL=${encodeURIComponent(
                article.shareURL
              )}&teaserImage=${encodeURIComponent(
                article.teaserImage?.imageVariants?.["16x9-1920"] || ""
              )}`}>
              <StyledP>Zusammenfassung</StyledP>
            </Link>
          </StyledLI>
        </StyledUL>
      )}
    </>
  );
}

export default ThreeDotMenu;
