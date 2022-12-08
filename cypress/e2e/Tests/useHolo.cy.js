describe('The workflow of NEW PURSHACE', () => {

  beforeEach('Navigate to website beofre starting', () => {
    cy.visit("/");
    cy.checkTitleVisibilty("Let's Get you the best deal on your mortgage");
    cy.checkTitleVisibilty("About your application");
  });

  it('User can navigate through NEW PURSHACE procedure until reaching the PROPERTY step', () => {
    cy.selectRadioButtonWithValue("New purchase")
    cy.clickNextButton();
    cy.checkTitleVisibilty("What is your residency status in UAE?");

    cy.selectRadioButtonWithValue("I'm a UAE resident")
    cy.clickNextButton();
    cy.checkTitleVisibilty("Your nationality");
    
    cy.selectRadioButtonWithValue("I'm Emirati")
    cy.clickNextButton();
    cy.checkTitleVisibilty("Do you have an existing mortgage in the UAE?");
    
    cy.selectRadioButtonWithValue("Yes")
    cy.clickNextButton();
    cy.checkTitleVisibilty("Who’s applying for the mortgage?");
    
    cy.selectRadioButtonWithValue("On my own")
    cy.clickNextButton();
    cy.checkTitleVisibilty("What’s your employment status?");
    
    cy.selectRadioButtonWithValue("Salaried")
    cy.clickNextButton();
    cy.checkTitleVisibilty("What’s your monthly income?");
    
    cy.get("#monthly_income").type("10000");
    cy.clickNextButton();
    cy.checkTitleVisibilty("What’s your age?");
    
    cy.get("input[id='age']").type("30");
    cy.clickNextButton();
    cy.checkTitleVisibilty("Have you found a property?");
  });
})

