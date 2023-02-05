// import { Given, When, Then, And } from "cypress-cucumber-preprocessor";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage, CarTable } from "../pageObjectModel";

const homePage = new HomePage();
const carTable = new CarTable();

Given('user is on the home page', () => {
    homePage.getHomePage();
    cy.contains('Please fill pickup and drop off dates');
})

Given('user select {string} for a pickup', (country) => {
    homePage.getPickupCountry(country);
})

Given('user select {string} of the selected country', (city) => {
    homePage.getPickupCity(city);
})

Given('user provide car {string}', (model) => {
    homePage.selectModel(model);
})

Given('user provide {string} for a pickup', (pickupDate) => {
    homePage.datePickup(pickupDate);
})

Given('user provide {string} for a dropoff', (dropoffDate) => {
    homePage.dateDropoff(dropoffDate)
})

When('user submit search button', () => {
    homePage.submitSearch()
})

Then('table with search results is visible', () => {
    cy.get('#search-results').should('be.visible')
})

Then('provided car {string} is on the list if available', (model) => {
    carTable.searchResult(model)
})

Then('alert "Please enter a valid date!" should come up', () => {
    cy.contains('Please enter a valid date!');
})