// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  console.log("Calculating...");
  // UI Vars
  const format = document.getElementById("format");
  const device = document.getElementById("device");
  const source = document.getElementById("source");

  var monthlyPayment = format.options[format.selectedIndex].value;
  var totalPayment = device.options[device.selectedIndex].value;
  var totalInterest = source.options[source.selectedIndex].value;

  // const principal = parseFloat(amount.value);
  // const calculatedInterest = parseFloat(interest.value);
  // const calculatedPayments = parseFloat(years.value);

  // Compute monthly payment

  // const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  // const monthly = (principal * x * calculatedInterest) / (x - 1);

  select.onchange = function () {
    monthlyPayment.value = format.value;
    totalPayment.value = device.value;
    totalInterest.value = source.value;
    // Show results
    document.getElementById("results").style.display = "block";
    // Hide loader
    document.getElementById("loading").style.display = "none";
  };
}

// Show Error
function showError(error) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Hide loader
  document.getElementById("loading").style.display = "none";

  // Create a div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector(".alert").remove();
}
