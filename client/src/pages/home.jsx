import React, { useState, useEffect } from 'react';
import Container from '../components/Container/Container.jsx'
import Jumbotron from '../components/Jumbotron/Jumbotron.jsx'

import RegisterForm from '../components/RegisterForm/Register.jsx';
import Login from '../components/LoginForm/LoginDialog.jsx';
import API from '../utils/API';
import '../index.css';
import './pageStyle/login.css'
import history from '../history/history.jsx';

const Home = () => {
    
    const [loginForm, setLoginForm] = useState({})
    const [registerForm, setRegisterForm] = useState({})
    const [openDialog, setOpenDialog] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const handleLoginOpen = () => {
        setOpenLogin(true);
    };

    const handleLoginClose = () => {
        setOpenLogin(false);
    };
    const handleRegisterOpen = () => {
        setOpenDialog(true);
    };

    const handleRegisterClose = () => {
        setOpenDialog(false);
    };

    function handleInputChange(event) {
        const { name, value } = event.target
        setLoginForm({ ...loginForm, [name]: value })
    }

    function handleRegisterInputChange(event) {
        const { name, value } = event.target
        setRegisterForm({ ...registerForm, [name]: value })   
    }

    function handleRegisterSubmit(event) {
        console.log(registerForm);
        console.log('submitting register');
        event.preventDefault();
        if (registerForm.email && registerForm.password && registerForm.type) {
            console.log(registerForm)
            console.log('Register looks good so far')
            API.userRegister(registerForm)
                .then(resp => {
                    console.log(resp)
                    setOpenDialog(false)
                    setOpenLogin(false)
                    
                })
                .catch(err => console.log(err))
        } else {
            console.log('else');
        }
    }

    function handleLoginSubmit(event) {
        event.preventDefault();
        if (loginForm.email && loginForm.password) {
            console.log('contains email & password')
            API.userLogin({
                username: loginForm.email,
                password: loginForm.password,
            })
                .then(res => {
                    console.log(res.data)
                             
                    history.replace('/dashboardTeacher')

                })
                .catch(err => console.log(err))
        }
    }

    return (
            <Container fluid>
                <Jumbotron buttonClick={handleLoginOpen} />
                <Login 
                open={openLogin}
                close={handleLoginClose}
                radioValue={registerForm.type}
                handleInput={handleInputChange}
                submitLogin={handleLoginSubmit}
                openRegister={handleRegisterOpen}
                />
                <RegisterForm
                open={openDialog}
                close={handleRegisterClose}
                radioValue={registerForm.type}
                handleInput={handleRegisterInputChange}
                submitRegister={handleRegisterSubmit} />
            </Container>
    )
}

export default Home;