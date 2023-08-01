

import { SWRConfig } from "swr";
import Article from "@/components/Article.js/Article";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Article />
    </SWRConfig>
  );
}
