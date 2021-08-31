const Users = require('./model/User.js');

const resolvers = {

  Query: {
    Hello: () => {
      return "Hello World"
    },
    getAllUsers: async () => {
      return await Users.find()
    },

    findUserbyId: async (_, args) => {
      const { id } = args
      return Users.findById(id)

    },

    filterUsers: async (_, args) => {
      const { age } = args
      return Users.find({ age })
    }
  },

  Mutation: {
    createUser: async (_, args) => {
      const { age, firstName, lastName, email, password } = args.input
      const post = await new Users({ age, firstName, lastName, email, password }).save()
      return post
    },

    updateUser: async (_, args) => {
      const { id } = args
      const { age, firstName, lastName, email, password } = args.input
      const user = await Users.findByIdAndUpdate(id, {
        age,
        firstName,
        lastName,
        email,
        password
      }, { new: true })
      return user

    },
    deleteUser: async (_, args) => {
      const { id } = args
      await Users.findByIdAndDelete(id);
      return "User deleted"

    }

  }
}

module.exports = resolvers;