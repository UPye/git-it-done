var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos").then(function(response)
    console.log("inside"));

    var response = fetch("https://api.github.com/users/octocat/repos");
    console.log(response);
};

getUserRepos();