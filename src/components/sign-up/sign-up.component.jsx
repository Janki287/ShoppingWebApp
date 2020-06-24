import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth,createUserProfileDocument } from '../../firebase/firebase.utils.js';

class SignUp  extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName,email,password,confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert('Password Don\'t Match');
            return;
        }

        try{
            const { userAuth } = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(userAuth,{ displayName }); //{ displayName } same as (displayName: displayName)
            //using createUserWithEmailAndPassword method we have to pass the displayName as additional data
            //only google authentication method have inbuilt displayName

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }); //this will clear all fields of the form after user hit the submit button

        }catch(error){
            console.log('error creating new user with email and password',error.message);
        }
    }

    handleChange = (event) => {
        const { name,value } = event.target;

        this.setState({
            [name]: value
        });
    }

    render(){
        const { displayName,email,password,confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h1 className='title'>
                    I do not have an account
                </h1>
                <span>
                    Sign Up with your email and password
                </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        value={displayName}
                        name='displayName'
                        label='Display Name'
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        type='email'
                        label='Email'
                        value={email}
                        name='email'
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        type='password'
                        label='Password'
                        value={password}
                        name='password'
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        name='confirmPassword'
                        handleChange={this.handleChange}
                        required />
                    <CustomButton type='submit'>
                        SIGN UP
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;