/* global Given, When, Then */
import homePage from "../pageObjects/HomePage";

const url = 'https://www.facebok.com';
import HomePage from "../pageObjects/HomePage";

Given('I open Facebook page', () => {
    cy.visit(url);


});

Then('I see {string} in the title', (title) => {
    cy.title().should('include', title)

});