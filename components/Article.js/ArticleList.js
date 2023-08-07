import React from "react";
import useSWR from "swr";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList() {
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
      {stories.map((article) => (
        <ArticleCard key={article.shareURL} article={article} />
      ))}
    </div>
  );
}
