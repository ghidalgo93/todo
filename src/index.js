import Todo from './todo';
import Project from './project';
import Container from './container';
import domController from './domController';
import addTodo from './helpers';

//app init
const defaultProject = Project('main');
Container.addProject(defaultProject);

// event listeners
domController.getAddBtn().addEventListener('click', () => {
	let newTodo = Todo(domController.getTodoTitle()); 
	let project = Container.getProjectByTitle(domController.getProjectStr());
	if (project){
		project.addTodo(newTodo);
	}
	domController.updateDom(Container);
});

domController.getAddProjectBtn().addEventListener('click', () => {
	Container.addProject(Project(prompt("New project name: ")));
	domController.updateDom(Container);
})



