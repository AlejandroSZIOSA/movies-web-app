describe("home page", () => {
  it("When press btn add favorite total favorite counter should change once", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#addFavoriteBtn").click();
    cy.get("header .menu-container p").contains("1");
    cy.get("#addFavoriteBtn").click();
    cy.get("header .menu-container p").contains("1");
  });
  it("Should show the user entry as search result ", () => {
    cy.visit("http://localhost:5173/");
    cy.get("input").type("The Substance");
    cy.get("article h2").contains("The Substance");
  });
});
