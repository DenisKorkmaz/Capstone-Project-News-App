
export default function FilterBar({ onRegionChange, onRessortChange, selectedRegion, selectedRessort }) {
  
    const handleRegionChange = (e) => {
        onRegionChange(e);
        onRessortChange({ target: { value: "" } }); 
      };
    
      const handleRessortChange = (e) => {
        onRessortChange(e);
        onRegionChange({ target: { value: "" } });
      };
  
    return (
    <div>
      <label>
        Region:
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Alle Regionen</option>
          <option value="1">Baden-Württemberg</option>
          <option value="2">Bayern</option>
          <option value="3">Berlin</option>
          <option value="4">Brandenburg</option>
          <option value="5">Bremen</option>
          <option value="6">Hamburg</option>
          <option value="7">Hessen</option>
          <option value="8">Mecklenburg-Vorpommern</option>
          <option value="9">Niedersachsen</option>
          <option value="10">Nordrhein-Westfalen</option>
          <option value="11">Rheinland-Pfalz</option>
          <option value="12">Saarland</option>
          <option value="13">Sachsen</option>
          <option value="14">Sachsen-Anhalt</option>
          <option value="15">Schleswig-Holstein</option>
          <option value="16">Thüringen</option>
        </select>
      </label>
      <label>
      Katagorie:
        <select value={selectedRessort} onChange={handleRessortChange}>
          <option value="">Alle Ressorts</option>
          <option value="inland">Inland</option>
          <option value="ausland">Ausland</option>
          <option value="wirtschaft">Wirtschaft</option>
          <option value="sport">Sport</option>
          <option value="investigativ">Investigativ</option>
          <option value="faktenfinder">Faktenfinder</option>
        </select>
      </label>
    </div>
  );
}
