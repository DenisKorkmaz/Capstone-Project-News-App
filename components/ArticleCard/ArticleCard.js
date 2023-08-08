import useLocalStorageState from "use-local-storage-state";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import {
  StyledButton,
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
  const [showSummary, setShowSummary] = useState(false);

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

  function Summary({ shareURL }) {
    const { data, error } = useSWR(
      `https://api.smmry.com/&SM_API_KEY=7770A49AF2&SM_URL=${shareURL}&SM_LENGTH=3`
    );
    if (error) {
      return <div>failed to load</div>;
    }
    if (!data) {
      return <div>loading...</div>;
    }

    return (
      <div>
        {data.sm_api_title && <StyledH2>{data.sm_api_title}</StyledH2>}
        {data.sm_api_content && <p>{data.sm_api_content}</p>}
      </div>
    );
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
          <StyledButton onClick={() => setShowSummary(!showSummary)}>
            Summary
          </StyledButton>
          {showSummary && <Summary shareURL={shareURL} />}

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
