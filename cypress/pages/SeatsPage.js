class SeatsPage {

    elements = {

        // Cabins group
        cabinsGroup: () => cy.get('#cabins-group'),

        // Button to selec seats
        seatsBtn: () =>  cy.get('[data-testid="seat-slot"] button'),

        // Button to confirm seats and continue to next page
        confirmSeatsBtn: () => cy.get('[data-testid="btn-confirm-and-continue-button"]')

    }

    waitUntilCabinsExist() {
        this.elements.cabinsGroup().should('exist');
    }

    selectTwoAvailableSeats(){
        this.elements.seatsBtn().filter('[data-available="true"]').eq(0).click()
        this.elements.seatsBtn().filter('[data-available="true"]').eq(1).click()
    }

    confirmSeats(){
        this.elements.confirmSeatsBtn().click();
    }


}
export default SeatsPage;