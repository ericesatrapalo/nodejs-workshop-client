import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';

import BookForm from './Form';


const BookCard = (props) => {

    const open = (props.book !== null);

    let actions = [
        <FlatButton label="Delete" onTouchTap={() => props.onDelete()} />,
        <FlatButton label="Close" onTouchTap={() => props.onClose()} />
    ];

    if (props.editing) {
        actions = [
            <FlatButton label="Save" onTouchTap={() => props.onSave(props.book)} />,
            <FlatButton label="Reset" onTouchTap={() => props.onStartEditing()} />,
            <FlatButton label="Cancel" onTouchTap={() => props.onStopEditing()} />,
            ...actions
        ];
    } else {
        actions = [
            <FlatButton label="Edit" onTouchTap={() => props.onStartEditing()} />,
            ...actions
        ];
    }

    if (open && props.book.available) {
        actions = [
            <FlatButton label="Book" onTouchTap={() => props.onBook()} />,
            ...actions
        ];
    } else {
        actions = [
            <FlatButton label="Return" onTouchTap={() => props.onReturn()} />,
            ...actions
        ];
    }

    return (
        <Dialog
            modal={false}
            open={open}
            onRequestClose={() => prop.onClose()}
            actions={actions}
        >
            { open &&
                <Card>
                    <CardHeader
                        title={props.book.title}
                        subtitle={props.book.author}
                        avatar={<Avatar src={props.book.cover.small} />}
                    />
                    <CardText>
                        <BookForm disabled={!props.editing} data={props.book} />
                    </CardText>
                </Card>
            }
        </Dialog>
    );
};

export default BookCard;
