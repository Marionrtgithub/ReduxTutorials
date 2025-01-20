const redux = require('redux')
const createstore = redux.createStore
const combineReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buycake(){
    {
        type: BUY_CAKE
        info: 'First redux action'
    }
}
function buyicecream(){
    type: BUY_ICECREAM
}
const initialcake ={
    numofcake: 10,
}
const initialicecream ={
    numoficecream: 20
}
const cakeReducer =(state = initialcake, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            numofcake: state.numofcake -1
        }
      
    }
}

const icecreamReducer =(state = initialicecream, action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            numoficecream: state. numoficecream-1
        }
        default: return state
    }
}
const  rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store = createstore(reducer);
console.log('intial state', getstate())
const unsubscribe = store.subscribe(() => console.log('update state', store.getstate()))
store.disputch(buycake())
store.disputch(buycake())
store.disputch(buycake())
store.disputch(buyicecream())
store.disputch(buyicecream())
unsubscribe()
