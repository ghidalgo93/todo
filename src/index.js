import Todo from './todo';
import Project from './project';
import Container from './container';
import domController from './domController';
import addTodo from './helpers';

//app init
const defaultProject = Project('main');
Container.addProject(defaultProject);
domController.updateDom(Container);

// event listeners
domController.getAddTodoBtn().addEventListener('click', () => {
	let project = Container.getProjectByTitle(domController.getProjectTitle());
	let todo = Todo(domController.getTodoTitle());
	todo.setDueDate(domController.getDuedate());
	project.addTodo(todo);
	domController.updateDom(Container);
});

domController.getAddProjectBtn().addEventListener('click', () => {
	let projectName = Project(prompt('New project name: '))
	Container.addProject(projectName);
	domController.updateDom(Container);
})


