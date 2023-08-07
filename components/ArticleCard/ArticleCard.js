import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import {
  StyledH1,
  StyledImage,
  ButtonContainer,
  StyledLink,
  StyledContainer,
  ContentContainer,
  MainContainer,
} from "./styles";

export default function ArticleCard({ article }) {
  const { title, teaserImage, shareURL } = article;

  return (
    <StyledContainer key={shareURL}>
      <MainContainer>
        <StyledH1>{title}</StyledH1>
        <ContentContainer>
          <StyledImage src={teaserImage.imageVariants?.["16x9-256"]} />
          <ButtonContainer>
            <FavoriteButton article={article} />
            <StyledLink
              href={shareURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              zum Artikel
            </StyledLink>
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
    </StyledContainer>
  );
}
