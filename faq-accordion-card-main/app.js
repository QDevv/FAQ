let firstQ = document.querySelector(".Question1");
let secondQ = document.querySelector(".Question2");
let ThirdQ = document.querySelector(".Question3");
let FourthQ = document.querySelector(".Question4");
let FifthQ = document.querySelector(".Question5");
let Ans1 = document.querySelector(".A1");
let Ans2 = document.querySelector(".A2");
let Ans3 = document.querySelector(".A3");
let Ans4 = document.querySelector(".A4");
let Ans5 = document.querySelector(".A5");

let firstFunc = () => {
  Ans1.classList.toggle("show");
  document.querySelector(".bbt1").classList.toggle("remove-borderBottom");
  document.querySelector(".icon-wrapper").classList.toggle("upside-down");
  firstQ.classList.toggle("bold");
};
firstQ.addEventListener("click", firstFunc);

let secFunc = () => {
  Ans2.classList.toggle("show");
  document.querySelector(".bbt2").classList.toggle("remove-borderBottom");
  document.querySelector(".ic1").classList.toggle("upside-down");
  secondQ.classList.toggle("bold");
};
secondQ.addEventListener("click", secFunc);

let Thirdunc = () => {
  Ans3.classList.toggle("show");
  document.querySelector(".bbt3").classList.toggle("remove-borderBottom");
  document.querySelector(".ic2").classList.toggle("upside-down");
  ThirdQ.classList.toggle("bold");
};
ThirdQ.addEventListener("click", Thirdunc);

let FourthFunc = () => {
  Ans4.classList.toggle("show");
  document.querySelector(".bbt4").classList.toggle("remove-borderBottom");
  document.querySelector(".ic3").classList.toggle("upside-down");
  FourthQ.classList.toggle("bold");
};
FourthQ.addEventListener("click", FourthFunc);

let FifthFunc = () => {
  Ans5.classList.toggle("show");
  document.querySelector(".bbt5").classList.toggle("remove-borderBottom");
  document.querySelector(".ic4").classList.toggle("upside-down");
  FifthQ.classList.toggle("bold");
};
FifthQ.addEventListener("click", FifthFunc);
