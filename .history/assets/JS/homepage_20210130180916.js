var userFormEl = document.querySelector("#user-form");
var nameImputEl = document.querySelector("#username");
var repoContainerEl = document.querySelector("#repos-container");
var repoSearchTerm = document.querySelector("#repo-search-term");

var formSubmitHandler = function(event) {
    event.preventDefault();

    // Get value from input element
    var username = nameImputEl.value.trim();

    if (username) {
        getUserRepos(username);

        // Clear old content
        repoContainerEl.textContent = "";
        nameImputEl.value = "";
    }
    else {
        alert("Please enter a Github username");
    }
};

var getUserRepos = function(user) {

    // Format the github API URL.
    var apiURL = "https://api.github.com/users/" + user + "/repos";

    // Make a request to the URL
    fetch(apiURL)
        .then(function(response) {
            // Request was successful
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    displayRepos(data, user);
                });
            }
            else {
                alert('Error: ' + response.statusText);
                console.log(statusText);
            }
        })

        .catch(function(error) {
            // Notice this `.catch()` getting chained onto the end of the `.then()`
            alert("Unable to connect to GitHub");
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

var getFeaturedRepos = function(language) {
    var apiUrl = "https://api.github.com/search/repositories?q=" + language + "+is:featured&sort=help-wanted-issues";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                
                console.log(response);
            }
            else {
                alert("Error: " + response.statusText);
            }
        });
};

var displayRepos = function(repos, searchTerm) {
    if (repos.length === 0) {
        repoContainerEl.textContent = "No repositories found.";
        return;
    }
    repoContainerEl.textContent = "";
    repoSearchTerm.textContent = searchTerm;

    // Loop over repos
    for (var i = 0; i < repos.length; i++) {
        // Format repo name
        var repoName = repos[i].owner.login + "/" + repos[i].name;

        // Create a container for each repo
        var repoEl = document.createElement("a");
        repoEl.classList = "list-item flex-row justify-space-between align-center";
        repoEl.setAttribute("href", "./single-repo.html?repo=" + repoName);

        // Create a span element to hold repository name
        var titleEl = document.createElement("span");
        titleEl.textContent = repoName;

        // Append to container
        repoEl.appendChild(titleEl);

        // Create a status element
        var statusEl = document.createElement("span");
        statusEl.classList = "flex-row align-center";

        // Check if current repo has issues or not
        if (repos[i].open_issues_count > 0) {
            statusEl.innerHTML = "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
        }
        else {
            statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }

        // Append to container
        repoEl.appendChild(statusEl);

        // Append container to DOM
        repoContainerEl.appendChild(repoEl);
    }
};



userFormEl.addEventListener("submit", formSubmitHandler);