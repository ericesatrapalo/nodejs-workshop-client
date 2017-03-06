import { LOAD_BOOKS, DELETE_BOOK, BOOK_BOOK, RETURN_BOOK } from '../actions';

const setAvailabilityById = (books, id, availability) => books.map(book => {
    if (book.id === id) {
        book.available = availability;
    }
    return book;
});

const books = (state = [], action) => {
    switch (action.type) {
        case LOAD_BOOKS:
            return action.books;
        case DELETE_BOOK:
            return state.filter(book => (book.id !== action.book.id));
        case BOOK_BOOK:
            return setAvailabilityById(state, action.book.id, false);
        case RETURN_BOOK:
            return setAvailabilityById(state, action.book.id, true);
        default:
            return state;
    }
};

export default books;
