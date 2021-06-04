import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper} from '@material-ui/core';
import { Assignment, Phone, PhoneDisabled} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center'
    },
    gridContainer: {},
    container: {
        
    },
    magrin:{
        margin:'1rem'
    },
    padding: {
        padding: '1rem'
    },
    paper: {
        padding: '1rem',
        minHeight:'15rem',
        maxHeight:'15rem',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    button: {
        marginTop:'1rem'
    }
}));
const OptionsCard = ({ children }) => {
    const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext);
    const classes = useStyles();
    const [idToCall, setIdToCall] = useState('');
    return (
        <Container className={classes.container}>
            
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={4} justify="space-around">
                        <Grid item xl={4} lg={4} md={6} sm={6} xs={6}>
                        <Paper elevation={1} className={classes.paper}>
                            <Typography variant="h6" gutterBottom>Account Info</Typography>
                            <TextField 
                                label="name" 
                                variant="outlined" 
                                value={name} 
                                fullWidth
                                onChange={(e)=> setName(e.target.value)}
                            />
                            <CopyToClipboard text={me}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    fullWidth 
                                    startIcon={<Assignment fontSize="large" />}
                                    className={classes.button}
                                >
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                            </Paper>
                        </Grid>

                        <Grid item xl={4} lg={4} md={6} sm={6} xs={6}>
                        <Paper elevation={1} className={classes.paper}>
                            <Typography variant="h6" gutterBottom>Make a Call</Typography>
                            <Typography variant="body2" gutterBottom>
                                Click on "COPY YOUR ID" button and paste (CTL+V) bellow.
                            </Typography>
                            <TextField 
                                label="ID to Call" 
                                variant="outlined" 
                                value={idToCall} 
                                onChange={(e)=> setIdToCall(e.target.value)} 
                                fullWidth
                            />
                            {
                                callAccepted && !callEnded ? (
                                    <Button 
                                        variant="contained"  
                                        color="secondary" 
                                        startIcon={<PhoneDisabled fontSize="large" />}
                                        fullWidth
                                        onClick={leaveCall}
                                        className={classes.button}
                                        >
                                        Hang Up
                                    </Button>
                                ): (
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        startIcon={<Phone fontSize="large" />}
                                        fullWidth
                                        onClick={()=> callUser(idToCall)}
                                        className={classes.button}
                                    >
                                        Call
                                    </Button>
                                )
                            }

                                {children}
                            </Paper>
                        </Grid>
                    </Grid>
                </form>
                
            
            
        </Container>
    )
}

export default OptionsCard
