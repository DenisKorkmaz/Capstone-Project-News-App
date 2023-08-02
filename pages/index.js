import { SWRConfig } from "swr";
import Article from "@/components/Article.js/Article";
import Navigation from "@/components/Navigation/Navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Navigation />
      <Article />
    </SWRConfig>
  );
}