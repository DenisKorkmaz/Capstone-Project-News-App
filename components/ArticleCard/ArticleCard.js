import React from "react";
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

  return (
    <StyledContainer key={shareURL}>
      <StyledH2>{title}</StyledH2>
      <ContentContainer>
        <StyledImageContainer>
          <Image
            src={teaserImage.imageVariants?.["16x9-256"]}
            alt={title}
            width={256}
            height={144}
          />
        </StyledImageContainer>
        <ButtonContainer>
          <FavoriteButton article={article} />
          <StyledLink href={shareURL} target="_blank" rel="noopener noreferrer">
            zum Artikel
          </StyledLink>
        </ButtonContainer>
      </ContentContainer>
    </StyledContainer>
  );
}