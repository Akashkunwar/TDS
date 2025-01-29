function fillForm() {
  // JSON object to auto-fill the form
  const jsonData = {
    name: "John Doe",
    phone: "+1234567890",
    age: 28,
    gender: "male",
    address: "123 Elm Street",
    status: "single",
    other: "None",
    source: "form",
    description: "Detail about the document",
  };

  // Fill in the form fields
  document.getElementById("name").value = jsonData.name;
  document.getElementById("phone").value = jsonData.phone;
  document.getElementById("age").value = jsonData.age;
  document.getElementById("gender").value = jsonData.gender;
  document.getElementById("address").value = jsonData.address;
  document.getElementById("status").value = jsonData.status;
  document.getElementById("other").value = jsonData.other;
  document.getElementById("source").value = jsonData.source;
  document.getElementById("description").value = jsonData.description;

  // After filling, submit the form programmatically
  document.getElementById("infoForm").submit();
}
