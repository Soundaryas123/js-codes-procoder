const hi = () => {
  console.log("hhiiiiiiiiii");
};
const sriHi = () => {
  console.log("hi using event listner");
};

const h1 = document.querySelector("h1");

h1.addEventListener("click", sriHi);
h1.addEventListener("click", () => {
  console.log("kuldulli");
});

const card = document.querySelector(".card");
const container = document.querySelector(".container");
let count = 1;

// card.addEventListener("click", () => {
//   let otherCard = card.cloneNode()
 
//   otherCard.innerText=count
//   container.append(otherCard);
 
//   count++;
// });
card.addEventListener("click", () => {
  let otherCard = document.createElement("div");
  otherCard.classList.add("card");
  otherCard.innerText=count
  container.append(otherCard);
  console.log("first");
  count++;
});
