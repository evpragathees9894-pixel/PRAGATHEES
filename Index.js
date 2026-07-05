const advisoryForm = document.getElementById("advisoryForm");
const resultCard = document.getElementById("resultCard");
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

advisoryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const soil = document.getElementById("soil").value;
  const season = document.getElementById("season").value;
  const water = document.getElementById("water").value;
  const land = document.getElementById("land").value;

  let crop = "";
  let fertilizer = "";
  let irrigation = "";
  let tip = "";

  if (season === "kharif") {
    if (water === "high") {
      crop = "Paddy (Rice)";
      fertilizer = "Use organic manure before sowing and apply NPK fertilizer in recommended quantities.";
      irrigation = "Maintain shallow water levels and avoid water stagnation during early growth.";
      tip = "Monitor for pests such as stem borer and leaf folder.";
    } else {
      crop = "Millet or Groundnut";
      fertilizer = "Apply farmyard manure and balanced NPK fertilizer based on soil testing.";
      irrigation = "Use drip irrigation or water only when the soil becomes dry.";
      tip = "Mulching can help retain moisture in the soil.";
    }
  } else if (season === "rabi") {
    if (soil === "black" || soil === "loamy") {
      crop = "Wheat or Chickpea";
      fertilizer = "Use compost and apply nitrogen fertilizer in split doses.";
      irrigation = "Irrigate at important crop stages such as flowering and grain formation.";
      tip = "Remove weeds during the first 30 days for better yield.";
    } else {
      crop = "Mustard or Pulses";
      fertilizer = "Use phosphorus-rich fertilizer along with organic compost.";
      irrigation = "Avoid excess irrigation because it can affect root development.";
      tip = "Use disease-resistant seeds whenever possible.";
    }
  } else {
    if (water === "low") {
      crop = "Millet, Sesame, or Green Gram";
      fertilizer = "Use compost, bio-fertilizer, and limited NPK fertilizer.";
      irrigation = "Use drip irrigation and water during early morning or evening.";
      tip = "Choose short-duration crop varieties to reduce water use.";
    } else {
      crop = "Vegetables such as Tomato, Brinjal, or Okra";
      fertilizer = "Use organic manure and apply fertilizer in small doses at regular intervals.";
      irrigation = "Provide regular irrigation without overwatering.";
      tip = "Inspect leaves weekly for pests and fungal infections.";
    }
  }

  resultCard.innerHTML = `
    <div class="advisory-result">
      <p class="tag">YOUR FARM RECOMMENDATION</p>
      <h3>🌾 Recommended Crop: ${crop}</h3>
      <p><strong>Land Area:</strong> ${land} acres</p>
      <p><strong>Soil Type:</strong> ${soil.charAt(0).toUpperCase() + soil.slice(1)} Soil</p>
      <p><strong>Fertilizer Advice:</strong> ${fertilizer}</p>
      <p><strong>Irrigation Advice:</strong> ${irrigation}</p>
      <p><strong>Farmer Tip:</strong> ${tip}</p>
    </div>
  `;
});
