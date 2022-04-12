import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql `
    mutation saveBook($bookId: String!, $authors: [String], $title: String, $image: String, $link: String) {
        saveBook(bookId: $bookId, authors: $authors, title: $title, image: $image, link: $link) {
            user {
                _id
                username
            }
        }
    }

`;

export const REMOVE_BOOK = gql `
    mutation removeBook($authors: [String]!, $title: String!, $image: String, $link: String) {
        removeBook(authors: $authors, title: $title, image: $image, link: $link) {
            user {
                _id
                username
            }
        }
    }

`;