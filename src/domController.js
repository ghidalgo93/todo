// dom controller module

const domController = (() => {
  const pageInit = () => {
    // variable to hold current project;

    const app = document.getElementById("app");
    // header
    const header = document.createElement("header");
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "ToDo";
    header.appendChild(pageTitle);
    // content <div flex>
    const content = document.createElement("div");
    content.id = "content";
    // projectsSidebar
    const projectsSidebar = document.createElement("ul");
    projectsSidebar.id = "projects-sidebar";
    // projects
    const projects = document.createElement("ul");
    projects.id = "projects";
    // addProjectsForm <form>
    const projectForm = document.createElement("form");
    projectForm.id = "project-form";
    projectsSidebar.appendChild(projects);
    projectsSidebar.appendChild(projectForm);
    // todosDisplay <div flex col>
    const todosDisplay = document.createElement("div");
    todosDisplay.id = "todos-display";
    // +todo <li>
    // addTodoForm <form>
    // todos <ul> data=projectName
    //
    content.appendChild(projectsSidebar);
    content.appendChild(todosDisplay);
    app.appendChild(header);
    app.appendChild(content);
  };
  const renderPage = (projectsArray, project) => {};
  const renderProjects = (projectsArray) => {};
  const renderTodos = (project) => {};

  return { pageInit };
})();

export default domController;
