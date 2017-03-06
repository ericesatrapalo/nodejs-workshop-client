import { combineReducers } from 'redux';

import books from './books';
import selected_book from './selected_book';
import edit_mode from './edit_mode';
import form from './form';


const reducers = combineReducers({
    books,
    selected_book,
    edit_mode,
    form
});

export default reducers;
