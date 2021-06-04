import React, {useContext} from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notification = () => {

    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {
                call.isReceivingCall && !callAccepted && (
                    <div styles={{display:'flex', justifyContent: 'space-around'}}>
                        <h5>{ call.name ? call.name : "UnKnow"} is calling: </h5>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={answerCall}
                            fullWidth
                        >
                            Answer
                        </Button>
                    </div>
                )
            }
        </>
    )
}

export default Notification;
