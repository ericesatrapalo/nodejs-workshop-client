import React from 'react';
import axios from 'axios';

import {List} from 'material-ui/List';

import BookListElement from '../components/BookListElement';
import BookCard from '../components/BookCard';

const API_URL = 'http://localhost:3000/api/0.1/';

class BookList extends React.Component {

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
        let bookData = this.getCurrentlySelectedBook();

        alert(`${bookData.name} booked! (to be implemented)`);
        // TODO Implement booking
    }

    handleRemoveSelectedBook() {
        let bookData = this.getCurrentlySelectedBook();

        if (confirm(`Do you REALLY want to remove ${bookData.name}?`)) {
            alert(`${bookData.name} removed! (to be implemented)`);
            // TODO Implement book removal
        }
    }

    handleUpdateSelectedBook(bookData) {
        console.log(bookData);
        this.handleSelectBook(undefined);
    }

    loadDataFromAPI() {
        let requestUrl = API_URL + 'book';

        axios.get(requestUrl)
            .then(response => {
                this.setState({ books: response.data });
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
        let book = JSON.parse(JSON.stringify(this.getCurrentlySelectedBook()));

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

export default BookList;