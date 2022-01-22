/* global Given, When, Then , And*/
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
const homepage=new HomePage();
const productPage=new ProductPage();
Given('User is on NopCommerce page',() =>{
    cy.visit('https://demo.nopcommerce.com/')
});

Then('User clicks on register',function (){
    productPage.RegisterButton().click()
});

Then('User selects his gender',function (){
    cy.get('#gender-male').click()
});

Then('User Enters',function (dataTable) {
    productPage.loginButton()
})