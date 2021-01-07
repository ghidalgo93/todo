const pageInit = (() => {
  const load = () => {
    const app = document.getElementById("app");
    // header
    const header = document.createElement("header");
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "ToDo";
    header.appendChild(pageTitle);
    // content
    const content = document.createElement("div");
    content.id = "content";

    // projectsSidebar
    const projectsSidebar = document.createElement("ul");
    projectsSidebar.id = "projects-sidebar";
    projectsSidebar.classList.add("container");
    // projects
    const projects = document.createElement("ul");
    projects.id = "projects";
    // addProjectsForm
    const projectForm = document.createElement("form");
    projectForm.id = "project-form";
    const projectInput = document.createElement("input");
    projectInput.id = "project-input";
    projectInput.type = "text";
    projectInput.name = "projectName";
    projectInput.placeholder = "New Project";
    const addProject = document.createElement("button");
    addProject.id = "add-project";
    addProject.textContent = "+";
    addProject.classList.add("clicker");

    projectForm.appendChild(projectInput);
    projectForm.appendChild(addProject);

    projectsSidebar.appendChild(projects);
    projectsSidebar.appendChild(projectForm);

    // todosDisplay
    const todosDisplay = document.createElement("div");
    todosDisplay.classList.add("container");
    todosDisplay.id = "todos-display";
    // header
    const todoHeader = document.createElement("div");
    todoHeader.id = "todo-header";
    const nameHead = document.createElement("div");
    nameHead.textContent = "ToDos";
    const dateHead = document.createElement("div");
    dateHead.textContent = "Due Date";
    todoHeader.appendChild(nameHead);
    todoHeader.appendChild(dateHead);
    // todos
    const todos = document.createElement("ul");
    todos.id = "todos";
    // addTodo button
    const addBtn = document.createElement("button");
    addBtn.id = "show-todo-form";
    addBtn.classList.add("clicker");
    addBtn.textContent = "+";
    // addTodoForm
    const todoForm = document.createElement("form");
    todoForm.id = "todo-form";
    const todoName = document.createElement("input");
    todoName.id = "todo-name";
    todoName.classList.add("todo-input");
    todoName.type = "text";
    todoName.placeholder = "New Todo";
    const todoDesc = document.createElement("input");
    todoDesc.id = "todo-desc";
    todoDesc.classList.add("todo-input");
    todoDesc.type = "text";
    todoDesc.placeholder = "Description";
    const todoDate = document.createElement("input");
    todoDate.id = "todo-date";
    todoDate.classList.add("todo-input");
    todoDate.type = "date";
    todoDate.value = "Due Date";
    const todoPriority = document.createElement("select");
    todoPriority.id = "todo-priority";
    todoPriority.classList.add("todo-input");
    const low = document.createElement("option");
    low.value = "low";
    low.textContent = "low";
    const med = document.createElement("option");
    med.value = "medium";
    med.textContent = "medium";
    med.selected = true;
    const high = document.createElement("option");
    high.value = "high";
    high.textContent = "high";
    todoPriority.appendChild(low);
    todoPriority.appendChild(med);
    todoPriority.appendChild(high);
    const todoProject = document.createElement("select");
    todoProject.id = "todo-project-pulldown";
    todoProject.classList.add("todo-input");
    const addTodo = document.createElement("button");
    addTodo.id = "add-todo";
    addTodo.textContent = "+";
    addTodo.classList.add("clicker");

    // Add everything together
    todoForm.appendChild(todoName);
    todoForm.appendChild(todoDesc);
    todoForm.appendChild(todoDate);
    todoForm.appendChild(todoPriority);
    todoForm.appendChild(todoProject);
    todoForm.appendChild(addTodo);

    todosDisplay.appendChild(todoHeader);
    todosDisplay.appendChild(todos);
    todosDisplay.appendChild(addBtn);
    todosDisplay.appendChild(todoForm);

    content.appendChild(projectsSidebar);
    content.appendChild(todosDisplay);
    app.appendChild(header);
    app.appendChild(content);
  };
  return { load };
})();

export default pageInit;
