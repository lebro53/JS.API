const buttonAdd = document.querySelectorAll(".button-signUp");

buttonAdd.forEach((button) => {
  button.addEventListener("click", (e) => {
    const trainEl = button.closest(".train");

    const maxMembers = trainEl.querySelector(".max-members");
    const maxValue = parseInt(maxMembers.textContent);

    const inputNameEl = trainEl.querySelector(".name").value;
    const ulTrainEl = trainEl.querySelector(".train-memberList");

    const maxMembserEl = trainEl.querySelector(".maxValue");

    if (ulTrainEl.childNodes.length < maxValue) {
      if (inputNameEl !== "") {
        const liEl = document.createElement("li");
        liEl.innerHTML = `<span>${inputNameEl}</span> 
      <button class="delete">Отменить запись</button>`;
        ulTrainEl.appendChild(liEl);
        trainEl.querySelector(".name").value = "";
      }
    } else {
      button.hidden;
      trainEl.querySelector(".name").value = "";
      maxMembserEl.style.display = "block";
    }
    const buttonDelete = trainEl.querySelectorAll(".delete");
    buttonDelete.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.target.closest("li").remove();
        maxMembserEl.style.display = "none";
      });
    });
  });
});
