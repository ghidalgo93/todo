// dom controller module
import PubSub from "pubsub-js";
import $ from "jquery";
import pageInit from "./pageInit";
import helpers from "./helpers";

const domController = (() => {
  // variable to hold current project;
  pageInit.load();

  const renderProjects = (projectsArray, project) => {
    const projectsList = document.getElementById("projects");
    const projectsPulldown = document.getElementById("todo-project-pulldown");
    helpers.removeAllChildNodes(projectsList);
    helpers.removeAllChildNodes(projectsPulldown);
    projectsArray.forEach((proj) => {
      // add each projects to the project sidebar list
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
      // add all projects to the todos projects pulldown
      const projectOption = document.createElement("option");
      projectOption.value = proj.name;
      projectOption.textContent = proj.name;
      projectOption.dataset.name = proj.name;
      projectsPulldown.appendChild(projectOption);
    });
  };
  const renderTodos = (project) => {
    const todosList = document.getElementById("todos");
    helpers.removeAllChildNodes(todosList);
    project.todos.forEach((todo) => {
      const todoLi = document.createElement("li");
      todoLi.classList.add("todo");
      const todoCheck = document.createElement("input");
      todoCheck.type = "checkbox";
      const todoName = document.createElement("div");
      todoName.textContent = todo.name;
      const todoDate = document.createElement("div");
      todoDate.textContent = todo.dueDate;
      const todoRemove = document.createElement("button");
      todoRemove.textContent = "x";
      todoRemove.classList.add("remove-todo");
      todoLi.appendChild(todoCheck);
      todoLi.appendChild(todoName);
      todoLi.appendChild(todoDate);
      todoLi.appendChild(todoRemove);
      todosList.appendChild(todoLi);
    });
  };

  const renderPage = (projectsArray, project) => {
    renderProjects(projectsArray, project);
    renderTodos(project);
  };

  const addProject = document.getElementById("add-project");
  addProject.onclick = (e) => {
    e.preventDefault();
    const projectInput = document.getElementById("project-input");
    if (helpers.verifyInputs([projectInput.value])) {
      PubSub.publish("ADD_PROJECT", projectInput.value);
      document.getElementById("project-form").reset();
      return projectInput.value;
    }
    projectInput.classList.remove("shake");
    void projectInput.offsetWidth;
    projectInput.classList.add("shake");
    return undefined;
  };

  const projects = document.getElementById("projects");

  $(projects).on("click", ".remove-project", (e) => {
    PubSub.publish("REMOVE_PROJECT", e.target.dataset.name);
  });
  $(projects).on("click", ".project-name", (e) => {
    PubSub.publish("SELECT_PROJECT", e.target.dataset.name);
  });

  const addTodo = document.getElementById("add-todo");
  addTodo.onclick = (e) => {
    e.preventDefault();
    const todoForm = document.getElementById("todo-form");
    const inputsRaw = document.querySelectorAll(".todo-input");
    const inputs = [
      inputsRaw[0].value,
      inputsRaw[1].value,
      inputsRaw[2].value,
      inputsRaw[3].value,
      inputsRaw[4].value,
    ];
    if (helpers.verifyInputs(inputs)) {
      PubSub.publish("ADD_TODO", inputs);
      todoForm.reset();
      return inputs;
    }
    todoForm.classList.remove("shake");
    void todoForm.offsetWidth;
    todoForm.classList.add("shake");
    return undefined;
  };

  return { renderPage };
})();

export default domController;
