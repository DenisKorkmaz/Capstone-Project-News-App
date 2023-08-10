import Image from "next/image";
import ThreeDotMenu from "../ThreeDotsMenü/ThreeDotMenü";
import {
  StyledH2,
  StyledImageContainer,
  ButtonContainer,
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
            src={teaserImage?.imageVariants?.["16x9-1920"]}
            priority={true}
            alt={title}
            width={320}
            height={180} quality={100}
          />
        </StyledImageContainer>
        <ButtonContainer>
          <ThreeDotMenu article={article}></ThreeDotMenu>
        </ButtonContainer>
      </ContentContainer>
    </StyledContainer>
  );
}
