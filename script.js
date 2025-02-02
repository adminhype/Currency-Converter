// Zugriff auf die DOM-Elemente
const euroField = document.getElementById("euroField");
const usdField = document.getElementById("usd");

// Funktion zur Umrechnung von Euro in USD
function calc() {
  let euro = parseFloat(euroField.value);
  let result = euro * 0.981;
  usdField.value = result.toFixed(2);
}

// Funktion zur Umrechnung von USD in Euro
function calc2() {
  let usd = parseFloat(usdField.value);
  let result = usd * 1.12;
  euroField.value = result.toFixed(2);
}