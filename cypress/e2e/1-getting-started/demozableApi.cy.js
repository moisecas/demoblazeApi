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

    it('carrito de compras', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.contains('Samsung galaxy s6').click();
        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('.active > .nav-link').click() //home 
        cy.contains('Nokia lumia 1520').click()
        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('.active > .nav-link').click() //home 
        cy.contains('Nexus 6').click()
        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('#cartur').click() //ver carrito 
        cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click() //delete item
            
    })
    it('checkout', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.contains('Samsung galaxy s6').click();
        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('#cartur').click() //ver carrito 
        cy.get('.col-lg-1 > .btn').click() //place order
        cy.get('#name').type('Moises');
        cy.get('#country').type('Colombia')
        cy.get('#city').type('Bucaramanga')
        cy.get('#card').type(123456)
        cy.get('#month').type('octubre')
        cy.get('#year').type(2023)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() //botón de compra
        //verificación de TC
        cy.get('#card').invoke('val').then((cardValue) => {
            cy.get('.lead').should('contain.text', cardValue);
        });
        

        
            
    })
    

    
    
})