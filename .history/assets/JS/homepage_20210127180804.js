var userFormEl = document.querySelector("#user-form");
var nameImputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term")

var getUserRepos = function(user) {

    // Format the github API URL.
    var apiURL = "https://api.github.com/users/" + user + "/repos";

    // Make a request to the URL
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            displayRepos(data, user);
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

    // Get value from input element
    var username = nameImputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameImputEl.value = "";
    }
    else {
        alert("Please enter a Github username");
    }
    console.log(event);
};

var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
};



userFormEl.addEventListener("submit", formSubmitHandler);