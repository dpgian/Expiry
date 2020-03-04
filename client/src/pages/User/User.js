import React, { useState } from "react";
import './User.css'

const UserPage = () => {

    let [action, setAction] = useState('login')

    return (
	<>
		<div className="login-page">
			<div className="form" id='form'>
            { action === 'register' ? 
				<form className="register-form">
					<input type="text" placeholder="Store name" />
					<input type="password" placeholder="Password" />
					<input type="password" placeholder="Confirm password" />
					<button>create</button>
					<p className="message">
						Already registered? <p onClick={() => setAction('login')}>Sign In</p>
					</p>
				</form> 
            : 
				<form className="login-form">
					<input type="text" placeholder="Store name" />
					<input type="password" placeholder="Password" />
					<button>login</button>
					<p className="message">
						Not registered? <p onClick={() => setAction('register')}>Create an account</p>
					</p>
				</form> 
            }
			</div>
		</div>
	</>
    )
};

export default UserPage;
