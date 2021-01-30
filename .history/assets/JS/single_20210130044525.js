var issueContainerEl = document.querySelector("#issues-container");



var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl)
        .then(function(response) {
            // Request was successful
            if (response.ok) {
                response.json().then(function(data) {
                    // Pass response data to DOM function
                    displayIssues(data);
                    
                    // Check if API has paginated issues
                    if (response.headers.get("Link")) {
                        console.log("Repo has more than 30 issues");
                    }
                });
            }
            else {
                alert("There was a problem with your request!");
            }
        });
};

var displayIssues = function(issues) {
    if (issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues!";
        return;
    }
    for (var i =0; i < issues.length; i++) {
        // Create a link element to take users to the issue on github
        var issueEl = document.createElement("a");
        issueEl.classList = "list-item flex-row justifiy-space-between align-center";
        issueEl.setAttribute("href", issues[i].html_url);
        issueEl.setAttribute("target", "_blank");

        // Create span to hold issue title
        var titleEl = document.createElement("span");
        titleEl.textContent = issues[i].title;

        // Append to container
        issueEl.appendChild(titleEl);

        // Create a type element
        var typeEl = document.createElement("span");

        //  c   heck if issue is an actual issue or a pull request
        if (issues[i].pull_request) {
            typeEl.textContent = "(Pull request)";
        }
        else {
            typeEl.textContent = "(Issue)";
        }

        //  Append to container
        issueEl.appendChild(typeEl);

        issueContainerEl.appendChild(issueEl);
    }
};

getRepoIssues("facebook/react");