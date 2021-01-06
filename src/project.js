const project = (name) => {
  const todos = [];
  const addTodo = (todo) => {
    todos.push(todo);
  };
  return { name, todos, addTodo };
};

export default project;
