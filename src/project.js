function Project(title = ''){
	let _title = title; 
	let _toDos = [];

	const setTitle = (newTitle) => _title = newTitle;
	const getTitle = () => _title;
	const getTodos = () => _toDos;
	const addTodo = (todoItem) => {
		_toDos.push(todoItem);
		return _toDos;
	}
	const removeTodo = (todoItem) => {
		_toDos = _toDos.filter(item => item !== todoItem); 
		return _toDos;
	}

	return {
		setTitle,
		getTitle,
		getTodos, 
		addTodo,
		removeTodo
	}
}

export default Project
