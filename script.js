function addTask() {
  const task = document.querySelector("#task-input").value;
  if (task) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "list-group-item-success");
    listItem.innerHTML = `${task}
   <button class="btn btn-danger btn-sm mx-2" onclick="delTask(this)">X</button>
   <button class="btn btn-success btn-sm nx-2" onclick="doneTask(this)">✓</button>`;
    document.querySelector("#parentList").appendChild(listItem);
    document.querySelector("#task-input").value = "";

    saveData();
  }
}

//===============================Explanation=====================================
//   1. At first catch the input.
//   2. Create a new list child.
//   3. Add innerHTML to hold the input and the buttons.
//   4. Call main parent list and append the child list.

function delTask(button) {
  const list_item = button.parentNode; //Button's parentNode is List items.
  const parent = list_item.parentNode; //List items's parentNode is Unorder List.
  parent.removeChild(list_item);
  saveData();
}

function doneTask(button) {
  button.style.display = "none";
  const listItem = button.parentNode;
  listItem.classList.add("list-group-item-dark");
  listItem.classList.remove("list-group-item-success");
  listItem.style.textDecoration = "line-through";
  saveData();
}

//=============================SaveData & ShowData===============================
function saveData() {
  localStorage.setItem("data", document.querySelector("#parentList").innerHTML);
}

function showTask() {
  const data = localStorage.getItem("data");
  if (data) {
    document.querySelector("#parentList").innerHTML = data;
  }
}

showTask();
