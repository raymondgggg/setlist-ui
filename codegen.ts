import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnv } from 'vite'

const env = loadEnv('development', process.cwd(), 'VITE_')

const config: CodegenConfig = {
    schema: env.VITE_GRAPHQL_URL,
    documents: ['src/**/*.graphql'],
    generates: {
        'src/gql/generated.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                withHooks: true,
                reactApolloVersion: 4,
            },
        },
    },
};

export default config;