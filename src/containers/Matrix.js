import { connect } from 'react-redux'
import Matrix from '../components/Matrix'
import * as Actions from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  endIntro: () => {
    dispatch(Actions.endIntro())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matrix)

