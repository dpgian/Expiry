import React, { useState } from "react";
import './User.css'
import API from '../../utils/API'

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
				// save token
				.then(res => {
					// window.sessionStorage.setItem('token', token)
					let token = res.data.token
					window.localStorage.setItem('token', token)
				})
				//window.localStorage.setItem('token', token)
				//getItem('token')
				//removeItem('token')
				.catch(err => console.log(err.response))
				// error.data.errors array when input is invalid (can move to client)
				// error.data.message when password wrong 400 or store 404
		}
		// name : password
	}

	let handleRegister = (e) => {
		e.preventDefault()
	
	
	}
	
    return (
	<>
		<div className="login-page">
			<div className="form" id='form'>
            { view === 'register' ? 
				<form className="register-form" onSubmit={handleRegister}>
					<input type="text" placeholder="Store name" {...bindName}/>
					<input type="password" placeholder="Password" {...bindPassword1}/>
					<input type="password" placeholder="Confirm password" {...bindPassword2}/>
					<button type='submit'>register</button>
					<p className="message" onClick={() => console.log(name)}>
						Already registered? <p onClick={() => handleFormChange('login')}>Sign In</p>
					</p>
				</form> 
            : 
				<form className="login-form" onSubmit={handleLogin}>
					<input type="text" placeholder="Store name" {...bindName}/>
					<input type="password" placeholder="Password" {...bindPassword}/>
					<button>login</button>
					<p className="message">
						Not registered? <p onClick={() => handleFormChange('register')}>Create an account</p>
					</p>
				</form> 
            }
			</div>
		</div>
	</>
    )
};

export default UserPage;
