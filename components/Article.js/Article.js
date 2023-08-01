import React from 'react';
import useSWR from 'swr';
import { StyledH1, StyledImage, StyledButton, StyledContainer } from "./styles";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Article() {
  const { data, error } = useSWR('https://www.tagesschau.de/api2/news', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.news.map((item) => (
        item.type === "story" && item.teaserImage?.imageVariants?.["16x9-256"]
          ? (
            <>
            <StyledContainer>
              <StyledH1>{item.title}</StyledH1>
              <StyledImage src={item.teaserImage?.imageVariants?.["16x9-256"]} />
              <a href={item?.shareURL} target="_blank" rel="noopener noreferrer">
                <StyledButton>zum Artikel</StyledButton>
              </a>
              </StyledContainer>
            </>
          ) : null
      ))}
    </div>
  );
}
