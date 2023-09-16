import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ArticleList from "./ArticleList";

jest.mock("../ArticleCard/ArticleCard", () => {
  return jest.fn().mockImplementation(({ article }) => <div data-testid="mock-article-card">{article.title}</div>);
});

describe("ArticleList Component", () => {

  test("should render all articles", () => {
    const mockArticles = [
      {
        title: "Sample Article 1",
        shareURL: "https://blabla.com/article1",
      },
      {
        title: "Sample Article 2",
        shareURL: "https://blabla.com/article2",
      },
    ];

    render(<ArticleList articles={mockArticles} />);

    expect(screen.getByText("Sample Article 1")).toBeInTheDocument();
    expect(screen.getByText("Sample Article 2")).toBeInTheDocument();
    expect(screen.getAllByTestId("mock-article-card").length).toBe(mockArticles.length);
  });

  test("should render correctly with no articles", () => {
    render(<ArticleList articles={[]} />);
    
    expect(screen.queryByTestId("mock-article-card")).toBeNull();
  });
});
