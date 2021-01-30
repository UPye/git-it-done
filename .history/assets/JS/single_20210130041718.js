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
        // Create a link element t
    }
};

getRepoIssues("facebook/react");