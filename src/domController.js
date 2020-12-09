// import $ from "jquery";
// import { showTodos, validateString } from "./helpers";

function createProjectElem(projectObj) {
  // create the project element
  const projectElem = document.createElement("div");
  projectElem.dataset.title = projectObj.getTitle();
  projectElem.classList.add("row-container");
  // create the project title
  const projectTitle = document.createElement("div");
  projectTitle.textContent = projectObj.getTitle();
  projectTitle.classList.add("projectTitle");
  projectTitle.dataset.title = projectObj.getTitle();
  projectElem.appendChild(projectTitle);
  // if the project isnt the home project, add remove btn
  if (projectObj.getTitle() !== "Home") {
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "x";
    removeBtn.classList.add("removeProject");
    removeBtn.dataset.title = projectObj.getTitle();
    projectElem.appendChild(removeBtn);
  }
  return projectElem;
}

function addProjectToDom(project, parentElement) {
  const newProjectElem = createProjectElem(project);
  parentElement.appendChild(newProjectElem);
  // create new todos container object
}

// const domController = (() => {
//   // let currentProjectTitle = "Home";

//   function addProjectToDom(newProject) {
//     const newProjectElem = domController.createProjectElem(newProject);
//     projectContainerDom.appendChild(newProjectElem);
//   }

//   // dom manipulation

//   // function projectSelect(e, projectContainter) {
//   //   const project = projectContainter.getProjectByTitle(e.target.dataset.title);
//   //   // take selected-project off all nonselected
//   //   // add selected-project to the selected on
//   //   e.target.classList.add("selected-project");
//   //   // show all the todos from that project
//   //   showTodos(project.getTodos());
//   // }

//   // function addTodo(e, project) {
//   //   if (e.key === "Enter") {
//   //     const todoName = validateString(e);
//   //     // add to home and specific project
//   //     project.addTodo(Todo(todoName));
//   //     if (project.getTitle() !== "Home") {
//   //       homeProject.addTodo(Todo(todoName));
//   //     }
//   //     showTodos(project.getTodos());
//   //     e.target.value = "";
//   //   }
//   // }

//   // // event listeners
//   // addProjectInput.addEventListener("keydown", (e) => addProject(e, Container));
//   // addTodoInput.addEventListener("keydown", (e) =>
//   //   // TODO check if project exists first
//   //   addTodo(e, Container.getProjectByTitle(currentProjectTitle))
//   // );
//   // $(projectDomContainer).on("click", (e) => {
//   //   currentProjectTitle = e.target.dataset.title;
//   // });
//   // $(projectDomContainer).on("click", ".removeProject", (e) =>
//   //   removeProject(e, Container)
//   // );
//   // $(projectDomContainer).on("click", ".projectTitle", (e) =>
//   //   projectSelect(e, Container)
//   // );

//   return { createProjectElem };
// })();

export { addProjectToDom };
