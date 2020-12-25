var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors');
 
// var schema = buildSchema(`
//   type Query {
//     bitcoin: String
//     ethereum: String
//     rollDice(numDice: Int!, numSides: Int): [Int]
//   }
// `);

// var root = {
//   bitcoin: () => {
//     return '(25/11/2020-14h57m) the current value for bitcoin $19,023.20';
//   },
//   ethereum: () => {
//     return '(25/11/2020-15h57m) the current value for ethereum is $588,95';
//   },
//   rollDice: ({ numDice, numSides }) => {
//     return Array(numDice).fill(0).map((_) => {
//       return (1 + Math.floor(Math.random() * (numSides || 6)));
//     })
//   }
// };

var schema = buildSchema(`
  input MessageInput {
    content: String
    author: String
  }
 
  type Message {
    id: ID!
    content: String
    author: String
  }
 
  type Query {
    getMessage(id: ID!): Message
    getFixedMessage: String
  }
 
  type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
`);
 
// If Message had any complex fields, we'd put them on this object.
class Message {
  id: string;
  content: string;
  author: string;
  constructor(id, {content, author}) {
    this.id = id;
    this.content = content;
    this.author = author;
  }
}
 
// Maps username to content
var fakeDatabase = {};
let id = 0;
 
var root = {
  getMessage: ({id}) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    return new Message(id, fakeDatabase[id]);
  },
  getFixedMsg: () => 'text for fixed msg',
  createMessage: ({input}) => {
    // Create a random id for our "database".
    id++; 
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
  updateMessage: ({id, input}) => {
    if (!fakeDatabase[id]) {
      throw new Error('no message exists with id ' + id);
    }
    // This replaces all old data, but some apps might want partial update.
    fakeDatabase[id] = input;
    return new Message(id, input);
  },
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

/*
mutation {
  createMessage(input: {
    author: "andy",
    content: "hope is a good thing",
  }) {
    id
  }
}
*/