// dom controller module
import PubSub from "pubsub-js";
import $ from "jquery";
import pageInit from "./pageInit";
import helpers from "./helpers";
import render from "./render";

const domController = (() => {
  pageInit.load();

  const renderPage = (projectsArray, project) => {
    render.renderProjects(projectsArray, project);
    render.renderTodos(project);
  };

  // add project
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
  // remove project
  $(projects).on("click", ".remove-project", (e) => {
    PubSub.publish("REMOVE_PROJECT", e.target.dataset.name);
  });
  // select project
  $(projects).on("click", ".project-name", (e) => {
    PubSub.publish("SELECT_PROJECT", e.target.dataset.name);
  });

  // add todo
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
  const todos = document.getElementById("todos");
  // remove todo
  $(todos).on("click", ".remove-todo", (e) => {
    const projectName = e.target.parentNode.dataset.proj;
    const todoName = e.target.parentNode.dataset.name;
    PubSub.publish("REMOVE_TODO", { projectName, todoName });
  });

  $(todos).on("click", ".checkbox", (e) => {
    const projectName = e.target.parentNode.dataset.proj;
    const todoName = e.target.parentNode.dataset.name;
    const { checked } = e.target;
    PubSub.publish("CHECK", { projectName, todoName, checked });
  });

  return { renderPage };
})();

export default domController;
