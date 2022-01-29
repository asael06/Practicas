// const changeColor = () => {
//   normalText[0].classList.add("message");
// };

// actionButton.addEventListener("click", changeColor);

// class User {
//   constructor() {
//     let name;
//     let age;
//     let password;
//   }
// }

// const saveData = (User) => {
//   const name = User.name;
//   const age = User.age;
//   const password = User.password;
//   console.log("save successfull");
//   console.log(name, age, password);
// };

// const admin = new User();

// admin.name = "Arturo";
// admin.age = "26";
// admin.password = "1234";
// saveData(admin);

const user = {
  name: "Arturo",
  age: "26",
  password: "1234",
};

const usersArray = [
  {
    name: "Arturo1",
    age: "26",
    password: "1234",
  },
  {
    name: "Arturo2",
    age: "26",
    password: "1234",
  },
  {
    name: "Arturo3",
    age: "26",
    password: "1234",
  },
];

const normalText = document.querySelectorAll(".normal-text");

const actionButton = document.getElementById("action-button");

const Container = (usersArray) => {
  let finalData = "";
  usersArray.forEach(({ name, age, password }) => {
    finalData =
      finalData + `<div><p>${name}</p><p>${age}</p><p>${password}</p></div>`;
  });

  return finalData;
};

const showData = () => {
  console.log(normalText);
  normalText[0].innerHTML = Container(usersArray);
};

actionButton.addEventListener("click", showData);
