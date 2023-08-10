import Link from "next/link";
import { useRouter } from "next/router";

import {
  MarkIcon,
  ColoredMarkIconNav,
  HomeIcon,
  HomeIconColored,
  
} from "../Icons/Icons";
import { StyledNav, NavDiv } from "./styles";

export default function Navigation() {
  const router = useRouter();

  return (
    <NavDiv>
    <StyledNav>
     
        <Link href="/">
          {router.pathname === "/" ? <HomeIconColored /> : <HomeIcon />}
        </Link>

        <Link href="/favorite">
          {router.pathname === "/favorite" ? (
            <ColoredMarkIconNav />
          ) : (
            <MarkIcon />
          )}
        </Link>
     
    </StyledNav>
    </NavDiv>
  );
}
