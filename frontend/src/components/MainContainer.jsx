import React from 'react';
import { Grid } from '@material-ui/core';
import { VideoCard, OptionsCard, Notification } from '.';
const MainContainer = () => {
    return (
        <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item md={8} sm={12}>
                <VideoCard />
            </Grid>
            
            <Grid item md={8} sm={12}>
                <OptionsCard>
                    <Notification />
                </OptionsCard>
            </Grid>
        </Grid>
    )
}

export default MainContainer;
