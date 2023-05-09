import Customs from "../../src/components/Customs";

describe("Welcome.cy.js", () => {
  it("it renders", () => {
    cy.mount(<Customs initialCounter={20}></Customs>);
    cy.get("[data-cy=counter]").should("contain.text", "20");
  });

  it("it calculates", () => {
    cy.mount(<Customs initialCounter={10}></Customs>);
    cy.get("[data-cy=inc]").click();
    cy.get("[data-cy=counter]").should("contain.text", "11");
    cy.get("[data-cy=dec]").click();
    cy.get("[data-cy=counter]").should("contain.text", "10");
  });

  it("it doesnt go negative", () => {
    cy.mount(<Customs initialCounter={0}></Customs>);
    cy.get("[data-cy=dec]").click();
    cy.get("[data-cy=counter]").should("contain.text", "0");
  });
});
