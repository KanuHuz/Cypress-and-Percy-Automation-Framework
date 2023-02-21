describe("TicketBox test", () => {

    beforeEach( () => {
        cy.visit('index.html')  // to ensure test independence
    })

    it("Check for initial state", () => {
        cy.percySnapshot()  // here we call Percy to take snapshots
    })

    it("Passing incorrect email credentials", () => {
        cy.get('#email').type("kanu.huser@test.com")
        cy.percySnapshot()
    })

    it("Enables submission after all mandatory fields are filled", () => {
        cy.fillMandatoryFields()  // code refactor with custom commands functions 
        cy.percySnapshot()
    })
//  .only to only execute that test
    it("Updates the agreement based on fullname, tickets quantity & type", () => {
        cy.get('#first-name').type('Kanu')
        cy.get('#last-name').type('Huser')
        cy.get('#ticket-quantity').select('4')
        cy.get('#vip').check()
        cy.percySnapshot()
    })

    // this goes inside a variable for we will reuse it
    const successfulFormSubmission = 'Shows a success message after form submission'
    it(successfulFormSubmission, () => {
        cy.fillMandatoryFields()
        cy.contains('Confirm Tickets').click() // gets the DOM element containing the text
        cy.percySnapshot(successfulFormSubmission, {
            percyCSS: '.success span { display: none; }' // we can inspect the element on browser and hide it with this on element.style
        })
    })
    
})