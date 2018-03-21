import 'babel-polyfill'
import createHistory from 'history/createHashHistory'
import * as React from 'react'
import {render} from 'react-dom'
// Router
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'
// Redux
import {appReducers} from 'reducers/index'
import {applyMiddleware, compose, createStore} from 'redux'
// Saga
import createSagaMiddleware from 'redux-saga'

// Components
import {AppComponent} from './app'
import {rootSaga} from './sagas/root.saga'

interface IDevtoolsWindow extends Window {
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
}

const history = createHistory()
const middleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const win: IDevtoolsWindow = window
const enhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	appReducers,
	enhancers(applyMiddleware(middleware, sagaMiddleware)),
)

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Route component={AppComponent}/>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app'),
)

sagaMiddleware.run(rootSaga)
