
describe('Login flow', () => {
    it('Valid Credentials', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get("input[placeholder='Username']").click().type("Admin")
      cy.get("input[placeholder='Password']").click().type("admin123")
      cy.get("button[type='submit']").click()
      cy.wait(3000)
      cy.get(":nth-child(6) > .oxd-main-menu-item").click()
        })
    
        })