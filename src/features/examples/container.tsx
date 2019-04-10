import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { Examples } from './Examples'
import { actions } from '../../domain/examples/reducer'
import { getAll } from '../../domain/examples/selectors'

const mapStateToProps = getAll

const mapDipatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  inc: () => dispatch(actions.increment()),
  dec: () => dispatch(actions.decrement()),
  reset: () => dispatch(actions.reset()),
})

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(Examples)
