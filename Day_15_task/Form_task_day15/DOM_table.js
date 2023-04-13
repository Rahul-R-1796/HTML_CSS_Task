
// DOM manipulation to append form values to table
  document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var pinCode = document.getElementById("pinCode").value;
  var gender = document.getElementById("gender").value;
  var food = Array.from(document.getElementById("food").selectedOptions).map(option => option.value).join(", ");
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  // Append form values to table
  var table = document.getElementById("dataTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = address;
  cell4.innerHTML = pinCode;
  cell5.innerHTML = gender;
  cell6.innerHTML = food;
  cell7.innerHTML = state;
  cell8.innerHTML = country;

  // Clear form fields
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pinCode").value = "";
  document.getElementById("gender").value = "male";
  document.getElementById("food").value = "";
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
});
