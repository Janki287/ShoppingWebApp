import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth,SignInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (event) => {
        const { value,name } = event.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email,password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);

            this.setState({
                email: '',
                password: ''
            });

        }catch(error){
            console.log('error sign in user',error.message);
        }
    }

    render(){
        return(
            <div className='sign-in'>
                <h1 className='title'>
                    I already have an account
                </h1>
                <span>
                    Sign in with your Email and Password
                </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        label='email' 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        required />
                    <FormInput 
                        handleChange={this.handleChange}
                        label='password' 
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        required/>
                    <div className='buttons'>
                        <CustomButton type='submit'> 
                            Sign In
                        </CustomButton>
                        <CustomButton 
                            onClick={SignInWithGoogle}
                            type='button'
                            isGoogleSignIn> 
                                Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
//event.preventDefault() it will prevent the by default submit action of form
//because we have our own method for submitting the form 

//we are passing name,type,value,required as a otherInputProps in <FormInput /> Component

//we are passing Sign In text as a {children} props
//and type=submit as a otherButtonProps in <CustomButton /> component