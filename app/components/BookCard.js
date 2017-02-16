import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';

import BookForm from '../components/BookForm';

class BookCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        };
    }

    setEditMode(editMode) {
        if (this.props.canEdit) {
            this.setState({editMode: editMode});
        }
    }

    resetData() {
        this.refs.form.reset();
        this.setEditMode(false);
    }

    updateData() {
        this.props.onUpdate(this.refs.form.getData());
    }

    render() {
        let bookData = this.props.bookData;
        let editMode = this.state.editMode;

        return (
            <Card>
                <CardHeader
                    title={bookData.name}
                    subtitle={bookData.author}
                    avatar={<Avatar icon={<CommunicationImportContacts />} />}
                />
                <CardText>
                    <BookForm
                        ref="form"
                        editMode={editMode}
                        bookData={bookData}
                    />
                </CardText>
                <CardActions>
                    <RaisedButton label="Book" onMouseDown={() => this.props.onBooking()} />
                    {
                        editMode?
                            <RaisedButton label="Save" onMouseDown={() => this.updateData()} />
                        :
                            <RaisedButton label="Edit" onMouseDown={() => this.setEditMode(true)} disabled={!this.props.canEdit} />
                    }
                    {
                        editMode &&
                            <RaisedButton label="Reset" onMouseDown={() => this.resetData()} />
                    }
                    <RaisedButton label="Delete" onMouseDown={() => this.props.onDelete()} />
                    <RaisedButton label="Cancel" onMouseDown={() => this.props.onCancel()} />
                </CardActions>
            </Card>
        );
    }
}

export default BookCard;
