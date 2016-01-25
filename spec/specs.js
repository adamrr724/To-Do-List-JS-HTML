describe('number', function() {
  it("is false if user enters a number less than one", function() {
    expect(number(0)).to.equal(false);
  });
  it("is false if user enters a non number", function() {
    expect(number("brad")).to.equal("NaN");
  });
  it("returns 'ping' if number is divisible by 3", function() {
    expect(number(3)).to.equal("ping");
  });
  it("return 'pong' if number is divisible by 5", function() {
    expect(number(10)).to.equal("pong");
  });
});
