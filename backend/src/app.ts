var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors');
 
var schema = buildSchema(`
  type Query {
    bitcoin: String
    ethereum: String
  }
`);

var root = {
  bitcoin: () => {
    return '(25/11/2020-14h57m) the current value for bitcoin $19,023.20';
  },
  ethereum: () => {
    return '(25/11/2020-15h57m) the current value for ethereum is $588,95';
  }
};

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');