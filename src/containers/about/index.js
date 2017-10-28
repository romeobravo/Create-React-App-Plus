import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'

import MatchListQuery from 'api/MatchListQuery'

class About extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      matches: PropTypes.array,
    }),
  }

  static defaultProps = {
    data: {
      loading: false,
      error: '',
      matches: [],
    },
  }

  render() {
    const { loading, error } = this.props.data
    return (
      <div>
        <h1>About Us</h1>

        { loading && error}
      </div>
    )
  }
}

const AboutWithData = graphql(MatchListQuery)(About)
export default AboutWithData
