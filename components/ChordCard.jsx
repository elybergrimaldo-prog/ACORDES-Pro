import { useState } from "react";

export default function ChordCard({ chord }) {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{
      background: "#1e1e1e",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px"
    }}>
      <h3>{chord.name}</h3>

      <img
        src={chord.variations[selected].image}
        alt={chord.name}
        style={{ width: "200px", marginBottom: "10px" }}
      />

      <div>
        {chord.variations.map((v, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            style={{
              marginRight: "5px",
              padding: "5px 10px",
              cursor: "pointer"
            }}
          >
            {v.name}
          </button>
        ))}
      </div>
    </div>
  );
}
