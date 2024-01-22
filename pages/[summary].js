import useSWR from "swr";
import { useRouter } from "next/router";
import Navigation from "@/components/Navigation/Navigation";
import Image from "next/image";
import {
  StyledImageContainer,
  TitleContainer,
  TextContainer,
  ContentContainer,
  StyledH2,
  Styledp,
  StyledButton,
} from "../components/styles/summaryPageStyle";

const apiKey = process.env.NEXT_PUBLIC_SMMRY_API_KEY;

export default function SummaryPage() {
  const router = useRouter();
  const { shareURL, teaserImage} = router.query;


  const { data, error } = useSWR(
    `https://api.smmry.com/&SM_API_KEY=${apiKey}&SM_URL=${shareURL}&SM_LENGTH=4`
  );

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <ContentContainer>
      <StyledImageContainer>
        <Image
          src={teaserImage}
          alt="Teaser Image"
          width={400}
          height={224}
          quality={100}
          loading="lazy"
        />
      </StyledImageContainer>
      <StyledButton onClick={() => router.back()}> ⬅️</StyledButton>

      {/* The API has a limit of 100 requests. To ensure that no empty data is displayed , I implemented default text as a fallback. */}

      <TitleContainer>
        {data && data.sm_api_title ? (
          <StyledH2>{data.sm_api_title}</StyledH2>
        ) : (
          <StyledH2>
            Lorem ipsum dolor sit amet consectetur. Quis donec nulla ultrices
            eros et augue lorem non.
          </StyledH2>
        )}
      </TitleContainer>

      <TextContainer>
        {data && data.sm_api_content ? (
          <Styledp>{data.sm_api_content}</Styledp>
        ) : (
          <Styledp>
            Lorem ipsum dolor sit amet consectetur. Nibh faucibus justo et
            massa. Praesent tempor sed non erat. Massa neque nunc morbi cursus
            interdum. Ornare maecenas in elit sollicitudin suspendisse
            adipiscing dolor. Imperdiet mauris consectetur tristique tincidunt
            nulla amet gravida mattis commodo. Aliquam et quis nunc sit. Massa
            nec vestibulum quis amet sociis velit nunc. Ornare maecenas in elit
            sollicitudin suspendisse adipiscing dolor. Lorem ipsum dolor sit
            amet consectetur. Nibh faucibus justo et massa. Praesent tempor sed
            non erat. Massa neque nunc morbi cursus interdum. Ornare maecenas in
            elit sollicitudin suspendisse adipiscing dolor. Imperdiet mauris
            consectetur tristique tincidunt nulla amet gravida mattis commodo.
            Aliquam et quis nunc sit. Massa nec vestibulum quis amet sociis
            velit nunc. Ornare maecenas in elit sollicitudin suspendisse
            adipiscing dolor.{" "}
          </Styledp>
        )}
      </TextContainer>

      <Navigation></Navigation>
    </ContentContainer>
  );
}
