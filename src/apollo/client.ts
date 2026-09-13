import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { SetContextLink} from '@apollo/client/link/context';

// GraphQL endpoint configuration
const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL, // Your GraphQL server URL
});

// Authentication header setup (JWT tokens, etc.)
const authLink = new SetContextLink(({ headers }) => {
    // Get token from localStorage
    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

// Create Apollo Client instance
const client = new ApolloClient({
    // Link chain: authentication -> HTTP request
    link: authLink.concat(httpLink),

    // Cache configuration
    cache: new InMemoryCache({
        typePolicies: {
            // Cache policy configuration (optional)
            Query: {
                fields: {
                    posts: {
                        // Cache merge policy for pagination
                        keyArgs: false,
                        merge(existing = [], incoming) {
                            return [...existing, ...incoming];
                        }
                    }
                }
            }
        }
    }),

    // Connect to Apollo DevTools in development
    devtools: {
        enabled: import.meta.env.DEV
    },
});

export default client;