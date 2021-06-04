import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: theme.palette.primary.contrastText,
        marginLeft:'1rem'
    },
}));
const TopBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
            <VideocamIcon fontSize="large" />
            <Typography variant="h3" className={classes.title}>
                ZOOM Clone
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;
