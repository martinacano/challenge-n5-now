class BagsPage {

    elements = {

        // Bags options section
        bagsSection: () => cy.get('[data-testid="BAGS-accordion"]'),

        // Button to add baggage
        addBaggage23KgBtn: () => cy.get('[data-testid="add-23-baggage"]'),

        // Special baggages section
        specialBaggagesSection: () => cy.get('[data-testid="accordion-special-baggages"]'),

        // Link to feature special baggages
        specialBaggagesLink: () => cy.get('[data-qa="market-link-specialbaggages"]'),

        // Header title Page Special Baggage Info

        headerTitleSpecialBaggageInfo:() => cy.get('[data-testid="header-title-wrapper"]'),

        
    }

    waitUntilBagsSectionExist() {
        this.elements.bagsSection().should('exist');
    }

    addBaggage23Kg() {
        this.elements.addBaggage23KgBtn().click();
    }

    goToSpecialBaggagesInformation(){
        this.elements.specialBaggagesSection().click();
        this.elements.specialBaggagesLink().invoke('removeAttr', 'target').click();
    }

    validateSpecialBaggagesPageInfo(){
        this.elements.headerTitleSpecialBaggageInfo().should('have.text','Equipaje especial')
    }

}
export default BagsPage;