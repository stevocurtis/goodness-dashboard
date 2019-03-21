const expect = require("chai").expect;

describe("Some Tests", function() {
  it("should check something", function() {
    expect(true).to.be.true;
  });

  it("should check something else", function() {
    expect(undefined).to.be.undefined;
  });

  it("should check string value", function() {
    expect("expectedstr").to.contain("str");
  });

  it("should check string contains value", function() {
    expect("expectedstr").to.equal("expectedstr");
  });
});
