// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = 
                res.firstName + " " + res.lastName
              if (res.scored58outof70inWebProgrammingand60outof70inOS) {
                message += "";
              }
              else {
                message += " scored58outof70inWebProgrammingand60outof70inOS ";
              }
              message += " and scored scored 58 out of 70 in Web Programming and 60 out of 70 in OS ";
              message += res.numberOfDisplays + 1;
              message += "and 60 out of 70 in OS";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
