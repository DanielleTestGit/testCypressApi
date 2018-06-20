
describe('json PlaceHolder Positive Test', function() {

  it('Comments', function() {
    cy.request('https://jsonplaceholder.typicode.com/comments').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(500)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
   })

   it('Posts', function() {
    cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(100)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      
    })
   })

   it('Posts id 10', function() {
    cy.request('https://jsonplaceholder.typicode.com/posts/10').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.userId).to.eq(1)
      expect(response.body.title).to.contain("optio molestias id quia eum")
      expect(response.body).to.have.property('id')
      expect(response.body.id).to.eq(10)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
   })

   it('Photos', function() {
    cy.request('https://jsonplaceholder.typicode.com/photos').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(5000)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
    })
   })

   it('Photos Id 456', function() {
    cy.request('https://jsonplaceholder.typicode.com/photos/456').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.albumId).to.eq(10)
      expect(response.body).to.have.property('id')
      expect(response.body.id).to.eq(456)
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
      expect(response.body).to.have.property('url')
      expect(response.body.url).to.contain('http://placehold.it/600/abef8')
      expect(response.body).to.have.property('thumbnailUrl')
      expect(response.body.thumbnailUrl).to.contain('http://placehold.it/150/abef8')
    })
   })

   it('Update Title Post id 100', function() {
    cy.request('PUT','https://jsonplaceholder.typicode.com/posts/100', {title: 'Test Update Id 100'})
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(100)
      expect(response.body).to.have.property('title')
      expect(response.body.title).to.contain('Test Update Id 100')
    })
   })   

   it('Create New Post', function() {
    cy.request('POST','https://jsonplaceholder.typicode.com/posts', {title: 'Test NewPost Title'})
    .then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.id).to.eq(101)
      expect(response.body).to.have.property('title')
      expect(response.body.title).to.contain('Test NewPost Title')
    })
   })  
})
