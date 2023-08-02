import { useState } from 'react';
import { MarkIcon, ColoredMarkIcon } from '../Icons/Icons';
import { StyledMarkButton } from "./styles";

export default function FavoriteButton() {
  const [favorite, setFavorite] = useState(false);

  return (
    <StyledMarkButton
      onClick={() => {
        setFavorite(!favorite);
      }}>
      {favorite ? <ColoredMarkIcon /> : <MarkIcon />}
    </StyledMarkButton>
  );
}
