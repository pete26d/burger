$(document).ready(function() {
    
  $(".devour-burger").on("click", function(event) {
    event.preventDefault();

    var burger_id = $(this).data("id");
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("Added new burger");
        // Reload the page to get the updated burger list.
        location.reload();
    });
});
});
