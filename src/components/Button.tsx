import * as React from 'react'
import styled from 'styled-components'

interface IButton {
	onClick: () => void
}

class Button extends React.Component<IButton> {
	public render() {
		const Btn = styled.button`
		background-color: ${(props) => props.theme.primary};
		border-color: ${(props) => props.theme.secondary};
		border-width: 2px;
		color: ${(props) => props.theme.secondary};
		`
		return <Btn onClick={this.props.onClick}>{this.props.children}</Btn>
	}
}

export {Button}
