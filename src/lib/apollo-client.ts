import { ApolloClient, InMemoryCache } from "@apollo/client";
const BALANCER_SUBGRAPH =
  "https://api.studio.thegraph.com/query/21610/ethdenver-stage/0.0.1";

export const client = new ApolloClient({
  uri: BALANCER_SUBGRAPH,
  cache: new InMemoryCache(),
});
