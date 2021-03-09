# cra-template-graphql

A GraphQL client based on Create React App. Tech stack:

* TypeScript
* [Apollo Client](https://github.com/apollographql/apollo-client) as a GraphQL client
* [GraphQL code generator](https://graphql-code-generator.com/) and [TypeScript React Apollo](https://graphql-code-generator.com/docs/plugins/typescript-react-apollo) for code generation of typed functions
* [graphql-let](https://github.com/piglovesyou/graphql-let) for `gql()` syntax

## Usage

**You need a GitHub token** to start the template. [Go get one](https://github.com/settings/tokens) and fill your `.env` file with it.

```bash
npx create-react-app my-app --template graphql
cd my-app
mv .env.template .env  # Fill with your GitHub token
```

or

```bash
yarn create react-app my-app --template graphql
cd my-app
mv .env.template .env  # Fill with your GitHub token
```

## Author

@piglovesyou