import { START_EDITING, STOP_EDITING, UNSELECT_BOOK } from '../actions';


const edit_mode = (state = false, action) => {
    switch (action.type) {
        case START_EDITING:
            return true;
        case STOP_EDITING:
        case UNSELECT_BOOK:
            return false;
        default:
            return state;
    }
};

export default edit_mode;
