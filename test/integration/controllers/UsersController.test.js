const should = require('should');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Get list of users', function(){
    beforeEach((done)=>{
        console.log('before');
        done();

    })
    afterEach((done) =>{
        console.log('after each');

        done();

    })
    it('should return status 200',(done) =>{
       chai.request(sails.hooks.http.app)
       .get('/users')
       .end(function(err, resp){
           should.not.exist(err);
           should.exist(resp);
           resp.status.should.equal(200);
           done();
       })
    })
})
// Create new users

describe('Create new users', function(){
  beforeEach((done)=>{
      console.log('before');
      done();

  })
  afterEach((done) =>{
      console.log('after each');
      Users.destroy({}).then(function(data){
        console.log('done');

        done();
      })


  })
  // missing data
  it('should return status 422',(done) =>{
     chai.request(sails.hooks.http.app)
     .post('/users')
     .send({name:'new name'})
     .end(function(err, resp){
         should.not.exist(err);
         should.exist(resp);
         resp.status.should.equal(422);
         done();
     })
  })
  // Create
  it('should return 201', (done)=>{
    chai.request(sails.hooks.http.app)
    .post('/users')
    .send({name:'new uers', role:'users'})
    .end(function(err, resp){
      should.not.exist(err);
      should.exist(resp)
      resp.status.should.equal(201);
      done();
    })
  })

})
