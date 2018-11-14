// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".btn-burger").on("click", function (event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");

    if (!devoured) {
      var newDevouredState = {
        devoured: !devoured
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
          console.log("changed devoured to", newDevouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    } else {
      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }

  });

  $("#add-burger-button").on("click", function (event) {
    var newBurger = {
      burger_name: $("#burger-name-input").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
