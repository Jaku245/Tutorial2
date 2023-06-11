import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';

import '../App.css';

function Registration() {

    const navigate = useNavigate()
    const profile = JSON.parse(localStorage.getItem('profile'));

    const [firstName, setFirstName] = useState(profile ? profile.firstName : '');
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [lastName, setLastName] = useState(profile ? profile.lastName : '');
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [email, setEmail] = useState(profile ? profile.email : '');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [password, setPassword] = useState(profile ? profile.password : '');
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState(profile ? profile.password : '');
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

    const onlyLettersRe = /^[A-Za-z]+$/;
    const emailRe = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRe = /^(?=.*[a-zA-Z0-9])(?=.*[\W_])[a-zA-Z0-9\W_]{8,}$/;

    const handleFirstNameChange = (value) => {
        setFirstName(value)
        if (!onlyLettersRe.test(value)) {
            setIsFirstNameValid(false)
            return;
        }
        setIsFirstNameValid(true)
    }

    const handleLastNameChange = (value) => {
        setLastName(value)
        if (!onlyLettersRe.test(value)) {
            setIsLastNameValid(false)
            return;
        }
        setIsLastNameValid(true)
    }

    const handleEmailChange = (value) => {
        setEmail(value)
        if (!emailRe.test(value)) {
            setIsEmailValid(false)
            return;
        }
        setIsEmailValid(true)
    }

    const handlePasswordChange = (value) => {
        setPassword(value)
        if (!passwordRe.test(value)) {
            setIsPasswordValid(false)
            return;
        }
        setIsPasswordValid(true)
    }

    const onSubmit = () => {
        if (firstName === '') {
            setIsFirstNameValid(false)
            return;
        }
        if (lastName === '') {
            setIsLastNameValid(false)
            return;
        }
        if (email === '') {
            setIsEmailValid(false)
            return;
        }
        if (password === '') {
            setIsPasswordValid(false)
            return;
        }
        if (confirmPassword === '') {
            setIsConfirmPasswordValid(false)
            return;
        }
        if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            localStorage.setItem('profile', JSON.stringify({
                firstName,
                lastName,
                email
            }));
            navigate('/profile');
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', background: "#cccccc", height: '100vh' }}>
            <div className='page-card'>
                <p className="registration-header">Registration</p>
                <div className='registration-form-body'>
                    <Input status={isFirstNameValid ? 'success' : 'error'} value={firstName} onChange={(e) => handleFirstNameChange(e.target.value)} size='large' placeholder="First Name" className='mb-10' />
                    <p className='registration-error-message' style={{ display: isFirstNameValid ? 'none' : 'block' }}>First Name is not valid.</p>
                    <Input value={lastName} status={isLastNameValid ? 'success' : 'error'} onChange={(e) => handleLastNameChange(e.target.value)} size='large' placeholder="Last Name" className='mb-10' />
                    <p className='registration-error-message' style={{ display: isLastNameValid ? 'none' : 'block' }}>Last Name is not valid.</p>
                    <Input value={email} status={isEmailValid ? 'success' : 'error'} onChange={(e) => handleEmailChange(e.target.value)} size='large' type='email' placeholder="Email" className='mb-10' />
                    <p className='registration-error-message' style={{ display: isEmailValid ? 'none' : 'block' }}>Email is not valid.</p>
                    <Input.Password value={password} status={isPasswordValid ? 'success' : 'error'} onChange={(e) => handlePasswordChange(e.target.value)} size='large' placeholder="Password" className='mb-10' />
                    <p className='registration-error-message' style={{ display: isPasswordValid ? 'none' : 'block' }}>Password is not valid.</p>
                    <Input.Password value={confirmPassword} onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        if (e.target.value !== password) {
                            setIsConfirmPasswordValid(false)
                            return;
                        }
                        setIsConfirmPasswordValid(true)
                    }} size='large' placeholder="Confirm Password" className='mb-10' />
                    <p className='registration-error-message' style={{ display: isConfirmPasswordValid ? 'none' : 'block' }}>Password does not match.</p>
                    <Button className='registration-submit' size='large' onClick={() => onSubmit()} >Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default Registration;
