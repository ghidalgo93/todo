import Todo from './todo';
import Project from './project';
import Container from './container';
import domController from './domController';
import addTodo from './helpers';

//app init
const defaultProject = Project('defaultProject');
Container.addProject(defaultProject);

// event listeners
domController.getAddBtn().addEventListener('click', () => {
	//create todo
	let newDo = Todo(domController.getTitleStr()); 
	//get project
	let projects = Container.getProjects();
	let project = projects.find(x => x.getTitle() === domController.getProjectStr());
	//add todo to project
	console.log(project.getList());
	project.addTodo(newDo);
	console.log(project.getList());
	//clear inputs
	domController.clearTitle();
});





