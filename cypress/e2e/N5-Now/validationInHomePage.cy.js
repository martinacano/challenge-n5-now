import BagsPage from "../../pages/BagsPage";
import FlightPage from "../../pages/FlightPage";
import HomePage from "../../pages/HomePage";
import SeatsPage from "../../pages/SeatsPage";

describe('Validations in the flow', () => {
  const homePage = new HomePage();
  const flightPage = new FlightPage();
  const seatsPage = new SeatsPage();
  const bagsPage = new BagsPage();
  
  beforeEach(() => {
    cy.viewport('macbook-16')
    homePage.navigate();
    homePage.skipCountrySuggestion();
  })

  it('Case1: Validation LATAM COLOMBIA web', () => {
    homePage.validateTitle('LATAM en Colombia');
  })
  
  it('Case2: Validation that you have selected a one-way flight', () => {
    homePage.selectOnlyWay();
    homePage.validateOptionSection('Solo ida')
  })

  it('Case3: Validation that you have selected Premium Class', () => {
    homePage.selectPremiumClass();
    homePage.validateOptionSection('Premium')
  })

  it('Case4: Validation that two passengers were added', () => {
    homePage.addChildrenPassenger();
    homePage.validateOptionSection('2 pasajeros')
  })

  it('Case5: Validation that Medellín is the only option for origin',() => {
    homePage.selectOriginTrip('Medellín');
  })

  it('Case6: Validation that Medellín is the only option for destination',() => {
    homePage.selectOriginTrip('Medellín');
    homePage.selectDestinationTrip('Bogotá');
  })

});