const should = require('should');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Get list of Courses', function(){
    it('should return status 200',(done) =>{
       chai.request(sails.hooks.http.app)
       .get('/courses')
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
      Courses.destroy({}).then(function(data){
        console.log('done');
        done();
      })
  })
  // missing data
  it('should return status 422',(done) =>{
     chai.request(sails.hooks.http.app)
     .post('/courses')
     .send({name:'new course name'})
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
    .post('/courses')
    .send({name:'new uers', instructor:1})
    .end(function(err, resp){
      should.not.exist(err);
      should.exist(resp)
      resp.status.should.equal(201);
      done();
    })
  })

})
