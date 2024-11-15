// Data for the travel information
const travelInfo = {
  name: "Ai Vo", // Your name
  countries: [
    { name: "Vietnam", year: 2024 },
    { name: "Singapore", year: 2023 },
    { name: "Thailand", year: 2019 },
    { name: "Korea", year: 2018 }
  ]
};

// Function to send travel info to the local API
fetch("http://localhost:3008/api/countries", { //is this what i'm supposed to do...
  method: "POST",
  headers: {
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(travelInfo)
})

  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Show the response message in the div
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = data.message; // Display message from the server
  })
  .catch(error => {
    console.error("Error:", error);
  });

// Add event listener to the submit button
document.getElementById("submitButton").addEventListener("click", sendTravelInfo);
