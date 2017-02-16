import React from 'react';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

const TopBar = () => (
    <AppBar
        title="Tech library"
        iconElementLeft={<Avatar src="img/logo.png" />}
        style={{backgroundColor: '#de0000', color: '#ffffff'}}
    />
);

export default TopBar;