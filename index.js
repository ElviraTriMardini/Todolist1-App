// 1. reference html element in js
const formTask = document.querySelector(".form-task");

// 2. menambahkan event listener di element form
formTask.addEventListener("submit", (event) => {
    event.preventDefault();
   
// 3. reference html element input
const inputform = document.querySelector(".input-form");
console.log(inputform.value);

// 4. reference html element ul / wrapper list
const wrapperlist = document.querySelector(".task-list-wrapper");

// 5. creat <li> using jus
const tasklist = document.createElement("li");

// 6. masukkan input value ke <li> 
tasklist.innerHTML = inputform.value;

// 7. append <li> ke <ul>
wrapperlist.append(tasklist);

// 8. menghilangkan karakter di dalam input
inputform.value = "";
});