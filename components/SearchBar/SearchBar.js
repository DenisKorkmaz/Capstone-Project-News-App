import { useState } from "react";
import { SearchIcon } from "../Icons/Icons";
import { SearchBarContainer, SearchInput, IconWrapper } from './styles';


function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm("");
  };
  return (
    <SearchBarContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Suchen..."
      />
      <IconWrapper type="submit">
        <SearchIcon />
      </IconWrapper>
    </SearchBarContainer>
  );
};

export default SearchBar;