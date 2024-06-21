const todoForm = document.querySelector(".form-todo");
const todoInput = todoForm.querySelector("input[type='text']");
const todoList = document.createElement("ul");
document.querySelector(".section-todo").appendChild(todoList);

const signupForm = document.querySelector(".signup-form");

// Add Todo
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoText = todoInput.value.trim();
//   if (todoText !== "") {
    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(todoItem);
    });

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    todoInput.value = "";
//   }
});

// Sign Up Form Submission
// signupForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const username = signupForm.querySelector("#username").value.trim();
//   const password = signupForm.querySelector("#password").value.trim();
//   const confirmPassword = signupForm.querySelector("#confirmPassword").value.trim();
//   const phone = signupForm.querySelector("#phone").value.trim();
//   const email = signupForm.querySelector("#email").value.trim();
//   const about = signupForm.querySelector("#about").value.trim();

//   if (password !== confirmPassword) {
//     alert("Passwords do not match");
//     return;
//   }

//   const signupData = {
//     username,
//     password,
//     phone,
//     email,
//     about
//   };

//   console.log("Sign Up Data:", signupData);
//   alert("Sign Up Successful!");

//   signupForm.reset();
// });
