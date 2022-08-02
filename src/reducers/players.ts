import { playerInfo } from '../mock/players'

const INITIAL_STATE = playerInfo

const updateObjectInArray = (array: any, payload: any) => {
	return array.map((item: any, index: number) => {
	  if (item.id !== payload.id) {
		return item
	  }
	  return {
		...item,
		...payload
	  }
	})
  }

export default function players(state = INITIAL_STATE, action: any){
	switch(action.type) {
		case "SET_PLAYER":
			console.log('payload',action.payload)
			return updateObjectInArray(state, action.payload);
		default:
			return state;
	}
};