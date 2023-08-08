import useLocalStorageState from "use-local-storage-state";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import {
  StyledH2,
  StyledImageContainer,
  ButtonContainer,
  StyledLink,
  StyledContainer,
  ContentContainer,
} from "./styles";

export default function ArticleCard({ article }) {
  const { title, teaserImage, shareURL } = article;

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
    <StyledContainer key={shareURL}>
      <StyledH2>{title}</StyledH2>
      <ContentContainer>
        <StyledImageContainer>
          <Image
            src={teaserImage?.imageVariants?.["16x9-256"]}
            alt={title}
            width={256}
            height={144}
          />
        </StyledImageContainer>
        <ButtonContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            handleMarkFavorite={handleMarkFavorite}
          />

          <Link
            href={shareURL}
            passHref
            target="_blank"
            rel="noopener noreferrer">
            <StyledLink>Zum Artikel</StyledLink>
          </Link>
        </ButtonContainer>
      </ContentContainer>
    </StyledContainer>
  );
}
