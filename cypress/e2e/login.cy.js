describe('template spec', () => {
  it('Logar com Sucesso', () => {
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type("4dt@gmail.com")
    cy.get('#password').type("4DT")
    cy.contains('button','Entrar').click()
  })

  it('Campo em Branco', () => {
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')
    cy.contains('button','Entrar').click()
    cy.contains('p', 'Ei, não esqueça de digitar seu email!')
    cy.contains('p', 'Você precisa de uma senha para entrar! 🔒')
  })

  it('Campo Email incorreto', () => {
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type("4dt@gmail.con")
    cy.get('#password').type("4DT")
    cy.contains('button','Entrar').click()
    cy.contains('Acesso negado! Tente novamente.')
  })

  it('Campo senha incorreto', () => {
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type("4dt@gmail.com")
    cy.get('#password').type("4Dt")
    cy.contains('button','Entrar').click()
    cy.contains('Acesso negado! Tente novamente.')
  })

  it('Campo Email invalido', () => {
    cy.viewport(1440,900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type("4dtgmailcon")
    cy.get('#password').type("4DT")
    cy.contains('button','Entrar').click()
    cy.contains('Hmm... esse email parece estar errado 🤔')
  })
})