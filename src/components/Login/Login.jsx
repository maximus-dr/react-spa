import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    component={Input} 
                    name={'login'} 
                    placeholder={'Login'}
                    validate={[required]} 
                />
            </div>
            <div>
                <Field 
                    component={Input} 
                    type={'password'} 
                    name={'password'} 
                    placeholder={'Password'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'} />
                    Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div> 
};

export default Login;