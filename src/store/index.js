import {createStore} from 'redux'
import {rootReducer} from './rootReducer';



// Store
const store = createStore(rootReducer);

export {store};