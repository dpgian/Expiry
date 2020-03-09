import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    about_page: {
        width: '80%',
        margin: '5% auto',
        padding: '3%'
    }
})


const About = () => {
    
    const classes = useStyles()

    return (
        <>
            <Paper elevation={23} square={false} className={classes.about_page}>
                <Typography variant='h4' align='center' style={{letterSpacing: '.5rem'}}>EXPY</Typography>
                <Typography variant='subtitle1' align='center' style={{margin: '3% auto'}}>
                    Expy is a products expiration date tracker.
                </Typography>
                    <br/>
                <Typography variant='body2' align='center'>
                    Sync between multiple devices
                    <br />
                    Just Register and account and you are ready to go!
                    <br /> 
                    ( More features coming with future updates )
                </Typography>    
            </Paper>
        </>
    )
}

export default About