
describe('template spec', () => {
  it('abrir formulario', () => {
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type("4dt@gmail.com")
    cy.get('#password').type("4DT")
    cy.contains('button','Entrar').click()

    cy.contains('h4', 'Formulários').click()
    cy.get('#name').type("Dyego Roque")
    cy.get('#email').type("dyegoroque@gmail.com")
    cy.get('#phone').type("11999999999").should('have.value',"(11) 99999-9999")
    cy.get('#consultancyType').select("In Company")

    cy.contains('span', 'Pessoa Jurídica').click()
    cy.contains('label', 'Pessoa Física', {timeout: 10000}).find('input').should('be.not.checked')

    cy.get('#document').type('20182807000442').should('have.value', '20.182.807/0004-42')

    const redes = [
      'Instagram',
      'LinkedIn',
      'Udemy',
      'YouTube',
      'Indicação de Amigo'
    ]
    redes.forEach((item) => {
      cy.contains('label', item).find('input').check().should('be.checked')
    })

    cy.get('input[type=file]').selectFile('./cypress/fixtures/images.jpg', {force: true})

    cy.get('#details').type('alalalu')

    cy.get('#technologies').type('.NET').type("{enter}")
    cy.contains('span','.NET')

    cy.contains('label', 'Li e aceito os').find('input').check().should('be.checked')
    cy.contains('Enviar formulário').click()
   })
})