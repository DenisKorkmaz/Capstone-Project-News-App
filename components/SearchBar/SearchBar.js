import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
        setSearchTerm(''); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Suche..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit">Suchen</button>
        </form>
    );
}

export default SearchBar;
