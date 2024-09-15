
function handleFormSubmit() {

  const nameInput = document.getElementById("name-input");
  const ageInput = document.getElementById("age-input");
  const experienceInput = document.getElementById("experience-input");


  const formData = {
    name: nameInput.value,
    age: ageInput.value,
    experience: experienceInput.value,
  };


  const formDataArray = [formData];

  const displayContainer = document.createElement("div");
  displayContainer.className = "display-container";

  formDataArray.map((data) => {
    const item = document.createElement("div");
    item.textContent = `Name: ${data.name}, Age: ${data.age}, Experience: ${data.experience}`;
    displayContainer.appendChild(item);
  });

  document.body.appendChild(displayContainer);
  nameInput.value = "";
  ageInput.value = "";
  experienceInput.value = "";

  return false; 
}
