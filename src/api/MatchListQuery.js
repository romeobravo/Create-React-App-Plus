import { gql } from 'react-apollo'

export default gql`
  query MatchListQuery {
    channels {
      id
      name
    }
  }
`
