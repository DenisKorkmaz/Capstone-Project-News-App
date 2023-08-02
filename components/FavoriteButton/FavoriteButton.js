// FavoriteButton.js
import { useState } from 'react';
import { Icon, ColoredIcon } from './Icons';
import { StyledMarkButton } from "./styles";

export default function FavoriteButton() {
  const [favorite, setFavorite] = useState(false);

  return (
    <StyledMarkButton
      onClick={() => {
        setFavorite(!favorite);
      }}>
      {favorite ? <ColoredIcon /> : <Icon />}
    </StyledMarkButton>
  );
}
