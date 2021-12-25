/* global Given, When, Then ,And*/
//import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

const urls="https://demo.nopcommerce.com/";


Given('i open nop commence page', () => {
    cy.visit(urls);
});

Then(/^i click on the sign in button$/, () => {
       cy.get('.ico-login').click();
    });

Then('I enter correct username and password', () => {
    cy.get('#Email').type('lightyear9461@gmail.com');
    cy.get('#Password').type('M630ela1')

});
Then('i click on log in',function (){
    cy.get('form > .buttons > .button-1').click()
})
