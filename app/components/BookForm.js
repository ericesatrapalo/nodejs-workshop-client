import React from 'react';

import TextField from 'material-ui/TextField';

class BookForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bookData: props.bookData,
            initialData: (JSON.parse(JSON.stringify(props.bookData))),
            editMode: false
        };
    }

    reset() {
        this.setState({
            bookData: this.state.initialData
        });
    }

    getData() {
        return this.state.bookData;
    }

    handleChange(event, fieldName) {
        if (this.props.editMode) {
            let newBookData = this.state.bookData;
            newBookData[fieldName] = event.target.value;
            this.setState({ bookData: newBookData });
        }
    }

    render() {
        return (
            <div>
                <TextField
                    floatingLabelText="Name"
                    value={this.state.bookData.name}
                    fullWidth={true}
                    onChange={(event) => this.handleChange(event, 'name')}
                />
                <br />
                <TextField
                    floatingLabelText="Author"
                    value={this.state.bookData.author}
                    fullWidth={true}
                    onChange={(event) => this.handleChange(event, 'author')}
                />
                <br />
                <TextField
                    floatingLabelText="Pages"
                    value={this.state.bookData.pages}
                    fullWidth={true}
                    onChange={(event) => this.handleChange(event, 'pages')}
                />
                <br />
                <TextField
                    floatingLabelText="Publisher"
                    value={this.state.bookData.publisher}
                    fullWidth={true}
                    onChange={(event) => this.handleChange(event, 'publisher')}
                />
            </div>
        );
    }
}

export default BookForm;
