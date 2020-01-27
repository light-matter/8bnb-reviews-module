// this is to import the chai expect function
const expect = require('chai').expect;

// the describe function is the test suite
describe('Jest', function() {
  // the it function is the unit test
  it('should run our tests using npm', function() {
    // the expect function is the spec test
    expect(true).to.be.ok;
  });
});

// the ok term above is a chai term that says the outcome will be truthy (i.e. will satisfy and if condition)

//it groups spec tests together to make up a whole unit test