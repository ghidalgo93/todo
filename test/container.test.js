import Container from '../src/container';
import Project from '../src/project';

describe('testing functionality of container module', () => {
	let testProject1; 
	beforeEach(function() {
		testProject1 = Project(); 
		Container.clearAll();
	})
	
	it('should instantiate with an empty project array', () => {
		expect(Container.getProjects()).toEqual([]);
		expect(Container.getProjects().length).toBe(0);
	})

	it('addProject should add a single project to the projects array', () => {
		expect(Container.addProject(testProject1)).toEqual([testProject1]);
		expect(Container.getProjects().length).toBe(1);
	})

	it('removeProject should remove a project from the project array', () => {
		Container.addProject(testProject1);
		expect(Container.removeProject(testProject1)).toEqual([]);
	})
	
	it('getProjectByTitle should return the projects title if it exists within', () => {
		Container.addProject(testProject1);
		testProject1.setTitle('testProj');
		expect(Container.getProjectByTitle('testProj')).toBe(testProject1);
	})
	
	it('getProjectByTitle should return undefined if project dne', () => {
		expect(Container.getProjectByTitle('testProj')).toBe(undefined);
	})
	
})
