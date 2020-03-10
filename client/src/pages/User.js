import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import API from '../utils/API'
import { useHistory } from 'react-router-dom'

import { Paper, TextField, Button, Typography } from '@material-ui/core'

let useInput = initivalValue => {
	const [value, setValue] = useState(initivalValue)
	
	return {
		value,
		setValue,
		reset: () => setValue(''),
		bind: {
			value,
			onChange: e => {
				setValue(e.target.value)
			}
		}
	}
}

const useStyles = makeStyles({
	login_page: {
		width: '360px',
  		margin: '5% auto'
	},
	form: {
		padding: '45px',
  		textAlign: 'center'
	},
	form_input: {
		margin: '0 0 15px',
		'& .MuiFormHelperText-root': {
			color: 'rgb(181, 17, 68)'
		}
	},
	form_button: {
		background: 'rgb(109, 31, 55)',
		width: '100%',
		padding: '15px',
		color: '#ffffff',
		'&:hover': {
			background: 'rgb(191, 3, 65)'
		}
	},
	message: {
		margin: '15px 0 0',
		color: '#b3b3b3',
		font: 'Medium'
	},
	message_link: {
		margin: '5px 0 0',
		color: 'rgb(109, 31 ,55)',
		textDecoration: 'underline',
		cursor: 'pointer'
	}
})

const UserPage = ({setStore, setStoreId}) => {
	let history = useHistory()
    let [view, setView] = useState('login')
	let { value: name , bind: bindName , reset: resetName } = useInput('')
	let { value: password , bind: bindPassword , reset: resetPassword } = useInput('')
	let { value: password1 , bind: bindPassword1 , reset: resetPassword1 } = useInput('')
	let { value: password2 , bind: bindPassword2 , reset: resetPassword2 } = useInput('')
	let [ eLn, seteLn ] = useState('')
	let [ eLp, seteLp ] = useState('')
	let [ eRn, seteRn ] = useState('')
	let [ eRp, seteRp ] = useState('')
	let [ eRp2, seteRp2 ] = useState('')


	// Resets the passwords value when switching form and sets value for view
	let handleFormChange = (value) => {
		//resetName()
		resetPassword()
		resetPassword1()
		resetPassword2()
		setView(value)
	}

	let handleLogin = (e) => {
		e.preventDefault()

		if (!name) {
			resetName()
			seteLn('Please enter your store name')
			setTimeout(() => seteLn(''), 2500)
			return
		}

		if (password.length < 6) {
			seteLp('Please enter a valid password')
			setTimeout(() => seteLp(''), 2500)
			return
		}

		API.logIn({name, password})
			.then(res => {
				// window.sessionStorage.setItem('token', token)
				let token = res.data.token
				window.localStorage.setItem('token', token)	
				setStore(name)
				setStoreId(res.data.storeId)
				history.push('/item')
			})
			.catch(err => {
				switch(err.response.status) {
					case 404: 
						seteLn(err.response.data.message)
						setTimeout(() => seteLn(''), 2500)
						break
					case 400:
						seteLp(err.response.data.message)
						setTimeout(() => seteLp(''), 2500)
						break
					default:
						seteLn('Server error. Please try again.')
						seteLp('Server error. Please try again.')
						setTimeout(() => seteLn(''), 2500)
						setTimeout(() => seteLp(''), 2500)
				}
			})
		
	}

	let handleRegister = (e) => {
		e.preventDefault()
		
		if (/\s/g.test(name) || !name) {
			resetName()
			seteRn('Enter a valid name (no white spaces)')
			setTimeout(() => seteRn(''), 2500)
			return
		}
	
		if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/g.test(password1)) {
			seteRp('Please enter a valid password (no spaces, min 6 digit)')
			setTimeout(() => seteRp(''), 2500)
			return
		}

		if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/g.test(password2)) {
			seteRp2('Please re-enter password (no spaces, min 6 digit)')
			setTimeout(() => seteRp2(''), 2500)
			return
		}

		if(password1 !== password2) {
			seteRp2('The two password must match')
			setTimeout(() => seteRp2(''), 2500)
			return
		}
		
		API.registerStore({name, password: password1})
			.then(res => {
				setView('login')
			})
			.catch(err => {
				switch(err.response.status) {
					case 400:
						seteRn(err.response.data.message)
						setTimeout(() => {seteRn('') 
						setView('login')}, 2500)	
						break
					default:
						seteRn('Server error. Please try again.')
						seteRp('Server error. Please try again.')
						seteRp2('Server error. Please try again.')
						setTimeout(() => seteRn(''), 2500)
						setTimeout(() => seteRp(''), 2500)
						setTimeout(() => seteRp2(''), 2500)
				}
			})
		
	}
	
	const classes = useStyles()

	return (
		<>
			<Paper elevation={23} square={false} className={classes.login_page}>
				<form className={classes.form} noValidate autoComplete='off'>
					{view === 'login' ?
					<div className='login_form'>
						<TextField error={eLn !== ''} className={classes.form_input} id='store-name' variant='outlined' label='Enter store name' helperText={eLn} {...bindName}/>
						<TextField error={eLp !== ''} className={classes.form_input} id='store-password' variant='outlined' type='password' label='Enter password' helperText={eLp} {...bindPassword}/>
						<Button className={classes.form_button} variant='outlined' onClick={handleLogin}>Log In</Button>
						<div className={classes.message}>
							Don't have an account? <Typography className={classes.message_link} onClick={() => handleFormChange('register')}>Create an account</Typography>
						</div>
					</div>
					:
					<div className='register_form'>
						<TextField error={eRn !== ''} className={classes.form_input} id='store-name' variant='outlined' label='Enter store name' helperText={eRn} {...bindName}/>
						<TextField error={eRp !== ''} className={classes.form_input} id='store-password1' variant='outlined' type='password' label='Enter password' helperText={eRp} {...bindPassword1}/>
						<TextField error={eRp2 !== ''} className={classes.form_input} id='store-password2' variant='outlined' type='password' label='Re-enter password' helperText={eRp2} {...bindPassword2}/>
						<Button className={classes.form_button} variant='outlined' onClick={handleRegister}>Register</Button>
						<div className={classes.message}>
							Already registered? <Typography className={classes.message_link} onClick={() => handleFormChange('login')}>Log In</Typography>
						</div>
					</div>
					}
				</form>
			</Paper>
		</>
	)
};

export default UserPage;
