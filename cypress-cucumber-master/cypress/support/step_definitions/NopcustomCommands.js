/* global Given, When, Then , And*/
import HomePage from "../pageObjects/HomePage";

const urlsS="https://demo.nopcommerce.com/";
const homepage=new HomePage()
Given('I am on the nopcommerce page', () => {
    cy.visit(urlsS);

});
Then('I click on the log in button',function (){
    homepage.LoginButton().click()
})
When('I enter correct Email and Password',function (){
    homepage.Username().type("lightyear9461@gmail.com")
    homepage.Password().type('M630ela1')
})
Then('I Will be successfully logged in',function (){
    homepage.loginButton().click()
})