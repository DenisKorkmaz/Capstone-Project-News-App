import Article from "@/components/Article.js/ArticleList";
import Navigation from "@/components/Navigation/Navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  return (
    <>
      <Navigation />
      <Article />
    </>
  );
}