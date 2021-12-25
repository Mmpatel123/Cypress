/* global Given, When, Then , And*/
const WEBURL="https://rahulshettyacademy.com/AutomationPractice/";
Given('I am on the dropdown practice website', () => {
    cy.visit(WEBURL);
});
Then('i will handle dropdowns',() =>{
    cy.get('select').select('option2').should('have.value','option2')
})

