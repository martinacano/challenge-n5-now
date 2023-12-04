import BagsPage from "../../pages/BagsPage";
import FlightPage from "../../pages/FlightPage";
import HomePage from "../../pages/HomePage";
import SeatsPage from "../../pages/SeatsPage";

describe('E2E LATAM Airlines', () => {
  const homePage = new HomePage();
  const flightPage = new FlightPage();
  const seatsPage = new SeatsPage();
  const bagsPage = new BagsPage();


  beforeEach(() => {
    cy.viewport('macbook-16')
    homePage.navigate();
    homePage.skipCountrySuggestion();
  })

  it('E2E', () => {

    homePage.selectOnlyWay();
    homePage.addChildrenPassenger();
    homePage.selectPremiumClass();
    homePage.selectOriginTrip('Medellín');
    homePage.selectDestinationTrip('Bogotá');
    homePage.selectDepartureDate();
    homePage.searchFlight();

    flightPage.selectFirstFlight();
    flightPage.selectCabin();
    flightPage.goToSeats();

    seatsPage.waitUntilCabinsExist();
    seatsPage.selectTwoAvailableSeats();
    seatsPage.confirmSeats();

    bagsPage.waitUntilBagsSectionExist();
    bagsPage.addBaggage23Kg();
    bagsPage.goToSpecialBaggagesInformation();
    cy.screenshot('Finished e2e flow')
  })

});