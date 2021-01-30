var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues"
    console.log(repo);
};

getRepoIssues("facebook/react");