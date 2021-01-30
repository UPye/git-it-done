var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl)
        .then(function(response) {
            // Request was successful
            if (response.ok) {
                response.json().then(function(data) {
                    // Pass response data to DOM function
                    displayIssues(data);
                });
            }
            else {
                alert("There was a problem with your request!");
            }
        });
};

var displayIssues = function(issues) {
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
        issueEl.app
    }
};

getRepoIssues("facebook/react");