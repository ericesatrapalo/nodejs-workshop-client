import { SELECT_BOOK, UNSELECT_BOOK, DELETE_BOOK } from '../actions';


const selected_book = (state = null, action) => {
    switch (action.type) {
        case SELECT_BOOK:
            return action.index;
        case UNSELECT_BOOK:
        case DELETE_BOOK:
            return null;
        default:
            return state;
    }
};

export default selected_book;
