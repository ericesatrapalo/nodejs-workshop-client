import React from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';

import * as actions from '../../actions';

const fields = ['Id', 'Title', 'Author', 'Pages', 'Publisher', 'ISBN'];

class BookForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.data.id,
            title: props.data.title,
            author: props.data.author,
            pages: props.data.pages,
            publisher: props.data.publisher,
            isbn: props.data.isbn
        };
    }

    updateField(field, value) {
        this.setState({ [field]: value });
    }

    getFields() {
        return fields.map(fieldName => {
            let key = fieldName.toLowerCase();

            return (
                <TextField
                    key={key}
                    floatingLabelText={fieldName}
                    value={this.state[key]}
                    fullWidth={true}
                    disabled={this.props.disabled}
                    underlineShow={!this.props.disabled}
                    onChange={(event, value) => this.updateField(key, value)}
                />
            );
        });
    }

    render() {
        return (<form>{this.getFields()}</form>);
    }
}

export default BookForm;
