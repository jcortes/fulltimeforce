const GITHUB_USER = "jcortes";
const GITHUB_REPO = "minesweeper-api";
const GITHUB_BASE_URL = "https://api.github.com";
const GITHUB_ACCEPT_HEADER = "application/vnd.github.v3+json";
const GITHUB_REPOS_COMMITS_PATH = `repos/${GITHUB_USER}/${GITHUB_REPO}/commits`;

module.exports = {
  GITHUB_BASE_URL,
  GITHUB_ACCEPT_HEADER,
  GITHUB_REPOS_COMMITS_PATH
};