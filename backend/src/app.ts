/**
 * Links
 * social with passport-jwt https://www.sitepoint.com/spa-social-login-google-facebook/
 * 
 * chore
 * proper ts config
 * proper eslint config
 * delete mongo urls in github tarefa
 */
// import express, { Request, Response, NextFunction } from 'express';
// import { graphqlHTTP } from 'express-graphql';
// import { buildSchema } from 'graphql';
// import cors from 'cors';

// const loggingMiddleware = (
//   req: Request, 
//   res: Response, 
//   next: NextFunction
// ): void => {
//   console.log(`req = ${req}`);
//   next();
// };

// var schema = buildSchema(`
//   input MessageInput {
//     content: String
//     author: String
//   }
 
//   type Message {
//     id: ID!
//     content: String
//     author: String
//   }
  
//   type Query {
//     getMessage(id: ID!): Message
//     getFixedMessage: String
//     ip: String
//   }
 
//   type Mutation {
//     createMessage(input: MessageInput): Message
//     updateMessage(id: ID!, input: MessageInput): Message
//   }
// `);
 
// // If Message had any complex fields, we'd put them on this object.
// class Message {
//   id: string;
//   content: string;
//   author: string;
//   constructor(id: any, {content, author}: any) {
//     this.id = id;
//     this.content = content;
//     this.author = author;
//   }
// }

// // Maps username to content
// var fakeDatabase: any = {};
// let id = 0;

 
// var root = {
//   getMessage: ({id}: any) => {
//     if (!fakeDatabase[id]) {
//       throw new Error('no message exists with id ' + id);
//     }
//     return new Message(id, fakeDatabase[id]);
//   },
//   getFixedMsg: () => 'text for fixed msg',
//   createMessage: ({input}: any) => {
//     // Create a random id for our "database".
//     id++; 
//     fakeDatabase[id] = input;
//     return new Message(id, input);
//   },
//   updateMessage: ({id, input}: any) => {
//     if (!fakeDatabase[id]) {
//       throw new Error('no message exists with id ' + id);
//     }
//     // This replaces all old data, but some apps might want partial update.
//     fakeDatabase[id] = input;
//     return new Message(id, input);
//   },
//   id: (args: any, request: Request) => {
//     return request.ip
//   }
// };

// var app = express();
// app.use(cors());
// app.use(loggingMiddleware);
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(3001);
// console.log('Running a GraphQL API server at http://localhost:3001/graphql');


import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import swig from 'swig';
import passport from 'passport';
import session from 'express-session';
import mongoose from 'mongoose';
