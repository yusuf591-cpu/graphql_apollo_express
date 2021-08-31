const { buildSchema } = require("graphql");

const typeDefs = buildSchema(`
      type User {
        id:ID
        age:Int
        firstName:String
        lastName:String
        email:String
        password:String

      }

      type Query {
        Hello:String
        getAllUsers: [User]
        findUserbyId(id:String): User
        filterUsers(age:Int): [User]
      }

      input UserInput {
        age:Int!
        firstName:String!
        lastName:String!
        email:String!
        password:String!
      }

      type Mutation {
        createUser(input: UserInput): User
        deleteUser(id:String): String
        updateUser(id:String, input:UserInput): User
      }
`);

module.exports = typeDefs;
