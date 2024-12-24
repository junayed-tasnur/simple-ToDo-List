const taskAdd = document.querySelector("#taskAdd");
const addBtn = document.querySelector("#addBtn");
const toDoList = document.querySelector("#toDoList");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // alert when value is empty
  if (taskAdd.value === "") {
    alert("Please enter a task");
    return;
    }
    // Create a list item
  const listItem = document.createElement("li");
  listItem.className =
        "list-group-item flex justify-between items-center py-2 px-3 bg-gray-100 rounded shadow list-decimal";
    
    // Create a span element in to the list item
    const toDoSpan = document.createElement("span");
    toDoSpan.textContent = taskAdd.value;

    
});
