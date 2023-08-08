import { MarkIcon, ColoredMarkIcon } from "../Icons/Icons";
import { StyledMarkButton } from "./styles";

export default function FavoriteButton({ isFavorite, handleMarkFavorite }) {
  return (
    <StyledMarkButton onClick={handleMarkFavorite}>
      {isFavorite ? <ColoredMarkIcon /> : <MarkIcon />}
    </StyledMarkButton>
  );
}
