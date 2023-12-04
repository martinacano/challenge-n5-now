class HomePage {
    baseUrl = 'https://www.latamairlines.com/co/es'

    elements = {
        
        // Title web
        title: () => cy.title(),

        // Button to skip country suggestion
        skipCountryBtn: () => cy.get('#country-suggestion-reject-change'),

        // Button to select trip type
        tripTypeBtn: () => cy.get('#btnTripTypeCTA'),

        // Button to select only-way flight
        selectOnlyWayBtn: () => cy.get('#btnTripType0'),

        // Button to add passengers
        addPassengerBtn: () => cy.get('#btnAddPassengerCTA'),

        // Button to add children
        plusChildrenBtn: () => cy.get('#btnPlusChildren'),

        // Button to select cabin type
        cabinTypeBtn: () => cy.get('#btnCabinTypeCTA'),

        // Button to select premium class
        premiumClassBtn: () => cy.get('#btnCabinType1'),

        // Option section
        optionSection: () => cy.get('#optionSection'),

        // Button to select origin
        originInput: () => cy.get('#txtInputOrigin_field'),

        // Button to select the first autocomplete option
        onlyOptionBtn: () => cy.get('#btnItemAutoComplete_0'),

        // Button to select destination
        destinationInput: () => cy.get('#txtInputDestination_field'),

        // Button to select departure date
        departureDateInput: () => cy.get('input#departureDate'),

        // Date on the calendar that was chosen arbitrarily
        calendarDateBtn: () => cy.get('#calendarContainer .CalendarMonthGrid .CalendarMonthGrid_month__horizontal:nth-child(3) table.CalendarMonth_table:nth-child(2) tr:nth-child(2) .CalendarDay:nth-child(5)'),

        // Input section
        inputSection: () => cy.get('#inputSection'),

        // Button to initiate the search
        searchBtn: () => cy.get('#btnSearchCTA'),

        // Warning in destination input
        warningDestionationInput: () => cy.get('#od-not-found-warning')

    };

    navigate() {
        cy.visit(this.baseUrl,{ headers: { "Accept-Encoding": "gzip, deflate" } })
    }

    skipCountrySuggestion() {
        this.elements.skipCountryBtn().click();
    }

    validateTitle(titleWeb){
        cy.title().should('include',titleWeb)
        cy.screenshot(titleWeb);
    }

    validateOptionSection(optionSection){
        this.elements.optionSection().contains(optionSection)
        cy.screenshot(optionSection);
    }

    selectOnlyWay() {
        this.elements.tripTypeBtn().click();
        this.elements.selectOnlyWayBtn().click();
    }

    addChildrenPassenger() {
        this.elements.addPassengerBtn().click();
        this.elements.plusChildrenBtn().click();
    }

    selectPremiumClass() {
        this.elements.cabinTypeBtn().click();
        this.elements.premiumClassBtn().click();
    }

    selectOriginTrip(origin) {
        this.elements.originInput().click();
        this.elements.originInput().type(origin);
        this.elements.onlyOptionBtn().contains(origin).click();
    }

    selectDestinationTrip(destination) {
        this.elements.destinationInput().click();
        this.elements.destinationInput().type(destination);
        this.elements.onlyOptionBtn().contains(destination).click();
    }

    inputDestinationTrip(destination) {
        this.elements.destinationInput().click();
        this.elements.destinationInput().type(destination);
    }

    selectDepartureDate() {
        this.elements.departureDateInput().click();
        this.elements.calendarDateBtn().click();
    }

    warningDestinationInput(){
        this.elements.warningDestionationInput().should('exist');
    }

    errorOriginInput() {
        this.elements.originInput().should('have.class','error');
    }

    errorDepartureDate() {
        this.elements.departureDateInput().should('have.class','error');
    }

    clickSearchFlight(){
        this.elements.searchBtn().click();
    }

    searchFlight() {
        // Prevent redirection
        let openStub
        cy.window().then((win) => {
            openStub = cy.stub(win, 'open').as('openStub');
        })

        this.elements.searchBtn().click();

        // Wait for redirection
        cy.get('@openStub').should('be.called');

        // Go to flight search results
        cy.get('@openStub').then((stub) => {
            // Next url is the page flight results
            let nextUrl = stub.firstCall.args[0]
            cy.visit(nextUrl, { headers: { "Accept-Encoding": "gzip, deflate" } })
        })
    }
}

export default HomePage;
