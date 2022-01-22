/* global Given, When, Then , And*/
import HomePage from "../pageObjects/HomePage";


const homepage=new HomePage();
Given('I am on the nopcommerce page', () => {
homepage.BaseURL()

});
Then('I click on the log in button',function (){
    homepage.LoginButton().click().should('be.visible')
})
When('I enter correct Email and Password',function (){
    homepage.Username().type("lightyear9461@gmail.com")
    homepage.Password().type('M630ela1')
})
Then('I Will be successfully logged in',function (){
    homepage.loginButton().click()

    
})
Then('i will go to electronics page',function (){
    homepage.Categories().click()
    homepage.ElectronicPage().click()
})
When('i am on electronics then i will click on cell phones',function (){
    homepage.CellPhonesPage().click()
})
Then('I will select a phone',function (){
    cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
})
Then('i will add the phone to cart',function (){
    cy.get('#add-to-cart-button-19').click()
    cy.get('.ico-cart').click()
})
Then('I will accept terms of service',function (){
    homepage.TermsOfService().click()
})
Then('I will click on checkout',function (){
    homepage.ClickingOnCheckout().click()

})
Then('i will select a new address',function (){
homepage.NewAddress().select("")
})
Then('I will add my billing details',function (){
    cy.get('#BillingNewAddress_FirstName').type('dev')
    cy.get('#BillingNewAddress_LastName').type('patel')
    cy.get('#BillingNewAddress_Email').type('lightyear9461@gmail.com')
    cy.get('#BillingNewAddress_CountryId').select('Peru')
    cy.get('#BillingNewAddress_City').type('Manchester')
    cy.get('#BillingNewAddress_Address1').type('gudgao')
    cy.get('#BillingNewAddress_Address2').type('Chandigarh')
    cy.get('#BillingNewAddress_ZipPostalCode').type('0000')
    cy.get('#BillingNewAddress_PhoneNumber').type('00000000000000')
    cy.get('#BillingNewAddress_FaxNumber').type('00000000000000')
})
Then('i will click on continue',function (){
homepage.BillingDetailsClickOnContinue().click()

})
Then('I will select my shipping method and click on continue',function (){
    homepage.ShippingMethodContiueButton().click()

})
Then('I Will select payment method and click on continue',function (){
homepage.PaymentMethodContinueButton().click()

})
Then('i will confirm my correct payment details',function (){

    homepage.PaymentInfoContinueButton().click()

})
Then('I Will Confirm my order',function (){
    homepage.OrderConfirmationContinueButton().should("be.visible")
    homepage.OrderConfirmationContinueButton().click()


})