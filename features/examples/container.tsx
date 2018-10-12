import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import Examples from './organisms/Examples'
import { actions } from './reducer'
import { getAll } from './selectors'

const mapStateToProps = getAll

const mapDipatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  inc: () => dispatch(actions.increment()),
  dec: () => dispatch(actions.decrement()),
  reset: () => dispatch(actions.reset()),
})

export default connect(mapStateToProps, mapDipatchToProps)(Examples)
