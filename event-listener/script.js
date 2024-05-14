// const usernameInput=document.querySelector('#username')
// const form=document.querySelector('form')
// usernameInput.addEventListener('click',()=>{
//     console.log('input filed clicked')
// })
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log('form submited')
// })

const card = document.querySelector(".card");
const container = document.querySelector(".container");
let count = 1;

card.addEventListener("click", () => {
  let otherCard = document.createElement("div");
  otherCard.classList.add("card");
  otherCard.innerText = count;
  container.append(otherCard);

  count++;

  otherCard.addEventListener("click", () => {
    otherCard.remove();
  });
});
