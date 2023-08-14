import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.shareURL}>
          <ArticleCard article={article} />
        </li>
      ))}
    </ul>
  );
}
