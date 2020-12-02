import domController from "../src/domController";

describe("tests functionality of dom manupulation", () => {
  it("validateProject should return project name if input correctly", () => {
    expect(validateProjectName("testProjectName")).toBe("testProjectName");
  });
});
