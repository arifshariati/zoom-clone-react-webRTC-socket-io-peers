import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import GitHubIcon from '@material-ui/icons/GitHub';

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
    githubButton: {
        marginLeft:'1rem'
    }
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

            <Typography variant="h6" style={{color:"white", textDecoration:"none"}} >
                @arifshariati
            </Typography>

            <Link 
                href="https://github.com/arifshariati/zoom-clone-react-webRTC-socket-io-peers" 
                className={classes.githubButton}
                target="_blank"
            >
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        startIcon={<GitHubIcon fontSize="small" />}
                        className={classes.button}
                    >
                        View Source Code
                    </Button>
            </Link>

            </Toolbar>
        </AppBar>
    )
}

export default TopBar;
