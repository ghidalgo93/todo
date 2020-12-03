// Removes all child nodes from a given DOM element
// input: DOM element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const isRequired = (param) => {
  throw Error(`${param} is required`);
};

function validateString(e) {
  const text = e.target.value;
  if (typeof text !== "string" || text === "") {
    throw new Error("Must be a string");
  }
  return text;
}

function createProjectElem(projectObj, domProjectContainer) {
  const projectElem = document.createElement("div");
  projectElem.dataset.title = projectObj.getTitle();
  projectElem.classList.add("row-container");

  const projectTitle = document.createElement("li");
  projectTitle.innerHTML = projectObj.getTitle();
  projectTitle.classList.add("projectTitle");
  projectTitle.dataset.title = projectObj.getTitle();
  projectElem.appendChild(projectTitle);

  if (projectObj.getTitle() !== "Home") {
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "x";
    removeBtn.classList.add("removeProject");
    removeBtn.dataset.title = projectObj.getTitle();
    projectElem.appendChild(removeBtn);
  }

  domProjectContainer.appendChild(projectElem);
  return projectElem;
}

// function updateProjects(projectContainter) {
//   const domProjects = document.getElementById("projects");
//   removeAllChildNodes(domProjects);
//   projectContainter.getProjects().forEach((project) => {
//     createProjectElem(project, domProjects);
//   });
// }

function createTodoElem(todoObj, domTodoContainer) {
  const todoElem = document.createElement("div");
  todoElem.classList.add("row-container");

  const todoTitle = document.createElement("li");
  todoTitle.textContent = todoObj.getTitle();
  todoElem.appendChild(todoTitle);

  domTodoContainer.appendChild(todoElem);
}

function showTodos(todos) {
  const domTodos = document.getElementById("todos");
  removeAllChildNodes(domTodos);
  todos.forEach((todo) => {
    createTodoElem(todo, domTodos);
  });
}

export {
  showTodos,
  createProjectElem,
  removeAllChildNodes,
  isRequired,
  validateString,
};
