import { combineReducers } from 'redux';

import course from './course';
import count from './count';

export default combineReducers({
    course,
    count
});