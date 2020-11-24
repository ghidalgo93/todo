// Removes all child nodes from a given DOM element
// input: DOM element
function removeAllChildNodes(parent){
	while (parent.firstChild){
		parent.removeChild(parent.firstChild);
	}
};

const isRequired = (param) => { 
	throw Error(`${param} is required`)
}

export {
	removeAllChildNodes,
	isRequired
}


