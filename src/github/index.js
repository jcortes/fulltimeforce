const superagent = require("superagent");
const { GITHUB_BASE_URL, GITHUB_ACCEPT_HEADER, GITHUB_REPOS_COMMITS_PATH } = require("../config");

const GIHUB_COMMITS_URL = `${GITHUB_BASE_URL}/${GITHUB_REPOS_COMMITS_PATH}`;

function getCommits(req, res) {
  return superagent
    .get(GIHUB_COMMITS_URL)
    .set('Agent', GITHUB_ACCEPT_HEADER)
    .set('User-Agent', 'request')
    .end((err, response) => {
      if (err) {
        const { status, message, response: errResp } = err;
        return res.json({ status, message, headers: errResp.request.header });
      }
      const commits =
        JSON.parse(response.text)
          .map(({ sha, commit }) => {
            const { committer, message } = commit;
            const { name, email, date } = committer;
            return { sha, name, email, date, message };
          })
      return res.json(commits);
    });
}

module.exports = {
  getCommits
};