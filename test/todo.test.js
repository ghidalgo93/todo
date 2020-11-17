import Todo from '../src/todo';
 
describe('testing functionality of todo factory function', () => {
	it('should instantiate a default todo object', () => {
		const todoTest = Todo();
		expect(todoTest.getTitle()).toBe('');
		expect(todoTest.getDescription()).toBe('');
		expect(todoTest.getDueDate()).toBe(null);
		expect(todoTest.getPriority()).toBe(3);
	})
})
