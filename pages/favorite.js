import useLocalStorageState from "use-local-storage-state";
import Navigation from "@/components/Navigation/Navigation";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import {
  StyledH1,
  StyledImage,
  ButtonContainer,
  StyledLink,
  StyledContainer,
  ContentContainer,
  MainContainer,
} from "../components/Article.js/styles";

export default function FavoritePage() {
  const [favorites, setFavorites] = useLocalStorageState("favorites", []);

  return (
    <div>
      <Navigation />
      <div>
        {favorites.map(({ title, teaserImage, shareURL }) => (
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
    </div>
  );
}
