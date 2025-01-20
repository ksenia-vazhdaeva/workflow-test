import { Octokit } from "@octokit/action";

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");

const data = await octokit.paginate("GET /repos/{owner}/{repo}/environments", {
    owner,
    repo,
    per_page: 100,
    // headers: {
    //     "X-GitHub-Api-Version": "2022-11-28",
    // },
});
const environments = data.map(e => e.name)

console.log(environments)
