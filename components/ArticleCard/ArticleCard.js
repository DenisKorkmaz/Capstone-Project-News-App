import Image from "next/image";
import ThreeDotMenu from "../ThreeDotsMenü/ThreeDotMenü";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";

import {
  StyledH2,
  StyledImageContainer,
  ButtonContainer,
  StyledContainer,
  ContentContainer,
} from "./styles";

export default function ArticleCard({ article}) {
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


  return (
    <StyledContainer key={shareURL}>
      <StyledH2>{title}</StyledH2>
      <ContentContainer>
        <StyledImageContainer>
          <Image
            src={teaserImage?.imageVariants?.["16x9-1920"]}
            priority={true}
            alt={title}
            width={320}
            height={180}
            quality={100}
          />
        </StyledImageContainer>
        <ButtonContainer>
          <ThreeDotMenu
            article={article}
            isFavorite={isFavorite}
            onMarkFavorite={handleMarkFavorite}
          />
        </ButtonContainer>
      </ContentContainer>
    </StyledContainer>
  );
}
