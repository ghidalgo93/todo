function Todo(title = '', description = '', dueDate = null, priority = 3){
	let _title = title;
	let _description = description;
	let _dueDate = dueDate;
	let _priority = priority;

	const getTitle = () => _title;
	const setTitle = (newTitle) => {
		if (typeof newTitle !== "string"){
			throw TypeError('title must be a string');
		}
		return _title = newTitle; 
	}	
	const getDescription = () => _description;
	const setDescription = (newDesc) => {
		if (typeof newDesc !== "string"){
			throw TypeError('description must be a string');
		}
		return _description = newDesc;
	}
	const getDueDate = () => _dueDate;
	const setDueDate = (newDate) => {
		if (newDate instanceof Date === false){
			throw TypeError('due date must be a date object');
		}
		return _dueDate = newDate;
	}
	const getPriority = () => _priority;
	const setPriority = (newPri) => {
		if (typeof newPri !== "number"){
			throw TypeError('priority must be a number');
		}
		return _priority = newPri;
	}  

	return {
		getTitle,
		setTitle, 
		getDescription,
		setDescription, 
		getDueDate,
		setDueDate, 
		getPriority,
		setPriority
	};
}


export default Todo
