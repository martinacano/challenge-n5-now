import BagsPage from "../../pages/BagsPage";
import FlightPage from "../../pages/FlightPage";
import HomePage from "../../pages/HomePage";
import SeatsPage from "../../pages/SeatsPage";

describe('Validation of errors on the home page.', () => {
  const homePage = new HomePage();

  
  beforeEach(() => {
    cy.viewport('macbook-16')
    homePage.navigate();
    homePage.skipCountrySuggestion();
  })

  it('Case15: Validation error, source not entered', () => {
    homePage.clickSearchFlight();
    homePage.errorOriginInput();
  })

  it('Case16: Validation error, origin not entered', () => {
    homePage.inputDestinationTrip('Bogotá');
    homePage.warningDestinationInput();
  })

  it('Case17: Validation error, departure date not entered', () => {
    homePage.selectOriginTrip('Medellín');
    homePage.selectDestinationTrip('Bogotá');
    homePage.clickSearchFlight();
    homePage.errorDepartureDate();
  })

});