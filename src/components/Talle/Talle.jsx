import { useState } from "react";


function TalleSelector() {
    const [selectedTalle, setSelectedTalle] = useState('');
  
    return (
        <select value={selectedTalle} onChange={event => setSelectedTalle(event.target.value)}>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    );
  }

  export default TalleSelector;
