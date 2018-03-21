import {IAction, IConnectedProps} from 'actions/action.interface'
import {Button} from 'components/Button'
import * as React from 'react'
import {connect} from 'react-redux'
import {IAppState} from 'reducers/index'
import {ThemeProvider} from 'styled-components'
import {theme} from 'theme/theme'

interface IAppComponent extends IConnectedProps {
	btnClick: () => void;
	count: number;
}

class App extends React.Component<IAppComponent> {
	public render() {
		return <ThemeProvider theme={theme}>
			<div>
				<p>Hello</p>
				<p>Test</p>
				<p>Count: {this.props.count}</p>
				<Button onClick={() => this.props.btnClick()}>Hello</Button>
			</div>
		</ThemeProvider>
	}
}

const AppComponent = connect(
	(state: IAppState) => ({
		count: state.count.count,
	}),
	(dispatch: (action: IAction) => void) => ({
		btnClick: () => dispatch({type: 'COUNT'}),
	}),
)(App)

export {AppComponent}
