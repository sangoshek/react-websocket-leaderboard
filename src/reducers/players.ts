import { playerInfo } from '../mock/players'

const INITIAL_STATE = playerInfo

export default function players(state = INITIAL_STATE, action: any){
	switch(action.type) {
		case "SET_PLAYER":
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};