import React from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Button } from 'components'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!!!</p>
    <Button className="hot-pink" onClick={props.changePage}>Go to about page</Button>
  </div>
)

Home.propTypes = {
  changePage: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
}, dispatch)

export default connect(
  null,
  mapDispatchToProps,
)(Home)
