
describe('json PlaceHolder Negative Test', function() {

  it('Update Removing Title', function() {
    cy.request('PUT','https://jsonplaceholder.typicode.com/posts/100')
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(100)
      expect(response.body).to.not.have.property('title')
    })
   })   

   it('Create New Comments without name and email', function() {
    cy.request('POST','https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.id).to.eq(501)
      expect(response.body).to.not.have.property('name')
      expect(response.body).to.not.have.property('email')
    })
   })  
   
})
