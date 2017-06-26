/*import { initLeanCloud, testAV} from './api'*/
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

export default () => {
    /*initLeanCloud()*/
    /*testAV()*/

    const middlewares = [thunk, createLogger()]
   
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) 
        : compose;

    const enhancers = composeEnhancers(
        applyMiddleware(...middlewares)
    )

    const store = createStore(
        reducer,
        enhancers
    )
    console.log(store)
    return store

}
