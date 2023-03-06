const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: [User]!
    }

    type Mutation {
        login(email: Sting!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(): User
        removeBook(bookId: ID!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: number
        savedBooks: [Book]!
    }

    type Book {
        bookId: ID
        authors: [String]!
        description: String
        title: String
        image:
        link:
    }

    type Auth {
        token:
        user: [User]!
    }
`;

module.exports = typeDefs;