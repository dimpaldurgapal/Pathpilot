npx create-react-app myapp

import React, { useState } from "react";

const GraphInput = ({ onFindPath }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = () => {
    if (source && destination) {
      onFindPath(parseInt(source), parseInt(destination));
    }
  };

  return (
    <div>
      <h2>Shortest Route Finder</h2>
      <label>Start Node:</label>
      <input type="number" value={source} onChange={(e) => setSource(e.target.value)} />
      
      <label>End Node:</label>
      <input type="number" value={destination} onChange={(e) => setDestination(e.target.value)} />

      <button onClick={handleSubmit}>Find Shortest Path</button>
    </div>
  );
};

export default GraphInput;