import useSWR from "swr";
import { useRouter } from "next/router";
import Navigation from "@/components/Navigation/Navigation";
import Image from "next/image";

const apiKey = process.env.NEXT_PUBLIC_SMMRY_API_KEY;

export default function SummaryPage() {
  const router = useRouter();
  const { shareURL, teaserImage } = router.query;

  const { data, error } = useSWR(
    `https://api.smmry.com/&SM_API_KEY=${apiKey}&SM_URL=${shareURL}&SM_LENGTH=3`
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Navigation />

      <Image src={teaserImage} alt="Teaser Image" width={256} height={144} />

      {data.sm_api_title && <h2>{data.sm_api_title}</h2>}
      {data.sm_api_content && <p>{data.sm_api_content}</p>}

      <button onClick={() => router.back()}>Zurück</button>
    </>
  );
}
