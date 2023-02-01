
describe('Login flow', () => {
  it('Valid Credentials', () => {
    cy.visit('https://functionup.org/')
    cy.get("input[placeholder='First Name *']").click({scrollBehavior:false}).type("mani")
    cy.get("input[placeholder='Last Name *']").click({scrollBehavior:false}).type("kandan")
    cy.get("input[placeholder='Whatsapp Number *']").click({scrollBehavior:false}).type("8825696543")
    cy.get("input[type='checkbox']").click({scrollBehavior:false})
    cy.get("button[type='button']").click({scrollBehavior:false})
    cy.wait(1000)
      })
  
  it('Invalid credentials alphanumeric', function () {
    cy.visit('https://functionup.org/')
    cy.get("input[placeholder='First Name *']").click({force:true}).type("mani123")
    cy.get("input[placeholder='Last Name *']").click({force: true}).type("kandan")
    cy.get("input[placeholder='Whatsapp Number *']").click({force: true}).type("8825696143")
    cy.get("input[type='checkbox']").click({force: true})
    cy.get("button[type='button']").click({force:true})
    })

  it('Invalid credentials name bank', function () {
    cy.visit('https://functionup.org/')
    cy.get("input[placeholder='Last Name *']").click({force: true}).type("kandan")
    cy.get("input[placeholder='Whatsapp Number *']").click({force: true}).type("8825696143")
    cy.get("input[type='checkbox']").click({force: true})
    cy.get("button[type='button']").click({force:true})
    })

  it('Invalid credentials invalid number', function () {
    cy.visit('https://functionup.org/')
    cy.get("input[placeholder='First Name *']").click({force:true}).type("Mani")
    cy.get("input[placeholder='Last Name *']").click({force: true}).type("kandan")
    cy.get("input[placeholder='Whatsapp Number *']").click({force: true}).type("0000000000")
    cy.get("input[type='checkbox']").click({force: true})
    cy.get("button[type='button']").click({force:true})
    })

  it('Invalid credentials wihtout check box tick', function () {
    cy.visit('https://functionup.org/')
    cy.get("input[placeholder='First Name *']").click({force:true}).type("Mani")
    cy.get("input[placeholder='Last Name *']").click({force: true}).type("kandan")
    cy.get("input[placeholder='Whatsapp Number *']").click({force: true}).type("8825696143")
    cy.get("button[type='button']").click({force:true})
    })

  it('Invalid credentials blank all', function () {
    cy.visit('https://functionup.org/')
    cy.wait(1000)
    cy.get("button[type='button']").click({force:true})
    })
  it('Invalid credentials only tick check box', function () {
    cy.visit('https://functionup.org/')
    cy.wait(500)
    cy.get("input[type='checkbox']").click({scrollBehavior:false})
    cy.get("button[type='button']").click({force:true})
    })
  it('Invalid credentials 9digit number', function () {
    cy.visit('https://functionup.org/')
    cy.get("input[placeholder='First Name *']").click({force:true}).type("Mani")
    cy.get("input[placeholder='Last Name *']").click({force: true}).type("kandan")
    cy.get("input[placeholder='Whatsapp Number *']").click({force: true}).type("856956235")
    cy.get("input[type='checkbox']").click({force: true})
    cy.get("button[type='button']").click({force:true})
  })

})