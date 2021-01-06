import helpers from "./helpers";

const render = (() => {
  const renderProjects = (projectsArray, project) => {
    const projectsList = document.getElementById("projects");
    const projectsPulldown = document.getElementById("todo-project-pulldown");
    helpers.removeAllChildNodes(projectsList);
    helpers.removeAllChildNodes(projectsPulldown);
    projectsArray.forEach((proj) => {
      const projectLi = document.createElement("li");
      projectLi.classList.add("project");
      projectLi.dataset.name = proj.name;

      const projectName = document.createElement("div");
      projectName.dataset.name = proj.name;
      if (proj.name === project.name) {
        projectName.classList.add("selected");
      }
      projectName.textContent = proj.name;
      projectName.classList.add("project-name");
      projectLi.appendChild(projectName);
      if (proj.name !== "Home") {
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.classList.add("remove-project");
        removeBtn.dataset.name = proj.name;
        projectLi.appendChild(removeBtn);
      }
      projectsList.appendChild(projectLi);
      const projectOption = document.createElement("option");
      projectOption.value = proj.name;
      projectOption.textContent = proj.name;
      projectOption.dataset.name = proj.name;
      if (proj.name === project.name) {
        projectOption.selected = true;
      }
      projectsPulldown.appendChild(projectOption);
    });
  };
  const renderTodos = (project) => {
    const todosList = document.getElementById("todos");
    helpers.removeAllChildNodes(todosList);
    project.todos.forEach((todo) => {
      const todoLi = document.createElement("li");
      todoLi.classList.add("todo");
      todoLi.dataset.name = todo.name;
      todoLi.dataset.proj = project.name;
      const todoCheck = document.createElement("input");
      todoCheck.type = "checkbox";
      todoCheck.classList.add("checkbox");
      if (todo.checked === true) {
        todoCheck.checked = true;
        todoLi.classList.add("completed");
      }
      const todoName = document.createElement("div");
      todoName.textContent = todo.name;
      todoName.classList.add("todoName");
      const todoDate = document.createElement("div");
      todoDate.textContent = todo.dueDate;
      const todoRemove = document.createElement("button");
      todoRemove.textContent = "x";
      todoRemove.classList.add("remove-todo");
      todoRemove.dataset.name = todo.name;

      const details = document.createElement("div");
      details.classList.add("details");
      details.dataset.details = todo.name;
      const todoDesc = document.createElement("div");
      todoDesc.textContent = `Description: ${todo.description}`;
      const todoPriority = document.createElement("div");
      todoPriority.textContent = `Priority: ${todo.priority}`;
      details.appendChild(todoPriority);
      details.appendChild(todoDesc);

      todoLi.appendChild(todoCheck);
      todoLi.appendChild(todoName);
      todoLi.appendChild(todoDate);
      todoLi.appendChild(todoRemove);
      todoLi.appendChild(details);
      todosList.appendChild(todoLi);
    });
  };

  return { renderProjects, renderTodos };
})();

export default render;
