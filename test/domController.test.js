import domController from "../src/domController";

describe("tests functionality of dom manupulation", () => {
  it("createProjectElem should return a project element", () => {
    expect(validateProjectName("testProjectName")).toBe("testProjectName");
  });
});
