import React from "react";
import useSWR from "swr";
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

export default function Article() {
  const { data, error } = useSWR("https://www.tagesschau.de/api2/news");

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  const stories = data.news.filter(
    (item) =>
      item.type === "story" && item.teaserImage?.imageVariants?.["16x9-256"]
  );

  return (
    <div>
      {stories.map(({ title, teaserImage, shareURL }) => (
        <StyledContainer key={shareURL}>
          <MainContainer>
            <StyledH1>{title}</StyledH1>
            <ContentContainer>
            <StyledImage src={teaserImage.imageVariants?.["16x9-256"]} />
            <ButtonContainer>
            <FavoriteButton article={{ title, teaserImage, shareURL }} /> 
              <StyledLink
                href={shareURL}
                target="_blank"
                rel="noopener noreferrer">
                zum Artikel
              </StyledLink>
            </ButtonContainer>
            </ContentContainer>
          </MainContainer>
        </StyledContainer>
      ))}
    </div>
  );
}
