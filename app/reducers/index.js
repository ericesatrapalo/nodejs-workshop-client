import { combineReducers } from 'redux';

import books from './books';
import selected_book from './selected_book';
import edit_mode from './edit_mode';


const reducers = combineReducers({
    books,
    selected_book,
    edit_mode
});

export default reducers;
