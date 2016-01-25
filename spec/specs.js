describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Rita","Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
  });
  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock","Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
  it("adds the fullAddress method to all contacts", function() {
    var testContact = new Contact("Sherlock","Holmes", "123 Main Street","Portland", "Oregon");
    expect(testContact.fullAddress()).to.equal("123 Main Street, Portland, Oregon");
  });
});
