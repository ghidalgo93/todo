import { addProjectToDom } from "./domController";
import "./styles.css";
import Container from "./container";
import Project from "./project";

// dom elements
const addPojectInputDom = document.getElementById("add-project");
const addTodoInputDom = document.getElementById("add-todo");
const projectContainerDom = document.getElementById("projects");

// init
const homeProject = Project("Home");
Container.addProject(homeProject);
// addProjectToDom(homeProject, projectContainerDom)
// let selectedProject = selectProject(homeProject, Container)

// event listeners

// *click on project title
// selectedProject = selectProject(event.title, Container)
//
// selectProject(titleOfProject, container)
// find the project in DOM with the titleOfProject
// add the selected class to it
// showTodos(selected project), ie add show to it and deselect others
// if successful
// return title of project

// *press enter on addProjectInput
// newProject = addProject(event, Container)
// selectedProject = selectProject(newProjectTitle, Container)
// clear input
//
// addProject(event, Container, domContainer)
// if enter was pressed
// validate project name is not an empty string
// create projectToAdd object
// add projectToAdd to project containter
// addProjectToDom(projectToAdd, domContainer)
// if success
// return projectToAdd

// *click on the removeProject button
// removedProject = removeProject(event, Container, domContainer)
// selectedProject = selectProject(homeProjectTitle, Container)
//
// removeProject(event, Container, domContainer)
// make sure project exists
// set it to projectToRemove
// remove project from project container
// removeProjectFromDom(projectToRemove, domContainer)
// if succeeded
// return projectToRemove

// *press enter on the addTodo input
// newTodo = addTodo(event, Container, selectedProject)
//
// addTodo(event, Container, selectedProject)
// if enter is pressed
// validate todo name is not empty string
// if project exists
// create todoToAdd object
// add todoToAdd to the project
// addTodoToDom, ie to the projects todoDomContainer
// if the project isn't the home object also add it to home
// return todoToAdd

// *click the removeTodo button
// removedTodo = removeTodo(event, container, selectedProject)
//
// removeTodo(e, projectContainer, project)
// deconstruct todo from event (todoToRemove)
// if project exists
// remove todoToRemove from project
// if the project isn't the home object also remove it from home
// removeTodoFromDom, ie from the projects todoDomContainer
// return todoToRemove

// *click on todo title
// todoDetails()
