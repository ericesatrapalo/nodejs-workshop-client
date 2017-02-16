import React from 'react';

import {ListItem} from 'material-ui/List';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import Avatar from 'material-ui/Avatar';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';

const BookListElement = (props) => {
    let bookData = props.bookData;

    return (
        <ListItem
            leftAvatar={<Avatar icon={<CommunicationImportContacts />} />}
            rightIcon={<NavigationCheck color="#339933" />}
            primaryText={bookData.name}
            secondaryText={bookData.author}
            onTouchTap={() => props.onSelect()}
        />
    );
};

export default BookListElement;
