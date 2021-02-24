describe("Party Horn Tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/Part2-Cypress/index.html");
  });

  it("First Test", () => {
    expect(true).to.equal(true);
  });

  /* Part 2 Tutorial */

  it("Set volume-number to 75", () => {
    cy.get("#volume-number").clear().type("75");

    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it("Set volume-slider to 33", () => {
    cy.get("#volume-number").clear();
    cy.get("#volume-slider").invoke("val", 33).trigger("input");

    cy.get("#volume-number").then(($num) => {
      expect($num).to.have.value(33);
    });
  });

  it("Check audio is 0.33", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");

    cy.get("#horn-sound").then(($num) => {
      expect($num).to.have.prop("volume", 0.33);
    });
  });

  /* Assignment */

  /* Image and Sound Source */

  it("Check if image and sound source change on car", () => {
    cy.get("#radio-car-horn").check();

    cy.get("#sound-image")
      .should("have.attr", "src")
      .should("contains", "car.svg");

    cy.get("#horn-sound")
      .should("have.attr", "src")
      .should("contains", "car-horn.mp3");
  });

  it("Check if image and sound source change on party", () => {
    cy.get("#radio-party-horn").check();

    cy.get("#sound-image")
      .should("have.attr", "src")
      .should("contains", "party-horn.svg");

    cy.get("#horn-sound")
      .should("have.attr", "src")
      .should("contains", "party-horn.mp3");
  });

  /* Volume Image */

  it("Check if volume image has 3 lines", () => {
    cy.get("#volume-number").clear().type("75");

    cy.get("#volume-image")
      .should("have.attr", "src")
      .should("contains", "volume-level-3.svg");
  });

  it("Check if volume image has 2 lines", () => {
    cy.get("#volume-number").clear().type("54");

    cy.get("#volume-image")
      .should("have.attr", "src")
      .should("contains", "volume-level-2.svg");
  });

  it("Check if volume image has 1 lines", () => {
    cy.get("#volume-number").clear().type("30");

    cy.get("#volume-image")
      .should("have.attr", "src")
      .should("contains", "volume-level-1.svg");
  });

  it("Check if volume image has 0 lines", () => {
    cy.get("#volume-number").clear().type("0");

    cy.get("#volume-image")
      .should("have.attr", "src")
      .should("contains", "volume-level-0.svg");
  });

  /* Honk button Disabled */

  it("Disable the honk button on empty", () => {
    cy.get("#volume-number").clear();

    cy.get("#honk-btn").should("be.disabled");
  });

  it("Disable the honk button on non-number", () => {
    cy.get("#volume-number").clear().type("SD");

    cy.get("#honk-btn").should("be.disabled");
  });

  /* Check for an error on out of bounds */

  it("Check for an error on out of bounds input", () => {
    cy.get("#volume-number").clear().type("106");

    cy.get("input:invalid").should("have.length", 1);
  });
});
