function addToDo() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
  
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => li.classList.toggle("completed"));
  
    const label = document.createElement("label");
    label.textContent = task;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => li.remove());
  
    li.append(checkbox, label, deleteBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  