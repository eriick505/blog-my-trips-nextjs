import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''

const client = new GraphQLClient(endpoint, {
	headers: {
		Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
	}
})

export default client
