export const LOAD_BOOKS = 'LOAD_BOOKS';
export const SELECT_BOOK = 'SELECT_BOOK';
export const UNSELECT_BOOK = 'UNSELECT_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const SAVE_BOOK = 'SAVE_BOOK';
export const BOOK_BOOK = 'BOOK_BOOK';
export const RETURN_BOOK = 'RETURN_BOOK';
export const START_EDITING = 'START_EDITING';
export const STOP_EDITING = 'STOP_EDITING';
export const UPDATE_FIELD = 'UPDATE_FIELD';

export const loadBooks = books => ({
    type: LOAD_BOOKS,
    books: books
});

export const selectBook = index => ({
    type: SELECT_BOOK,
    index: index
});

export const unselectBook = () => ({
    type: UNSELECT_BOOK
});

export const deleteBook = book => ({
    type: DELETE_BOOK,
    book: book
});

export const saveBook = (book, data) => ({
    type: SAVE_BOOK,
    book: book,
    data: data
});

export const startEditing = book => ({
    type: START_EDITING,
    data: book
});

export const resetForm = book => startEditing(book);

export const updateField = (field, value) => ({
    type: UPDATE_FIELD,
    field: field,
    value: value
});

export const bookBook = book => ({
    type: BOOK_BOOK,
    book: book
});

export const returnBook = book => ({
    type: RETURN_BOOK,
    book: book
});
