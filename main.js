import { customFetch } from "./helpers.js";
import { endpoints } from "./endpoints.js";
import { posts } from "./elements.js";
import { users } from "./elements.js";
import { getUsersBtn } from "./elements.js";
import { usersList } from "./elements.js";
import { endpointss } from "./endpoints.js";

getUsersBtn.addEventListener("click", function () {
  customFetch(endpoints.users)
  .then((data) => {
    data = JSON.parse(data)
    data.forEach(user => {
        usersList.innerHTML += `<li>${user.name}</li><li>${user.age}</li><li>${user.username}</li>`
    });
  })

  customFetch(endpointss.posts)
  .then((data) => {
    data = JSON.parse(data)
    data.forEach(user => {
        usersList.innerHTML += `<h2>${user.title}</h2><p>${user.body}</p>`
        console.log(data);
    });

  })
  

        
});
