Cypress.Commands.add('clickNextButton', () => {
    cy.get('button[text="Next"]').click();
});

Cypress.Commands.add('checkTitleVisibilty', (titleValue) => {
    cy.contains(titleValue).should('be.visible');
});

Cypress.Commands.add('selectRadioButtonWithValue', (radioButtonValue) =>{
    // cy.get('[value="' + radioButtonValue + '"]').parent().click();
    cy.contains(radioButtonValue).click();
});