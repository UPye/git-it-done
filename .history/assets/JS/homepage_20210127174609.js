var userFormEl = document.querySelector("#user-form");
var nameImputEl = document.querySelector("#username");

var getUserRepos = function(user) {

    // Format the github API URL.
    var apiURL = "https://api.github.com/users/" + user + "/repos";

    // Make a request to the URL
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
    
    
    
    // Original code coincided to test the url before making it more generic to search for any user.
    /* fetch("https://api.github.com/users/octocat/repos").then(function(response) {
        response.json().then(function(data) {
        console.log(data);
        });
    });

    console.log("outside");

    var response = fetch("https://api.github.com/users/octocat/repos");
    console.log(response); */
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};



userFormEl.addEventListener("submit", form)