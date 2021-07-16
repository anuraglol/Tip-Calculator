var percentage;
function calc() {
  var billValue = document.getElementById("bill").value;
  var people = document.getElementById("people").value;
  billValue = parseInt(billValue);
  var totalTip = (percentage / 100) * billValue;
  var tipPerPeople = totalTip / people;
  var totalBill = billValue + totalTip;
  document.getElementById("tip").innerHTML = tipPerPeople;
  document.getElementById("total").innerHTML = totalBill;
}
