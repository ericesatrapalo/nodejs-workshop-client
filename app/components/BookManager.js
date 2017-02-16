import React from 'react';
import axios from 'axios';

import {List} from 'material-ui/List';

import BookListElement from '../components/BookListElement';
import BookCard from '../components/BookCard';

const API_URL = 'http://localhost:3000/api/0.1/';

class BookManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            selected_book: undefined
        };
    }

    componentDidMount() {
        this.loadDataFromAPI();
    }

    componentWillUnmount() {

    }

    getCurrentlySelectedBook() {
        if (typeof this.state.selected_book === 'undefined') {
            return undefined;
        }
        return this.state.books[this.state.selected_book];
    }

    handleSelectBook(index) {
        let selectedBook = undefined;

        if (this.state.selected_book !== index) {
            selectedBook = index;
        }
        this.setState(prevState => ({ selected_book: selectedBook }));
    }

    handleBookSelectedBook() {
        let selectedBook = this.getCurrentlySelectedBook();

        // TODO Implement booking
        selectedBook.available = false;
        this.handleSelectBook(undefined);
    }

    handleRemoveSelectedBook() {
        let selectedBook = this.getCurrentlySelectedBook();

        if (confirm(`Do you REALLY want to remove ${selectedBook.name}?`)) {
            // TODO Implement book removal

            this.setState({ books: this.state.books.filter((book) => (book.id !== selectedBook.id)) });
            this.handleSelectBook(undefined);
        }
    }

    handleUpdateSelectedBook(bookData) {
        // TODO Implement book update
    }

    loadDataFromAPI() {
        let requestUrl = API_URL + 'books';

        axios.get(requestUrl)
            .then(response => {
                this.setState({ books: response.data.map(book => {
                    book.available = true;
                    return book;
                }) });
            })
            .catch(error => {
                alert(`${error.message} on GET at ${requestUrl}`);
            });
    }

    render() {
        return (typeof this.state.selected_book === 'undefined') ?
            this.renderBookList() :
            this.renderSelectedBookCard();
    }

    renderBookList() {
        return (
            <List>
                { this.state.books.map((book, index) => (
                    <BookListElement
                        key={book.id}
                        bookData={book}
                        onSelect={() => this.handleSelectBook(index)}
                    />
                ))}
            </List>
        );
    }

    renderSelectedBookCard() {
        let book = this.getCurrentlySelectedBook();

        return (
            <BookCard
                bookData={book}
                canEdit={true}
                onCancel={() => this.handleSelectBook(undefined)}
                onBooking={() => this.handleBookSelectedBook()}
                onDelete={() => this.handleRemoveSelectedBook()}
                onUpdate={(bookData) => this.handleUpdateSelectedBook(bookData)}
            />
        );
    }
}

export default BookManager;