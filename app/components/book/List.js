import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';
import Paper from 'material-ui/Paper';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: '30px 10px'
    },
    gridList: {
        width: '100%',
        overflowY: 'auto'
    },
    refreshButton: {
        marginRight: 20,
        position: "fixed",
        bottom: "20px",
        left: "20px"
    },
    paper: {
        height: "100%",
        width: "100%",
        margin: 0,
        textAlign: 'center',
        display: 'inline-block'
    }
};

const BookList = ({books, onSelect, onRefresh}) => (
    <GridList cellHeight={350} cols={3} padding={20} style={styles.gridList}>
        { books.map((book, index) => (
            <Paper key={book.id} style={styles.paper} zDepth={2}>
                <GridTile
                    title={book.title}
                    subtitle={book.author}
                    actionIcon={
                        <IconButton>{
                        book.available?
                            <ActionCheckCircle color="#339933" /> :
                            <NavigationCancel color="#993333" />
                        }</IconButton>
                    }
                    titleBackground="rgba(0, 0, 0, 0.75)"
                    onTouchTap={() => onSelect(index)}
                >
                    <img src={book.cover.large} />
                </GridTile>
            </Paper>
        ))}
    </GridList>
);

export default BookList;
