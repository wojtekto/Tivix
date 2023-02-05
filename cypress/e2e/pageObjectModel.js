export class HomePage {

    getHomePage(){
        return cy.visit('http://qalab.pl.tivixlabs.com/');
    }

    getPickupCountry(value){
        return cy.get('#country').select(value)
    }

    getPickupCity(value){
        return cy.get('#city').select(value)
    }

    selectModel(value){
        return cy.get('#model').type(value);
    }

    datePickup(value){
        return cy.get('#pickup').type(value)
    }

    dateDropoff(value){
        return cy.get('#dropoff').type(value)
    }

    submitSearch(){
        cy.get('form')
        .contains("Search")
        .click()
    }

    constructor() {}
}

export class CarTable {

    searchResult(model){
        cy.get('#search-results')
        .contains(model)
        .click()
    }

    rentButton(){
        cy.get('#search-results')
        .contains("Rent")
        .click()
    }

    constructor() {}
}

export class CarDetails {
    getDetailsPage(){
        return cy.visit('http://qalab.pl.tivixlabs.com/details/1');
    }

    submitRentButton(){
        cy.get('#content')
        .contains("Rent!")
        .click()
    }
}

export class SummaryPage {
    getSummaryPage(){
        return cy.visit('http://qalab.pl.tivixlabs.com/rent/1');
    }

    firstName(value){
        return cy.get('#name').type(value)
    }

    lastName(value){
        return cy.get('#last_name').type(value)
    }

    cardNumber(value){
        return cy.get('#card_number').type(value)
    }

    emailInput(value){
        return cy.get('#email').type(value)
    }

    submitRent(){
        cy.get('#rent_form')
        .contains("Rent")
        .click()
    }
}