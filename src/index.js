import Todo from "./todo";
import Project from "./project";
import Container from "./container";
import domController from "./domController";
import "./styles.css";

// app init
const homeProject = Project("home");
Container.addProject(homeProject);


// event listeners
