import { connect } from 'react-redux'
import Background from '../components/Background'
import * as Actions from '../actions/index'

const mapStateToProps = (state, ownProps) => ({
  showIntro: state.get('showIntro'),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  endIntro: () => {
    dispatch(Actions.endIntro())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Background)
