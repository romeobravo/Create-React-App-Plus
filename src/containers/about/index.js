import React from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { Posts } from 'api/queries'

class About extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      posts: PropTypes.array,
    }),
  }

  static defaultProps = {
    data: {
      loading: false,
      error: '',
      posts: [],
    },
  }

  render() {
    const { loading, error, posts } = this.props.data
    if (loading) {
      return <div>Loading: { loading }</div>
    }

    if (error) {
      return <div>{ error }</div>
    }

    return (
      <div>
        <h1>About Us</h1>

        { posts && posts.map(post => <div key={post.id}>{post.title} {post.votes}</div>) }
      </div>
    )
  }
}

export default compose(
  graphql(Posts),
)(About)
