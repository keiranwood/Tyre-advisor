import React, { useState } from "react";

function TyreAdviser() {
  const [vehicleType, setVehicleType] = useState("");
  const [tyreSize, setTyreSize] = useState("");
  const [advice, setAdvice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vehicleType || !tyreSize) {
      setAdvice("Please select your vehicle type and enter your tyre size.");
      return;
    }
    // Simple advice logic for demo
    setAdvice(
      `For a ${vehicleType} with tyre size ${tyreSize}, we recommend checking UK regulations and consulting a professional fitter.`
    );
  };

  return (
    <div style={{ maxWidth: 400, margin: "2em auto", padding: 24, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2>Tyre Adviser (UK)</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Vehicle Type:
            <select value={vehicleType} onChange={e => setVehicleType(e.target.value)}>
              <option value="">Select</option>
              <option value="Car">Car</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Van">Van</option>
            </select>
          </label>
        </div>
        <div style={{ marginTop: 12 }}>
          <label>
            Tyre Size:{" "}
            <input
              type="text"
              value={tyreSize}
              onChange={e => setTyreSize(e.target.value)}
              placeholder="e.g. 205/55R16"
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: 16 }}>
          Get Advice
        </button>
      </form>
      {advice && <div style={{ marginTop: 24, color: "#444" }}>{advice}</div>}
    </div>
  );
}

export default TyreAdviser;
