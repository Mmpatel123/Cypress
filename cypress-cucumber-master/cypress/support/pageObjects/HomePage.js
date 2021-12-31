class HomePage
{

LoginButton()
{
    return cy.get('.ico-login')
}
Username()
{
    return cy.get('#Email')

}
Password()
{
  return  cy.get('#Password')
}

loginButton()
{
   return cy.get('form > .buttons > .button-1')
}
Categories(){
    return cy.get('.menu-toggle')
}
ElectronicPage(){
   return  cy.get('.mobile > :nth-child(2) > [href="/electronics"]')

}
CellPhonesPage(){
 return    cy.get(':nth-child(2) > .sub-category-item > .picture > a > img')
}
TermsOfService(){
  return   cy.get('#termsofservice')
}
ClickingOnCheckout(){
  return   cy.get('#checkout')
}
BaseURL(){
 return    cy.visit('https://demo.nopcommerce.com/')
}
NewAddress(){
    return    cy.get('#billing-address-select')
}
BillingDetailsClickOnContinue(){
    return   cy.get('#billing-buttons-container > .new-address-next-step-button')
}
ShippingMethodContiueButton(){
    return cy.get('#shipping-method-buttons-container > .button-1')
}
PaymentMethodContinueButton(){
return     cy.get('#payment-method-buttons-container > .button-1')
}
PaymentInfoContinueButton(){
    return  cy.get('#payment-info-buttons-container > .button-1')
}
OrderConfirmationContinueButton(){
    return     cy.get('#confirm-order-buttons-container > .button-1')
}
}



export default HomePage;
