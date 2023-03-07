import {gql} from '@apollo/client';

export const QUERY_USER = gql`
query  me ($id: ID!) {
    me(id: $id) {
        _id
        username
        email
        password
        bookCount
        savedBooks
    }
}
`