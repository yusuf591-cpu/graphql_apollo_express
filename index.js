const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const DB = process.env.DB_Database;
const localhost = process.env.PORT;

async function start() {
  try {
    
    const app = express();
    app.listen(localhost, () => console.log(`Server has been started ${localhost}`))
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })

    const connection = mongoose.connection;
    connection.once("open", () => console.log("Connected to MongoDB"));

    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}
start();