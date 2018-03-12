import { gql } from 'react-apollo'

export default null

export const Posts = gql`
  query Posts {
    posts {
      id
      title
      votes
    }
  }
`

export const Author = gql`
  query Author($id: Int!) {
    author(id: $id) {
      id
      firstName
      posts {
        id
      }
    }
  }
`
