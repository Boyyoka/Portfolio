import octokitRequest from '@octokit/request';
import config from '../../config'

//GraphQL call to github api
export const repos = octokitRequest('POST /graphql', {
  headers: {
    authorization: `token ${config.GITHUB_TOKEN}`
  },
  query: `{search (query: "is:public user:${config.GITHUB_USER}", type: REPOSITORY, first: 20) {
    edges {
      node {
        ... on Repository {
          name
          url
          primaryLanguage{
            name
          }
          languages(first: 3) { nodes {name} }
          description
           owner{
      			login
          }
        }
      }
    }
	}
}
	`,
})

export const sendMail = (body) => fetch(`${config.API_HOST}/api/mail/send`, {
  credentials: 'same-origin',
  mode: 'no-cors',
  method: 'POST',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' },
})