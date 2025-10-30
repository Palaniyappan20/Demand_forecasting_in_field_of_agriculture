import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/forecast")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => alert("Failed to fetch data"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Demand Forecasting in Agriculture</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Crop Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crop) => (
            <tr key={crop.id}>
              <td>{crop.id}</td>
              <td>{crop.crop_name}</td>
              <td>{crop.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
