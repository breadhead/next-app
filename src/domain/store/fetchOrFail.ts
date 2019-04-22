import { createFetchOrFail } from '@breadhead/thunk-utils'

import { State } from './State'
import { Api } from '../api'
import { selectToken } from '../user/selectors/selectToken'

export const fetchOrFail = createFetchOrFail<State, Api>(selectToken)
