import { createStore } from 'redux'

import reducer from './reducers/reducer'

//创建一个store，第一个参数必填，为reducer
const store = createStore(reducer)

export default store
