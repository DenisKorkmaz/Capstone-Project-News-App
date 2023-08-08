import ArticleList from "@/components/ArticleList/ArticleList";
import Navigation from "@/components/Navigation/Navigation";
import useSWR from "swr";

export default function Home() {
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
    <>
      <Navigation />
      <ArticleList articles={stories} />
    </>
  );
}
