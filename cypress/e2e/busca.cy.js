describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
        
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Formação Azure');
        cy.get('#header-barraBusca-form-campoBusca').click();
        cy.get('h4.busca-resultado-nome')
          .should('contain', 'Formação Azure');
    })
})