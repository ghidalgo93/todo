import {isRequired} from './helpers';
import {format} from 'date-fns';

function Todo(title = isRequired('title'), description = '', dueDate = undefined, priority = 3){
	if (title === ''){
		throw Error('todo must have title');
	}
	let _title = title;
	let _complete = false;
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
	const getComplete = () => _complete; 
	const setComplete = (bool) => {
		if (typeof bool !== "boolean") {
			throw TypeError('complete must be a boolean value');
		}
		bool ? _complete = true : _complete = false;
		return _complete;
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
		if (newDate){
			format(new Date(), newDate);
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
		getComplete,
		setComplete, 
		getDescription,
		setDescription, 
		getDueDate,
		setDueDate, 
		getPriority,
		setPriority
	};
}


export default Todo
