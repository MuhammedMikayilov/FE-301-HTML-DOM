// const inputText = document.getElementById("input-text");
// const button = document.getElementsByTagName("button");
// const heading = document.getElementsByClassName("heading");

const input = document.querySelector("#input-text");
const buttons = document.querySelectorAll("button");
const heading = document.querySelector(".heading span");

// console.log(inputText);
// console.log(button);
// console.log(heading);]

// input.addEventListener("blur", (e) => {
//   //   console.log(e.target.value);
//   //   heading.textContent = e.target.value;
//   console.log("Focus");
// });

buttons.forEach((item) => {
  //   item.onclick = () => {
  //     console.log("SAlam");
  //   };
  //   console.log(item);
  // item.addEventListener("click", (e) => {
  //   //   heading.textContent = input.value;
  //   console.log(this);
  // });
  item.addEventListener("dblclick", function (e) {
    // heading.textContent = input.value;
    console.log(this);
  });
});
