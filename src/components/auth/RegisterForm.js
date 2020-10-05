/* eslint no-useless-escape: 0 */

//import emailPattern from 'types/emailPattern'
import { emailPattern } from 'types'

import React from 'react'
import { useForm } from 'react-hook-form'

import  { isValidImage, isValidUrl, sameAs } from 'helpers/validators'

const RegisterForm = () => {
    
    const { register, handleSubmit, errors, getValues } = useForm()
    

    const getFormData = data => {
        console.log(data)
    }

    //The name attribute on your input. When you specify name on your input you'll get a value in handleSubmit
    // on an object under that name.

    // For all the data in the form we are using react-hook-form

    return (
        <form onSubmit={ handleSubmit(getFormData) }>
            <div className="field">
                <div className="control">
                <input ref={ register({required: true, pattern: emailPattern}) }
                    name="email"
                    className="input is-large"
                    type="email"
                    placeholder="Your Email"
                    autoComplete="email" />
                { errors.email &&
                    <div className="form-error">
                        { errors.email.type === 'required' && <span className="help is-danger">Email is required</span>}
                        { errors.email.type === 'pattern' && <span className="help is-danger">Email address is not valid</span> }
                    </div>
                }
                </div>
            </div>
            <div className="field">
                <div className="control">
                <input ref={ register({required: true, minLength: 10}) }
                    name="fullName"
                    className="input is-large"
                    type="text"
                    placeholder="Full Name"/>
                { errors.fullName &&
                    <div className="form-error">
                        { errors.fullName.type === 'required' && <span className="help is-danger">Name is required</span> }
                        { errors.fullName.type === 'minLength' && <span className="help is-danger">Name needs to be of at least 10 characters</span> }
                    </div>
                }
                </div>
            </div>
            <div className="field">
                <div className="control">
                <input ref={ register({required: true, validate: {isValidImage, isValidUrl}})} 
                    name="avatar"
                    className="input is-large"
                    type="text"
                    placeholder="Avatar"/>
                { errors.avatar &&
                    <div className="form-error">
                        { errors.avatar.type === 'required' && <span className="help is-danger">Avatar is required</span>}
                        { errors.avatar.type === 'isValidImage' && <span className="help is-danger">Avatar path is not valid</span> }
                        { errors.avatar.type === 'isValidUrl' && <span className="help is-danger">Avatar URL is not valid</span> }
                    </div>
                }
                </div>
            </div>
            <div className="field">
                <div className="control">
                <input ref={register({required: true, minLength: 6})}
                    name="password"
                    className="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autoComplete="current-password" />
                { errors.password &&
                    <div className="form-error">
                        { errors.password.type === 'required' && <span className="help is-danger">Password is required</span> }
                        { errors.password.type === 'minLength' && <span className="help is-danger">Password needs to be at least 6 characters</span> }
                    </div>
                }
                </div>
            </div>
            <div className="field">
                <div className="control">
                <input ref={ register({required: true, minLength: 6, validate: {sameAs : sameAs(getValues, 'password')}}) }
                    name="passwordConfirmation"
                    className="input is-large"
                    type="password"
                    placeholder="Repeat Password"
                    autoComplete="current-password" />
                { errors.passwordConfirmation &&    
                    <div className="form-error">
                        { errors.passwordConfirmation.type === 'required' && <span className="help is-danger">Password Confirmation is required</span> }
                        { errors.passwordConfirmation.type === 'minLength' && <span className="help is-danger">Password needs to be at least 6 characters long</span> }
                        { errors.passwordConfirmation.type === 'sameAs' && <span className="help is-danger">Password is different from password confirmation</span> }
                    </div>
                }
                </div>
            </div>
            <button
                type="submit"
                className="button is-block is-info is-large is-fullwidth">Register</button>
            </form>
    )
}

export default RegisterForm