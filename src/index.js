import Todo from './todo';
import Project from './project';
import Container from './container';

//app init
const defaultProj = Project();
Container.addProject(defaultProj);

//dom init  
const todoInput = document.getElementById('todo-item');
const addBtn = document.getElementById('add-btn');
const projPulldown = document.getElementById('project-pulldown');


//event handlers
const handleAddClick = () => {
	let newInput = todoInput.value;
	todoInput.value = '' 
}
addBtn.addEventListener('click', handleAddClick, false);




