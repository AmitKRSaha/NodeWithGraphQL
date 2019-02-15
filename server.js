const express = require('express');
const graphqlHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const {queryType} = require('./query.js');


const port = 5000;
const app = express();

//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.get('/hello', (req,res) => {
    res.send("hello");
   }
);

app.listen(port);
console.log(`Server Running at localhost:${port}`);