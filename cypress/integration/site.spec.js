describe("My Store", () => {
    beforeEach(() => {
});

    it("Create user account", () => {
        var testUrl = 'http://automationpractice.com/index.php?controller=authentication&back=my-account';

        cy.visit(testUrl);

        cy.get("#email_create").type("joseph.ribeiro.santos@gmail.com");
        
        cy.get("#SubmitCreate").click();

        cy.wait(500);
    });

    it("Fills all the text input fields", () => {

        cy.get("#customer_firstname").type("Joseph");
        cy.get("#customer_lastname").type("Santos");
        cy.get("#company").type("Retain.io");
        cy.get("#address1").type("234 West 42nd Street");
        cy.get("#address2").type("Apartment");
        cy.get("#city").type("TUCSON");
        cy.get("#postcode").type("85736");
        cy.get("#other").type("Test creat new account");
        cy.get("#phone_mobile").type("85736897");
        cy.get("#passwd").type("123456");
    });

    it("Select ' Mr. ' Title type", () => {
        cy.get("#id_gender1").check();
    });

    it("Fill in the date of birth", () => {
        cy.get("#days").select("2");
        cy.get("#months").select("February");
        cy.get("#years").select("2022");
    })

    it("Fill in the state", () => {
        cy.get("#id_state").select("Arizona");
    })

    it("Selects 'newsletter', and 'offers'", () => {
        cy.get("#newsletter").check();
        cy.get("#optin").check();
    });

    it("Assign an address alias for future reference.", () => {
        cy.get("#alias").clear();
        cy.get("#alias").type("joseph.santos000@gmail.com");
    });

    it("Register", () => {
        cy.get("#submitAccount").click();
    });

    it("has 'Joseph Santos' header's heading", () => {
        cy.wait(100);
        cy.get("div h1").should("contain", "My account");
    });
});


