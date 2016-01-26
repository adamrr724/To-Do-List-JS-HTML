//Business Logic
function toDo(item) {
  this.item = item;
}

toDo.prototype.fullToDo = function() {
  return "<p><input type='checkbox' class='checkbox'>" + this.item + "</p>";
}

//User Interface Logic
$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    var item = $("input#toDo").val();
    var toDoList = new toDo(item);

    $("input#toDo").val("");

    $("ul#items").append("<li><span>" + toDoList.fullToDo() + "</span></li>");
  });
});

$(document).on("change", ".checkbox", function() {
  if($(this).attr("checked")) {
      $(this).removeAttr("checked");
    } else {
      $(this).attr("checked", "checked");
    }
    $(this).parent().toggleClass("checked");
});
