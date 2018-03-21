interface IAction {
	type: string;
	payload?: any;
}

interface IConnectedProps {
	dispatch: (action: IAction) => void;
}

export {IAction, IConnectedProps};