describe('Demozable.com', function() {

    //utiliza only luego de it, it.only para ejecutar la prueba que desees en en entorno de cypress sección specs
    //cuando ejecutes npx cypress open debes seleccionar pruebas end to end
    it('Crear usuario', function() { 
        //https://www.demoblaze.com/index.html
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#signin2').click()
        cy.get('#sign-username').type('moisecas32')
        cy.get('#sign-password').type('123456')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


    }
    )

    it.only('Intentar crear un usuario existente moisecas32', function() {
      // Visita la página 
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').click()
    cy.get('#sign-username').type('moisecas32')
    cy.get('#sign-password').type('tuContraseña') 
    cy.on('window:alert', (alertText) => {  //validar ventana alert 
        expect(alertText).to.contains('This user already exist');
    });              
        
    })

    it('usuario y password correcto en login', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        
            
    })
    it('usuario y password incorrecto en login', function() {
        cy.visit('https://www.demoblaze.com/index.html')
       
        

        
            
    })
    

    
    
})