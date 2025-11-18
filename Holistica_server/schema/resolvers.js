export const resolvers = {
  Query: {
    hello: () => "Hello from Holistica GraphQL!",
  },

  Mutation: {
    
    register: (_, args) => {
      console.log("📩 REGISTER Mutation Received:", args);

      return {
        id: "1",
        name: args.name,
        email: args.email,
        message: "User registered successfully"
      };
    },

    login: (_, args) => {
      console.log("📩 LOGIN Mutation Received:", args);

      return {
        id: "1",
        name: "Demo User",
        email: args.email,
      };
    },
  },
};
