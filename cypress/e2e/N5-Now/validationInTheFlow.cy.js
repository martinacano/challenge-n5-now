import BagsPage from "../../pages/BagsPage";
import FlightPage from "../../pages/FlightPage";
import HomePage from "../../pages/HomePage";
import SeatsPage from "../../pages/SeatsPage";

describe('Validations in the rest of the flow', () => {
  const homePage = new HomePage();
  const flightPage = new FlightPage();
  const seatsPage = new SeatsPage();
  const bagsPage = new BagsPage();
  
  beforeEach(() => {
    cy.viewport('macbook-16')
    homePage.navigate();
    homePage.skipCountrySuggestion();
  })

  it('Case7: Validation that you have reached the Choose a one-way flight page', () => {
    homePage.selectOnlyWay();
    homePage.addChildrenPassenger();
    homePage.selectPremiumClass();
    homePage.selectOriginTrip('Medellín');
    homePage.selectDestinationTrip('Bogotá');
    homePage.selectDepartureDate();
    homePage.searchFlight();

    flightPage.validateTitleSelectFligh();
  })


  it('Case8: Validation Summary of your trip page', () => {
    homePage.selectOnlyWay();
    homePage.addChildrenPassenger();
    homePage.selectPremiumClass();
    homePage.selectOriginTrip('Medellín');
    homePage.selectDestinationTrip('Bogotá');
    homePage.selectDepartureDate();
    homePage.searchFlight();

    flightPage.selectFirstFlight();
    flightPage.selectCabin();
    flightPage.validateTitleSummary();
  
  })

  it('Case9: Validation seats page', () => {
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
    cy.screenshot('Seats page')
  })

  it('Case10: Validation that the seats haven been selected', () => {
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
    cy.screenshot('Seats selected')
  })

  it('Case11: Validation baggage page', () => {

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
    cy.screenshot('Baggage page')
  })


  it('Case12: Validation add extra baggage', () => {

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
    cy.screenshot('Baggage added')
  })

  it('Case13 - 14: Validation special baggages information / E2E', () => {

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
    cy.screenshot('Special baggages page info')
  })

});