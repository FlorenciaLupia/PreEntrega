import { useState } from "react";
import "./Waist.css"


function WaistSelector() {
    const [selectedTalle, setSelectedTalle] = useState('');
  
    return (
      <select className="divSelect" value={selectedTalle} onChange={event => setSelectedTalle(event.target.value)}>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    );
  }

  export default WaistSelector;
