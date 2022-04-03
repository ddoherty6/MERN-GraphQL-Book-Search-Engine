const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Book {
        bookId: String!
        authors: [String]!
        description: String
        title: String!
        image: String
        link: String
    }

    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: Book
    }

    type Auth {
        token: ID!
        user: User
    }

    input saveBookInput {
        authors: [String]!
        title: String!
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: saveBookInput): User
        removeBook(authors: [String]!, title: String!, image: String, link: String): User
    }
`;

module.exports = typeDefs;