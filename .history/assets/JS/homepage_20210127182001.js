var userFormEl = document.querySelector("#user-form");
var nameImputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

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
    repoContainerEl.textContent = "";
    repoSearchTerm.textContent = searchTerm;

    // Loop over repos
    for (var i = 0; i < repos.length; i++) {
        // Format repo name
        var repoName = repos[i].owner.login + "/" + repos[i].name;

        // Create a container for each repo
        var repoEl = document.createElement("div");
        repoEl.classList = "list-item flex-row justify-space-between align-center";

        // Create a span element to hold repository name
        var titleEl = document.createElement("span");
        titleEl.textContent = repoName;

        // Append to container
        repoEl.appendChild(titleEl);

        // Create a status element
        var statusEl = document.createElement("span");
        statusEl.classList = "flex-row align-center";

        // Check if current repo has issues or not
        if 

        // Append container to DOM
        repoContainerEl.appendChild(repoEl);
    }
};



userFormEl.addEventListener("submit", formSubmitHandler);