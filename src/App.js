import React, { useState } from "react";
import "./App.css";

const questions = [
  { id: "vehicle", text: "What type of vehicle is it?", options: ["Hatchback", "Saloon", "SUV", "Van"] },
  { id: "priority", text: "What matters most?", options: ["Grip/Performance", "Longevity", "Comfort", "Budget"] },
  { id: "environment", text: "Where do you mostly drive?", options: ["City", "Motorway", "Rural", "Mixed"] },
  { id: "weather", text: "Usual weather conditions?", options: ["Wet", "Dry", "Snow/Ice", "Mixed"] },
  { id: "brand_pref", text: "Any tyre brand preference?", options: [
    "No preference", "Michelin", "Pirelli", "Goodyear", "Continental", "Dunlop", "Bridgestone", "Hankook", "Avon"
  ] },
];

const premiumRecommendations = {
  "Hatchback": { brand: "Michelin", model: "Primacy 4+", summary: "Premium comfort, safety and longevity for hatchbacks." },
  "Saloon": { brand: "Continental", model: "PremiumContact 7", summary: "Top-tier saloon tyre, outstanding wet & dry grip." },
  "SUV": { brand: "Goodyear", model: "Eagle F1 Asymmetric SUV", summary: "Premium grip and stability for modern SUVs." },
  "Van": { brand: "Bridgestone", model: "Duravis R660", summary: "Durable, long-lasting premium van tyre." },
};

const budgetRecommendations = {
  "Hatchback": { brand: "Avon", model: "ZT7", summary: "Solid, affordable UK-made choice for hatchbacks." },
  "Saloon": { brand: "Hankook", model: "Ventus Prime 4", summary: "Budget-friendly, good all-rounder for saloons." },
  "SUV": { brand: "Dunlop", model: "SP QuattroMaxx", summary: "Affordable SUV grip and comfort." },
  "Van": { brand: "Hankook", model: "Vantra LT", summary: "Value van tyre, good mileage." },
};

function App() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);

  const handleOption = (id, option) => {
    setAnswers({ ...answers, [id]: option });
  };

  const handleNext = () => setStep(step + 1);

  if (step >= questions.length) {
    const vehicle = answers.vehicle || "Hatchback";
    const showBudget = answers.priority === "Budget";
    return (
      <div className="adviser-bg">
        <div className="adviser-box">
          <div className="adviser-header">
            <img src="https://www.tyrereviews.com/images/logo.svg" alt="Tyre Reviews" className="brand-logo" />
            <img src="https://www.blackcircles.com/ui/img/logo.svg" alt="Black Circles" className="brand-logo" />
          </div>
          <h2>Recommended Tyres</h2>
          <div className="result-box premium">
            <b>{premiumRecommendations[vehicle].brand} {premiumRecommendations[vehicle].model}</b>
            <div>{premiumRecommendations[vehicle].summary}</div>
            <div className="result-label premium-label">Premium</div>
          </div>
          {showBudget && (
            <div className="result-box budget">
              <b>{budgetRecommendations[vehicle].brand} {budgetRecommendations[vehicle].model}</b>
              <div>{budgetRecommendations[vehicle].summary}</div>
              <div className="result-label budget-label">Budget Option</div>
            </div>
          )}
          <div className="adviser-footer">
            Powered by <a href="https://www.tyrereviews.com">TyreReviews.co.uk</a> &amp; <a href="https://www.blackcircles.com">BlackCircles.com</a>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[step];
  return (
    <div className="adviser-bg">
      <div className="adviser-box">
        <div className="adviser-header">
          <img src="https://www.tyrereviews.com/images/logo.svg" alt="Tyre Reviews" className="brand-logo" />
          <img src="https://www.blackcircles.com/ui/img/logo.svg" alt="Black Circles" className="brand-logo" />
        </div>
        <h2>Tyre Adviser</h2>
        <p className="question">{q.text}</p>
        <div className="options">
          {q.options.map(option => (
            <button
              key={option}
              onClick={() => handleOption(q.id, option)}
              className="option-btn"
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="next-btn"
          disabled={!answers[q.id]}
        >
          Next
        </button>
        <div className="adviser-footer">
          Powered by <a href="https://www.tyrereviews.com">TyreReviews.co.uk</a> &amp; <a href="https://www.blackcircles.com">BlackCircles.com</a>
        </div>
      </div>
    </div>
  );
}

export default App;
