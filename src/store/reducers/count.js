const INITIAL_STATE = 0;

export default function count(state=INITIAL_STATE, action){
    if(action.type === 'INCREMENT')
        return state + 1
    if(action.type === 'DECREMENT')
        return state - 1
    return state
}