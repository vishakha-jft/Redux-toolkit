const redux = require('redux')
const createStore = redux.createStore
const buy_cake='buy_cake'
//Action
function buycake() {
    return {
        type: buy_cake,
        info: 'first redux action'
    }
}
//IntialState
const initialState ={
    numofcakes:10
}
//Reducer
const reducer =(state= initialState,action)=>{
    switch(action.type){
        case buy_cake: return{
            ...state,
            numofcakes : state.numofcakes-1
        }

        default: return state
    }
}
const store = createStore(reducer)
console.log('Initial State',store.getState())
const unsubscribe = store.subscribe(()=>console.log('Updated State',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()