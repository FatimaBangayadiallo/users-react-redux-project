import  {createStore} from 'redux';
import usersReduser from '../reducers/usersReducer.js';

const Store = createStore(usersReduser);
export default Store;
