import React, { useState } from "react";
import './User.css'
import API from '../../utils/API'
import { useHistory } from 'react-router-dom'

import { Paper, TextField, Button } from '@material-ui/core'

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

const UserPage = () => {
	let history = useHistory()
    let [view, setView] = useState('login')
	let { value: name , bind: bindName , reset: resetName } = useInput('')
	let { value: password , bind: bindPassword , reset: resetPassword } = useInput('')
	let { value: password1 , bind: bindPassword1 , reset: resetPassword1 } = useInput('')
	let { value: password2 , bind: bindPassword2 , reset: resetPassword2 } = useInput('')

	let handleFormChange = (value) => {
		//resetName()
		resetPassword()
		resetPassword1()
		resetPassword2()
		setView(value)
	}

	let handleLogin = (e) => {
		e.preventDefault()
		
		if (name && password) {
			API.logIn({name, password})
				.then(res => {
					// window.sessionStorage.setItem('token', token)
					let token = res.data.token
					window.localStorage.setItem('token', token)
					//window.localStorage.setItem('storeName', name)	
					history.push('/')
				})
				.catch(err => console.log(err.response))
				// error.data.errors array when input is invalid (can move to client)
				// error.data.message when password wrong 400 or store 404
		}

	}

	let handleRegister = (e) => {
		e.preventDefault()
		
	}
	
    // return (
	// <>
	// 	<div className="login-page">
	// 		<div className="form" id='form'>
    //         { view === 'register' ? 
	// 			<form className="register-form" onSubmit={handleRegister}>
	// 				<input type="text" placeholder="Store name" {...bindName}/>
	// 				<input type="password" placeholder="Password" {...bindPassword1}/>
	// 				<input type="password" placeholder="Confirm password" {...bindPassword2}/>
	// 				<button type='submit'>register</button>
	// 				<p className="message" onClick={() => console.log(name)}>
	// 					Already registered? <p onClick={() => handleFormChange('login')}>Sign In</p>
	// 				</p>
	// 			</form> 
    //         : 
	// 			<form className="login-form" onSubmit={handleLogin}>
	// 				<input type="text" placeholder="Store name" {...bindName}/>
	// 				<input type="password" placeholder="Password" {...bindPassword}/>
	// 				<button>login</button>
	// 				<p className="message">
	// 					Not registered? <p onClick={() => handleFormChange('register')}>Create an account</p>
	// 				</p>
	// 			</form> 
    //         }
	// 		</div>
	// 	</div>
	// </>
	// )
	
	let errors = {
		login_name: '',
		login_password: ''
	}

	return (
		<>
			<Paper elevation={23} square={false} style={{
  width: '360px',
  margin: '5% auto'
}}>
				<form className='form' noValidate autoComplete='off'>
					<form className='login-form'>
						<TextField className='form-input' id='store-name' variant='outlined' label='Enter store name' helperText={errors.login_name} {...bindName}/>
						<TextField className='form-input' id='store-password' variant='outlined' type='password' label='Enter password' helperText={errors.login_password} {...bindPassword}/>
						<Button variant='outlined' onClick={handleLogin}>Log In</Button>
						<p className='message'>
							Not registerd? <p onClick={''}>Create an account</p>
						</p>
					</form>
				</form>
			</Paper>
		</>
	)
};

export default UserPage;
