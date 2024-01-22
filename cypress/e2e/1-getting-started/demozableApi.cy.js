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

    it('Intentar crear un usuario existente moisecas32', function() {
      // Visita la página 
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').should('be.visible').click()

    // Esperar, encontrar y escribir en el campo de nombre de usuario
    cy.get('#sign-username').should('be.visible').type('moisecas32')

    // Esperar, encontrar y escribir en el campo de contraseña
    cy.get('#sign-password').should('be.visible').type('tuContraseña')

    // Hacer clic en el botón para crear la cuenta (ajusta el selector según sea necesario)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()    
    
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Please fill out Username and Password.');
    });
        
    })

    it.only('usuario y password correcto en login', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').type('moisecas32') 
        cy.get('#loginpassword').type(123456) 
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        
            
    })
    it('usuario incorrecto en login', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').type('moisecas3')    //el usuario correcto es moisecas32                  
            
    })

    it('password incorrecto en login', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').type('moisecas32') 
        cy.get('#loginpassword').type(12345) //el password correcto es 123456 
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()                     
            
    })
    

    
    
})