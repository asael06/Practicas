let buttonSave = null;
let txtName = null;
let assistantsList = null;
let closeButton = null;
let txtPreview = null;

window.onload = () => {
  buttonSave = document.getElementById("btnSave");
  txtName = document.getElementById("txtName");
  assistanList = document.getElementById("assitants-list");
  closeButton = document.querySelectorAll(".close");
  txtPreview = document.getElementById("txtPreview");

  buttonSave.addEventListener("click", () => {
    const textName = document.createElement("p");
    const btnClose = document.createElement("button");
    btnClose.innerHTML = "x";
    textName.innerHTML = txtName.value;

    btnClose.addEventListener("click", (evt) => {
      evt.target.parentElement.remove();
    });

    const newAssistant = document.createElement("div");
    newAssistant.classList.add("assistant");
    newAssistant.appendChild(textName);
    newAssistant.appendChild(btnClose);
    assistanList.appendChild(newAssistant);
  });

  txtName.addEventListener("keyup", (e) => {
    if (e.target.value) {
      txtPreview.innerHTML = e.target.value;
    } else txtPreview.innerHTML = "Preview";
  });
};
