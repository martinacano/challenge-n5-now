class FlightPage {

    elements = {

        // Title Select Flight
        selectFlightDesktopTitle: () => cy.get('#titleSelectFlightDesktop'),

        // First flight card 
        flightCard: () => cy.get('#WrapperCardFlight0'),

        // Cabin card
        cabinCard: () => cy.get('[data-testid="bundle-detail-0-flight-select"]'),

        
        // Summary title
        summaryTitle: () => cy.get('#CenterWrapperBodyFlights'),


        // Button to go seats page
        continueSeatsBtn: () => cy.get('[data-testid="button9--button"]')
    }

    validateTitleSelectFligh() {
        this.elements.selectFlightDesktopTitle().should('exist');
        cy.screenshot('Page to choose your flight')
    }

    selectFirstFlight() {
        this.elements.flightCard().should('exist');
        this.elements.flightCard().click();
    }

    selectCabin() {
        this.elements.cabinCard().should('exist');
        this.elements.cabinCard().click();
    }

    validateTitleSummary(){
        this.elements.summaryTitle().contains('Resumen de tu viaje')
        cy.screenshot('Resumen de tu viaje');
    }

    goToSeats() {
        this.elements.continueSeatsBtn().click();
    }


}
export default FlightPage;