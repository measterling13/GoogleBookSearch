import {gql} from '@apollo/client';

export const QUERY_ME = gql`
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