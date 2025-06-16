import React, { useState } from "react";

const questions = [
  { id: "vehicle", text: "What type of vehicle is it?", options: ["Hatchback", "Saloon", "SUV", "Van"] },
  { id: "priority", text: "What matters most?", options: ["Grip/Performance", "Longevity", "Comfort", "Budget"] },
  { id: "environment", text: "Where do you mostly drive?", options: ["City", "Motorway", "Rural", "Mixed"] },
  { id: "weather", text: "Usual weather conditions?", options: ["Wet", "Dry", "Snow/Ice", "Mixed"] },
  { id: "brand_pref", text: "Any tyre brand preference?", options: ["No preference", "Michelin", "Pirelli", "Goodyear", "Continental", "Dunlop", "Bridgestone", "Hankook", "Avon"] },
];

const allBrands = ["Michelin", "Pirelli", "Goodyear", "Continental", "Dunlop", "Bridgestone", "Hankook", "Avon"];

const premiumRecommendations = {
  "Hatchback": { brand: "Michelin", model: "Primacy 4+", summary: "Premium comfort and safety for hatchbacks." },
  "Saloon": { brand: "Continental", model: "PremiumContact 7", summary: "Top performance saloon tyre, excellent in wet/dry." },
  "SUV": { brand: "Goodyear", model: "Eagle F1 Asymmetric SUV", summary: "Premium grip and stability for SUVs." },
  "Van": { brand: "Bridgestone", model: "Duravis R660", summary: "Durable, long-life van tyre, premium quality." },
};

const budgetRecommendation = {
  "Hatchback": { brand: "Avon", model: "ZT7", summary: "Solid UK-made value choice for hatchbacks." },
  "Saloon": { brand: "Hankook", model: "Ventus Prime 4", summary: "Budget-friendly, good all-rounder for saloons." },
  "SUV": { brand: "Dunlop", model: "SP QuattroMaxx", summary: "Affordable SUV grip and comfort." },
  "Van": { brand: "Hankook", model: "Vantra LT", summary: "Value van tyre with good mileage." },
};

function TyreAdvisor() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);

  const handleOption = (id, option) => {
    setAnswers({ ...answers, [id]: option });
  };

  const handleNext = () => setStep(step + 1);

  if (step >= questions.length) {
    const vehicle = answers.vehicle || "Hatchback";
    const showBudget = answers.priority === "Budget";
    // Always show premium and, if selected, budget option
    return (
      <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
        <div style={{ maxWidth: 480, margin: "40px auto", padding: 24, borderRadius: 16, boxShadow: "0 4px 24px #eee" }}>
          <img src="https://www.tyrereviews.com/images/logo.svg" alt="Tyre Reviews" style={{ height: 32, marginBottom: 8 }} />
          <img src="https://www.blackcircles.com/ui/img/logo.svg" alt="Black Circles" style={{ height: 32, marginBottom: 16, marginLeft: 12 }} />
          <h2>Recommended Tyres</h2>
          <div style={{ margin: "24px 0", padding: 16, border: "2px solid red", borderRadius: 12 }}>
            <b>{premiumRecommendations[vehicle].brand} {premiumRecommendations[vehicle].model}</b>
            <br />
            <span>{premiumRecommendations[vehicle].summary}</span>
            <br /><span style={{ color: "red", fontWeight: "bold" }}>Premium</span>
          </div>
          {showBudget &&
            <div style={{ margin: "24px 0", padding: 16, border: "2px solid #999", borderRadius: 12 }}>
              <b>{budgetRecommendation[vehicle].brand} {budgetRecommendation[vehicle].model}</b>
              <br />
              <span>{budgetRecommendation[vehicle].summary}</span>
              <br /><span style={{ color: "#555", fontWeight: "bold" }}>Budget Option</span>
            </div>
          }
          <div style={{ fontSize: 12, marginTop: 32, color: "#999" }}>
            Powered by <a href="https://www.tyrereviews.com" style={{ color: "red" }}>TyreReviews.co.uk</a> & <a href="https://www.blackcircles.com" style={{ color: "red" }}>BlackCircles.com</a>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[step];
  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 480, margin: "40px auto", padding: 24, borderRadius: 16, boxShadow: "0 4px 24px #eee" }}>
        <img src="https://www.tyrereviews.com/images/logo.svg" alt="Tyre Reviews" style={{ height: 32, marginBottom: 8 }} />
        <img src="https://www.blackcircles.com/ui/img/logo.svg" alt="Black Circles" style={{ height: 32, marginBottom: 16, marginLeft: 12 }} />
        <h2>Tyre Adviser</h2>
        <p style={{ fontSize: 20, marginBottom: 32 }}>{q.text}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
          {q.options.map(option => (
            <button
              key={option}
              onClick={() => handleOption(q.id, option)}
              style={{
                background: "#e10600",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "20px 32px",
                fontSize: 18,
                fontWeight: "bold",
                flex: "1 1 45%",
                margin: "6px 0",
                boxShadow: "0 2px 8px #eee",
                cursor: "pointer"
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          style={{
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            padding: "16px 40px",
            fontSize: 18,
            marginTop: 12,
            fontWeight: "bold",
            cursor: "pointer"
          }}
          disabled={!answers[q.id]}
        >
          Next
        </button>
        <div style={{ fontSize: 12, marginTop: 32, color: "#999" }}>
          Powered by <a href="https://www.tyrereviews.com" style={{ color: "red" }}>TyreReviews.co.uk</a> & <a href="https://www.blackcircles.com" style={{ color: "red" }}>BlackCircles.com</a>
        </div>
      </div>
    </div>
  );
}

export default TyreAdvisor;
