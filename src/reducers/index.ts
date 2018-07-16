import {routerReducer} from 'react-router-redux'
import {countReducer, ICountState} from 'reducers/counter.reducer'
import {combineReducers} from 'redux'

export interface IAppState {
	count: ICountState,
	router: any
}

const appReducers = combineReducers({
	count: countReducer,
	router: routerReducer,
})

export {appReducers}
