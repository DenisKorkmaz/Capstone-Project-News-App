import SearchBar from "@/components/SearchBar/SearchBar";
import FilterBar from "@/components/FilterBar/FilterBar";
import { StyledHeader } from "./styles";

export default function Header({
  onSearch,
  onRegionChange,
  onRessortChange,
  selectedRegion,
  selectedRessort,
  hideFilter = false
}) {
  return (
    <StyledHeader>
      <SearchBar onSearch={onSearch} />
      {!hideFilter && (
      <FilterBar
        onRegionChange={onRegionChange}
        onRessortChange={onRessortChange}
        selectedRegion={selectedRegion}
        selectedRessort={selectedRessort}
      />
      )}
    </StyledHeader>
  );
}
