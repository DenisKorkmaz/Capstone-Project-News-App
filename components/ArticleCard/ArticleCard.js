import Image from "next/image";
import ThreeDotMenu from "../ThreeDotsMenü/ThreeDotMenü";
import useLocalStorageState from "use-local-storage-state";
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

  const isFavorite = favorites.some(
    (favorite) => favorite.shareURL === article.shareURL
  );

  function handleMarkFavorite() {
    let newFavorites = [...favorites];

    if (isFavorite) {
      newFavorites = newFavorites.filter(
        (favorite) => favorite.shareURL !== article.shareURL
      );
    } else {
      newFavorites.push(article);
    }

    setFavorites(newFavorites);
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
