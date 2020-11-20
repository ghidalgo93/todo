import Todo from './todo';
import Project from './project';
import Container from './container';
import domController from './domController';
import addTodo from './helpers';

//app init
const main = Project('main');
Container.addProject(main);

// event listeners
domController.getAddBtn().addEventListener('click', () => {
	//Add new do
	let newDo = Todo(domController.getTitleStr()); 
	let projects = Container.getProjects();
	let project = projects.find(x => x.getTitle() === domController.getProjectStr());
	project.addTodo(newDo);
	//update dom 
	domController.updateDom(Container);
});





