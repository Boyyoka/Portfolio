import octokitRequest from '@octokit/request';
import config from '../../config'

//GraphQL call to github api
export const repos = octokitRequest('POST /graphql', {
	headers: {
    authorization: `token ${config.API_TOKEN}`
	},
  query: `{search (query: "is:public user:${config.GIT.USER}", type: REPOSITORY, first: 20) {
    edges {
      node {
        ... on Repository {
          name,
          url,
          description,
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