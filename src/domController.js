const domController = (() => {
	const _headline = document.getElementById('headline');
	const _newTodoField = document.getElementById('new-todo-field');
	// const _todoLbl = document.getElementById('todo-label');
	const _todoInp = document.getElementById('todo-item');
	// const _projectLbl = document.getElementById('project-label');
	const _projectPullDwn = document.getElementById('project-pulldown'); 
	const _projectDefault = document.getElementById('project-default');
	const _addBtn = document.getElementById('add-btn');
	const _todoContainer = document.getElementById('todo-container');


	const handleAdd = () => {
		let newInput = _todoInp.value;
		console.log(newInput);
		_todoInp.value = '' 
	}

	//event listeners
	_addBtn.addEventListener('click', handleAdd, false);

	return {
	}
})();

export default domController

