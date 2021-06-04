import React, { useContext } from 'react';
import { Grid, Avatar, Card, CardHeader, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    root:{
        padding: '0.5rem',
    },
    videoCardContainer: {
        marginTop: '1rem'
    },
    video: {
        margin:'0rem',
        padding: "0rem",
        maxWidth:'550px',
        borderRadius:'0.3rem'
    },
    paper: {
        padding: '0.7rem',
    },
}));
const VideoCard = () => {
    const classes = useStyles();
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);
    return (
        <Grid container spacing={4} justify="center" className={classes.videoCardContainer}>
            {/* ouw own vide */}
            {
                stream && (
                    <Grid item>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={ <Avatar aria-label="recipe" /> }
                                title={name || "Your Name"}
                            />
                            <CardMedia className={classes.media}>
                                <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                            </CardMedia>
                            
                        </Card>
                    </Grid>
                    
                )
            }
            
            {/* users video */}
            {
                callAccepted && !callEnded &&(
                    <Grid item>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={ <Avatar aria-label="recipe" /> }
                                title={call.name || "User Name"}
                            />
                            <CardMedia className={classes.media}>
                                <video playsInline ref={userVideo} autoPlay className={classes.video} />
                            </CardMedia>
                            
                        </Card>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default VideoCard;
