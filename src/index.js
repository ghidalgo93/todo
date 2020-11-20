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
	//helper function: AddTodo?
	let newDo = Todo(domController.getTitleStr()); 
	let projects = Container.getProjects();
	let project = projects.find(x => x.getTitle() === domController.getProjectStr());
	project.addTodo(newDo);
	//update dom 
	domController.updateDom(Container);
});

domController.getAddProjectBtn().addEventListener('click', () => {
	//helper function: addProject? 
	Container.addProject(Project(prompt("New project name: ")));
	domController.updateDom(Container);
})



