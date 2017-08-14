var request = require('request');
var GITHUB_USER = "Wa5abi";
var GITHUB_TOKEN = "01b8152bd4507278db846b201978b498b0e3d42c";

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      "User-Agent": "GitHub Avatar Downloader - Student Project",
    }
  };
  request.get(requestURL, cb);
}

getRepoContributors("jquery", "jquery", function(err, result) {
  const resultBody = JSON.parse(result.body);
  console.log("Errors:", err);
  console.log("Result:", resultBody);

  resultBody.forEach(function(body){
    console.log(body.avatar_url);
  });
});