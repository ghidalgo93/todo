function Todo(title = '', description = '', dueDate = null, priority = 3){
	const _title = title;
	const _description = description;
	const _dueDate = dueDate;
	const _priority = priority;

	const getTitle = () => _title;
	const getDescription = () => _description;
	const getDueDate = () => _dueDate;
	const getPriority = () => _priority;

	

	return {getTitle, getDescription, getDueDate, getPriority};
}


// module.exports.Todo = Todo;
export default Todo
