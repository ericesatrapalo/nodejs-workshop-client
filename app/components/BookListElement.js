import React from 'react';

import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import NotificationDoNotDisturb from 'material-ui/svg-icons/notification/do-not-disturb';

const BookListElement = (props) => {
    let bookData = props.bookData;

    return (
        <ListItem
            leftAvatar={<Avatar icon={<CommunicationImportContacts />} />}
            rightIcon={bookData.available? <NavigationCheck color="#339933" /> : <NotificationDoNotDisturb color="#993333" />}
            primaryText={bookData.name}
            secondaryText={bookData.author}
            onTouchTap={() => props.onSelect()}
        />
    );
};

export default BookListElement;
