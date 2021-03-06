import React, { useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Grid, Button, ButtonGroup, Paper, Typography } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import stock from './List/fullList'

const useStyles = makeStyles(theme => ({
    info_paper: {
        width: '80%',
        margin: '5% auto',
        padding: '3%',
        [theme.breakpoints.up('md')]: {
            margin: '3% auto'
        }
    },
    button_group: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
    }
}
}))

const Dotting = () => {
    const classes = useStyles()

    let handleColor = (day) => {
        let color = day === 'Mon' ? 'blue' :
                day === 'Tue' ? 'rgb(255,215,0)' :
                day === 'Wed' ? 'red' :
                day === 'Thu' ? 'brown' :
                day === 'Fri' ? 'green' :
                day === 'Sat' ? 'orange' :
                'black'

        return color
    }

    let handleDot = (value, days) => {
        let dotDate = moment().add(value, days)
    
        setDot(moment(dotDate).format('ddd: D-M'))
  
        let day = moment(dotDate).format('ddd')

        setDotColor(handleColor(day))
    }

    let [dotColor, setDotColor] = useState('transparent')
    let [dot, setDot] = useState('')
    let [selectedItem, setSelectedItem] = useState('')

    let table = [
        {name: '1 Day', value: moment().add(1, 'd').format('ddd: D-M'), color: handleColor(moment().add(1, 'd').format('ddd'))},
        {name: '3 Days', value: moment().add(3, 'd').format('ddd: D-M'), color: handleColor(moment().add(3, 'd').format('ddd'))},
        {name: '4 Days', value: moment().add(4, 'd').format('ddd: D-M'), color: handleColor(moment().add(4, 'd').format('ddd'))},
        {name: '5 Days', value: moment().add(5, 'd').format('ddd: D-M'), color: handleColor(moment().add(5, 'd').format('ddd'))},
        {name: '1 Month', value: moment().add(1, 'M').format('ddd: D-M'), color: handleColor(moment().add(1, 'M').format('ddd'))},
        {name: '3 Months', value: moment().add(3, 'M').format('ddd: D-M'), color: handleColor(moment().add(3, 'M').format('ddd'))},
    ]

    return (
        <>
            <Paper elevation={23} square={false} className={classes.info_paper}>
                <Typography variant='h4' align='center' style={{letterSpacing: '.5rem'}}>DAYDOT</Typography>
                <Typography variant='body2' align='center' style={{margin: '3% auto'}}>Click on the daydot you need or check the full table below. <br />You can also look up and item for an automated daydot.</Typography>
                
                    <ButtonGroup style={{margin: '3%'}} className={classes.button_group} variant='text'>
                        <Button onClick={() => handleDot(1, 'd')}>1 Day</Button>
                        <Button onClick={() => handleDot(3, 'd')}>3 Days</Button>
                        <Button onClick={() => handleDot(4, 'd')}>4 Days</Button>
                        <Button onClick={() => handleDot(5, 'd')}>5 Days</Button>
                        <Button onClick={() => handleDot(1, 'M')}>1 Month</Button>
                        <Button onClick={() => handleDot(3, 'M')}>3 Months</Button>
                    </ButtonGroup>
                
                <Paper elevation={10} align='center' style={{backgroundColor: dotColor}}>
                    <Typography style={{color: 'white'}}>
                        {dot}
                    </Typography>
                </Paper>
            </Paper >

            <Paper elevation={23} square={false} className={classes.info_paper}>
                
                <Autocomplete
                    id='items-listing'
                    options={stock}
                    clearOnEscape
                    groupBy={option => option.category}
                    getOptionLabel={option => option.name ? option.name : option}
                    value={selectedItem}
                    onChange={(e ,newValue) => setSelectedItem(newValue)}
                    renderInput={params => <TextField {...params} label='Search an item' variant='outlined' />}
                />
                
                { selectedItem ?
                    <Paper align='center' style={{margin: '1% auto'}} >
                            <p style={{color: 'white', margin: '0', backgroundColor: handleColor(moment().add(selectedItem.expvalue, selectedItem.expsign).format('ddd'))}}> {selectedItem.name} </p> 
                            <p style={{margin: '0'}}> {moment().add(selectedItem.expvalue, selectedItem.expsign).format('ddd: D-M')} </p>
                            <p style={{margin: '0', backgroundColor: '#f5f5f5'}}> {`Shelf life : ${selectedItem.expvalue} ${selectedItem.expsign}`} </p>
                    </Paper>
                :
                <></>
                }

            </Paper>

            <Paper elevation={23} square={false} className={classes.info_paper}>

                <Grid container spacing={3} style={{textAlign: 'center'}}>
                   
                    {
                        table.map(x => 
                        <Grid item xs={12} sm={2} key={x.name}>
                            <Paper>
                                <p style={{color: 'white', margin: '0', backgroundColor: x.color}}> {x.name} </p> 
                                <p> {x.value} </p>
                            </Paper>
                        </Grid>
                        )
                    }

                </Grid>

            </Paper>
        </>
    )
}

export default Dotting