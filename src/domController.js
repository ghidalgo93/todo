const domController = (() => {
	const _headline = document.getElementById('headline');
	const _newTodoField = document.getElementById('new-todo-field');
	// const _todoLbl = document.getElementById('todo-label');
	const _todoInp = document.getElementById('todo-item');
	const getTitle = () => _todoInp.value;
	const clearTitle = () => _todoInp.value = '';
	// const _projectLbl = document.getElementById('project-label');
	const _projectPullDwn = document.getElementById('project-pulldown'); 
	const getProject = () => _projectPullDwn.value;
	const _projectDefault = document.getElementById('project-default');
	const _addBtn = document.getElementById('add-btn');
	const getAddBtn = () => _addBtn;
	const _todoContainer = document.getElementById('todo-container');


	//const addProjeCt = () => {
	//	//get text input value for new project title
	//	//reset the text input
	//	//create new project object
	//	//updateDom
	//}

	//const updateDom = () => {
	//	//
	//}

	//event listeners
	// _addBtn.addEventListener('click', addTodo, false);

	return {
		getAddBtn,
		getTitle, 
		clearTitle, 
		getProject
	}
})();

export default domController

