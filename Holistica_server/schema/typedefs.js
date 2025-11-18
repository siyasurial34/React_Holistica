export const typeDefs = `

  type User {
  id: ID!
  name: String!
  email: String!
  message: String
}

  type Query {
    hello: String
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }

`;
