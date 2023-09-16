import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  test("should render the search input field and the icon", () => {
    render(<SearchBar onSearch={() => {}} />);
    
    const inputElement = screen.getByPlaceholderText("Suchen...");
    expect(inputElement).toBeInTheDocument();
    
    const iconElement = screen.getByRole("button", { name: /search/i });
    expect(iconElement).toBeInTheDocument();
  });

});

import "@testing-library/jest-dom/extend-expect";