let empData = [];
if (localStorage.empData != null) {
  empData = JSON.parse(localStorage.empData);
  render();
}

let userName;
let userLevel;
let userID;
let userSalary;
let userDepartment;
let userImg;

let DataCollected = document.getElementById("form");

DataCollected.addEventListener("submit", function (event) {

  userName = event.target.username.value;
  userLevel = event.target.userLevel.value;
  userID = event.target.userID.value;
  userDepartment = event.target.userDepartment.value;
  userImg = event.target.userimg.value;
  userSalary = calculateSalary()

  DataCollected.reset();

  let Employee = new Person(userName, userLevel, userID, userDepartment, userImg, userSalary);

  empData.push(Employee);
  localStorage.setItem('empData', JSON.stringify(empData));
  userSalary = calculateSalary()
  render();
});

function Person(userName, userLevel, userID, userDepartment, userImg, userSalary) {
  this.userName = userName;
  this.userID = userID;
  this.userLevel = userLevel;
  this.userDepartment = userDepartment;
  this.userImg = userImg;
  this.userSalary = userSalary;
}

function calculateSalary() {
  let selectedValue = document.getElementById("userLevel").value;
  let Salary;
  if (selectedValue == "Junior") {
    Salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    console.log(Salary, selectedValue);
    return Salary
  }
  else if (selectedValue == "Mid-Senior") {
    Salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    console.log(Salary, selectedValue);
    return Salary
  }
  else {
    Salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    console.log(Salary, selectedValue);
    return Salary
  }
}

function render() {
  for (let i = 0; i < empData.length; i++) {

    let emcard = document.getElementById("Employee-card");
    let divContainer = document.createElement('div');
    let img0 = document.createElement('img');
    img0.src = `${empData[i].userImg}`;
    let divData = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = ` ${empData[i].userName} : ${empData[i].userID}`;
    let p2 = document.createElement("p");
    p2.textContent = `  ${empData[i].userDepartment} : ${empData[i].userLevel}`;
    let p3 = document.createElement("p");
    p3.textContent = `Salary: ${empData[i].userSalary}`;

    divContainer.style.boxShadow = " 5px 5px 5px #649EA2";
    img0.style.width = "60%"

    divData.appendChild(p1);
    divData.appendChild(p2);
    divData.appendChild(p3);
    divContainer.appendChild(img0);
    divContainer.appendChild(divData);
    emcard.appendChild(divContainer);

  }
}