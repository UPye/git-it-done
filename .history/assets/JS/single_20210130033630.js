var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction"
    console.log(repo);
};

getRepoIssues("facebook/react");