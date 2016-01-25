//Business Logic
function Contact(firstName, lastName, address, city, state) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.fullAddress = function() {
  return this.address + ", " + this.city + ", " + this.state;
}

//User Interface Logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress, inputtedCity, inputtedState);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");

      $("#contacts").click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $(".fullAddress").text(newContact.fullAddress());

    });
  });
});
