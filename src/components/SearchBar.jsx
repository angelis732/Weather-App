import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  
  const [city, setCity] = useState("");
  
  return (
    <div className='search'>
      <form onSubmit={(event) => {
        event.preventDefault();
        onSearch(city);
        setCity("");
      }}>
        <input
          type="text"
          placeholder="Ciudad..."
          value={city}
          onChange={event => setCity(event.target.value)}
        />
        <input className='agregar' type="submit" value="Buscar"/>
      </form>
    </div>
  );
}
