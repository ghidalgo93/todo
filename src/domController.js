import { removeAllChildNodes } from "./helpers";

const domController = (() => {
  // dom elements
  const _todoContainer = document.getElementById("todo-container");

  const _todoInp = document.getElementById("todo-item");
  const getTodoTitle = () => _todoInp.value;
  const clearTodoTitle = () => {
    _todoInp.value = "";
    return _todoInp;
  };

  const _todoDuedate = document.getElementById("todo-duedate");
  const getDuedate = () => _todoDuedate.value;

  const _projectPullDwn = document.getElementById("project-pulldown");
  const getProjectTitle = () => _projectPullDwn.value;

  const _addBtn = document.getElementById("add-btn");
  const getAddTodoBtn = () => _addBtn;

  const _addProjectBtn = document.getElementById("add-project");
  const getAddProjectBtn = () => _addProjectBtn;

  // dom manipulation functions

  const renderProjectsPulldown = (container) => {
    const projects = container.getProjects();

    for (const project of projects) {
      const option = document.createElement("option");
      option.value = project.getTitle();
      option.innerHTML = project.getTitle();
      _projectPullDwn.appendChild(option);
    }
  };

  const resetInputs = (container) => {
    clearTodoTitle();
    removeAllChildNodes(_projectPullDwn);
    renderProjectsPulldown(container);
  };

  const renderTodosTable = (container) => {
    const projects = container.getProjects();

    for (const project of projects) {
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");
      const projectRow = document.createElement("tr");
      const projectTitle = document.createElement("th");
      projectTitle.innerHTML = project.getTitle();

      for (const todo of project.getTodos()) {
        const todoRow = document.createElement("tr");
        todoRow.dataset.title = todo.getTitle();
        const todoCheck = document.createElement("input");
        todoCheck.setAttribute("type", "checkbox");
        const todoTitle = document.createElement("td");
        todoTitle.innerHTML = todo.getTitle();
        const removeTodo = document.createElement("button");
        removeTodo.dataset.title = todo.getTitle();
        removeTodo.classList.add("remove-btn");
        removeTodo.innerHTML = "x";
        todoRow.appendChild(todoCheck);
        todoRow.appendChild(todoTitle);
        if (todo.getDueDate()) {
          const todoDuedate = document.createElement("td");
          todoDuedate.innerHTML = `due: ${todo.getDueDate()}`;
          todoRow.appendChild(todoDuedate);
        }
        todoRow.appendChild(removeTodo);
        tbody.appendChild(todoRow);
      }

      projectRow.appendChild(projectTitle);
      thead.appendChild(projectRow);
      table.appendChild(thead);
      table.appendChild(tbody);
      _todoContainer.appendChild(table);
    }
  };

  const updateDom = (container) => {
    resetInputs(container);
    removeAllChildNodes(_todoContainer);
    renderTodosTable(container);
  };

  return {
    getAddTodoBtn,
    getAddProjectBtn,
    getTodoTitle,
    getDuedate,
    getProjectTitle,
    updateDom,
  };
})();

export default domController;
