import {IAction} from 'actions/action.interface'

export interface ICountState {
	count: number
}

const initialState: ICountState = {
	count: 0,
}

const countReducer = (state: ICountState = initialState, action: IAction): ICountState => {
	switch (action.type) {
		case 'COUNT':
			return {
				count: state.count + 1,
			}
		default:
			return state;
	}
};

export {countReducer}
