/* global Given, When, Then , And*/

const urls="https://demo.nopcommerce.com/";

Given('i open nop commence page', () => {
    cy.visit(urls);

});

When('i click on the sign in button', () => {
       cy.get('.ico-login').click();
    });

Then('I enter correct username and password', () => {
    cy.get('#Email').type('lightyear9461@gmail.com');
    cy.get('#Password').type('M630ela1')

});
Then('i click on log in',function (){
    cy.get('form > .buttons > .button-1').click()

})
Then('i click on electronics section and click on cell phones',function (){
    cy.get('.menu-toggle').click()
    cy.get('.mobile > :nth-child(2) > [href="/electronics"]').click()
    cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click()

})
When('i am on cell phones page i pick a phone of my desired choice',function (){
    cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
    cy.get('#add-to-cart-button-19').click()
    cy.get('.ico-cart').click()

})
Then('i will accept terms of services and click on checkout',function (){
    cy.get('#termsofservice').click()
    cy.get('#checkout').click()

})
Then('i will enter my billing details',function (){
    cy.get('#billing-address-select').select('')
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
    cy.get('#billing-buttons-container > .new-address-next-step-button').click()
})
Then('i will do shipping method',function (){
    cy.get(
        '#shipping-method-buttons-container > .button-1').click()

})
Then('i will do payment method',function (){
    cy.get('#payment-method-buttons-container > .button-1').click()

})
Then('i will confirm payment info',function (){
    cy.get('#payment-info-buttons-container > .button-1').click()

})
Then('i will confirm my order',function (){
    cy.get('#confirm-order-buttons-container > .button-1').click()
})