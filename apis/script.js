// const img = document.querySelector("img");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => res.json())
//     .then((res) => {
//       img.src = res.message;
//     });
// });

// setTimeout(() => {
//   console.log("set timeout fun");
// });

// const p = new Promise((res, rej) => {
//   res("resolved");
// });
// p.then((data) => {
//   console.log(data,'this is from a promise ');
// });

// fetch("https://dummyjson.com/users")
//   .then((res) => res.json())
//   .then((usersData) => {
//     return fetch(`https://dummyjson.com/posts/${usersData.users[10].id}`);
//   })
//   .then((res) => res.json())
//   .then((postsData) => {
//     return fetch(`https://dummyjson.com/comments/${postsData.id}`);
//   })
//   .then((res) => res.json())
//   .then((commentsData) => fetch(`https://dummyjson.com/users/${commentsData.id}`))
//   .then((res)=>res.json())
//   .then((userData)=>console.log(userData.id))
//   .catch((err)=>console.log(err))

fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((usersData) => {
    return `${usersData.users[10].id}`;
    return fetch(`https://dummyjson.com/posts/${usersData.users[10].id}`);
  })
  .then((res) => {
    return fetch(`https://dummyjson.com/posts/${res}`);
  })
  .then((res) => res.json())
  .then((data) => console.log(data));
