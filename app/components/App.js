import React from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import AvReplay from 'material-ui/svg-icons/av/replay';

import BookList from './book/List';
import BookCard from './book/Card';

import * as actions from '../actions';
import * as api from '../api';


class App extends React.Component {

    loadBooks() {
        api.fetchBooks().then(response => {
            this.props.dispatchLoadBooks(response.data.map(book => {
                book.available = (typeof book.reservation === 'undefined');
                book.cover = {
                    small: `http://covers.openlibrary.org/b/isbn/${book.isbn}-S.jpg`,
                    large: `http://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`
                };
                return book;
            }));
        })
    }

    deleteBook(book) {
        api.deleteBook(book).then(this.props.dispatchDeleteBook(book));
        this.props.dispatchDeleteBook(book);
    }

    bookBook(book) {
        //api.returnBook(book).then(this.props.dispatchBookBook(book));
        this.props.dispatchBookBook(book);
    }

    returnBook(book) {
        //api.reserveBook(book).then(this.props.dispatchReturnBook(book));
        this.props.dispatchReturnBook(book);
    }

    updateBook(book, data) {
        //api.returnBook(book).then(this.props.dispatchUpdateBook(book, data));
        console.log(book);
        console.log(data);
        //this.props.dispatchSaveBook(book, data);
    }

    resetBook(book) {
        //api.returnBook(book).then(this.props.dispatchBookBook(book));
        this.props.dispatchBookBook(book);
    }

    componentDidMount() {
        this.loadBooks();
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Tech library"
                    iconElementLeft={<Avatar src="img/logo.png" />}
                    style={{backgroundColor: '#de0000', color: '#ffffff', position: 'fixed', top: 0}}
                    iconElementRight={
                        <IconButton onTouchTap={() => this.loadBooks()}>
                            <AvReplay />
                        </IconButton>
                    }
                />
                <BookList
                    books={this.props.books}
                    onSelect={(index) => this.props.dispatchSelectBook(index)}
                    onRefresh={() => this.loadBooks()}
                />
                <BookCard
                    book={this.props.book}
                    editing={this.props.edit_mode}
                    onDelete={() => this.deleteBook(this.props.book)}
                    onBook={() => this.bookBook(this.props.book)}
                    onReturn={() => this.returnBook(this.props.book)}
                    onSave={(data) => this.updateBook(this.props.book, data)}
                    onReset={() => this.resetBook(this.props.book)}
                    onClose={() => this.props.dispatchUnselectBook()}
                    onStartEditing={() => this.props.dispatchStartEditing(this.props.book)}
                    onStopEditing={() => this.props.dispatchStopEditing()}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books,
    book: (state.selected_book === null)? null : state.books[state.selected_book],
    edit_mode: state.edit_mode
});

const mapDispatchToProps = {
    dispatchSelectBook: actions.selectBook,
    dispatchUnselectBook: actions.unselectBook,
    dispatchLoadBooks: actions.loadBooks,
    dispatchDeleteBook: actions.deleteBook,
    dispatchBookBook: actions.bookBook,
    dispatchReturnBook: actions.returnBook,
    dispatchSaveBook: actions.saveBook,
    dispatchStartEditing: actions.startEditing,
    dispatchStopEditing: actions.stopEditing
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
