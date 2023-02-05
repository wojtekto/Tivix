// import { Given, When, Then, And } from "cypress-cucumber-preprocessor";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SummaryPage, CarDetails, CarTable } from "../pageObjectModel";

const carDetails = new CarDetails();
const summarypage = new SummaryPage();
const carTable = new CarTable();

Given('user submit rent in the table', () => {
    carTable.rentButton();
})

Given('user submit rent in car details page', () => {
    carDetails.submitRentButton();
})

When('user provide {string} in first name input', (first_name) => {
    summarypage.firstName(first_name);
})

When('user provide {string} in last name input', (last_name) => {
    summarypage.lastName(last_name);
})

When('user provide {string} in card number input', (card_number) => {
    summarypage.cardNumber(card_number);
})

When('user provide {string} in email input', (email) => {
    summarypage.emailInput(email);
})

When('user submit "Rent" button', () => {
    summarypage.submitRent();
})

Then('alert with {string} is visible', (error_message) => {
    cy.get('#rent_form').contains(error_message)
})