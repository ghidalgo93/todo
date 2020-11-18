import Containter from '../src/container';
import Project from '../src/project';

describe('testing functionality of container module', () => {
	let testProject1; 
	beforeEach(function() {
		testProject1 = Project(); 
		Containter.clearAll();
	})
	
	it('should instantiate with an empty project array', () => {
		expect(Containter.getProjects()).toEqual([]);
		expect(Containter.getProjects().length).toBe(0);
	})

	it('addProject should add a single project to the projects array', () => {
		expect(Containter.addProject(testProject1)).toEqual([testProject1]);
		expect(Containter.getProjects().length).toBe(1);
	})

	it('removeProject shold remove a project from the project array', () => {
		Containter.addProject(testProject1);
		expect(Containter.removeProject(testProject1)).toEqual([]);
	})
})
