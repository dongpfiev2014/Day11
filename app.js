const input = document.getElementById("input");
const button = document.getElementById("button");
const todolist = document.getElementById("todo-list");

button.addEventListener("click", () => {
  if (!input.value) return alert("nhập lại");
  const li = document.createElement("li");
  li.innerText = input.value;

  todolist.appendChild(li);

  input.value = "";
});

localStorage.setItem("jet", "zoro");

import { sum } from "./modules/HandleNumber.js";
// import { sum2 } from "./modules/HandleNumber.js";
import sum2 from "./modules/HandleNumber.js";
import { sliceString } from "./modules/HandleString.js";

sum(1, 2);
console.log(sum(99, 100));
console.log(sum2(99, 100));
const template = "template1";
const slicedString = sliceString("12g34g", 3);
console.log(`${template} + ${slicedString}`);

const num5 = [1, 2, 3, 4, 5];
const copiednum5 = [0, ...num5, 6]; //Spread
console.log(copiednum5);

//Rest
function Resttest(a, ...Rest) {
  console.log(a);
  console.log(...Rest);
}

Resttest("5", "3", "5", "2");

//Array functions
const num10 = [1, 2, 3, 4, 5];
for (let ind in num10) {
  console.log(ind, num10[ind]);
}
