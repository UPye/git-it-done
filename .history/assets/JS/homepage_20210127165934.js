var getUserRepos = function(user) {

    // Format the github API URL
    fetch("https://api.github.com/users/octocat/repos").then(function(response) {
        response.json().then(function(data) {
        console.log(data);
        });
    });

    console.log("outside");

    var response = fetch("https://api.github.com/users/octocat/repos");
    console.log(response);
};

getUserRepos();