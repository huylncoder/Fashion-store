import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from 'react-toastify';
import './LoginWebPage.css';
import { handleLoginService, checkPhonenumberEmail, createNewUser } from '../../services/userService';


const LoginWebPage = () => {
    const [inputValues, setInputValues] = useState({
        email: '', password: 'passwordsecrect', lastName: '', phonenumber: '', isOpen: false, dataUser: {}
    });
    let history = useHistory();

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    let handleLogin = async () => {
        const element = document.querySelector('form');
        element.addEventListener('submit', event => {
            event.preventDefault();
        });

        let res = await handleLoginService({
            email: inputValues.email,
            password: inputValues.password
        });

        if (res && res.errCode === 0) {
            localStorage.setItem("userData", JSON.stringify(res.user));
            localStorage.setItem("token", JSON.stringify(res.accessToken));
            if (res.user.roleId === "R1" || res.user.roleId === "R4") {
                window.location.href = "/admin";
            } else {
                window.location.href = "/";
            }
        } else {
            toast.error(res.errMessage);
        }
    };

    let handleSaveUser = async () => {
        const element = document.querySelector('form');
        element.addEventListener('submit', event => {
            event.preventDefault();
        });

        let res = await checkPhonenumberEmail({
            phonenumber: inputValues.phonenumber,
            email: inputValues.email
        });

        if (res.isCheck === true) {
            toast.error(res.errMessage);
        } else {
            let createUser = async () => {
                let res = await createNewUser({
                    email: inputValues.email,
                    lastName: inputValues.lastName,
                    phonenumber: inputValues.phonenumber,
                    password: inputValues.password,
                    roleId: 'R2',
                });
                if (res && res.errCode === 0) {
                    toast.success("Tạo tài khoản thành công");
                    handleLogin(inputValues.email, inputValues.password);
                } else {
                    toast.error(res.errMessage);
                }
            };
            createUser();
        }
    };

    return (
        <>
            {inputValues.isOpen === false &&
                <div className="box-login">
                    <div className="login-container">
                        <section id="formHolder">
                            <div className="row">
                                {/* Brand Box */}
                                <div className="col-sm-6 brand">
                                    <a href="#" className="logo">MR <span>.</span></a>
                                    <div className="heading">
                                        <h2>DOMINGO</h2>
                                        <p>Sự lựa chọn của bạn</p>
                                    </div>
                                </div>
                                {/* Form Box */}
                                <div className="col-sm-6 form">
                                    {/* Login Form */}
                                    <div className="login form-peice ">
                                        <form className="login-form" >
                                            <div className="form-group">
                                                <label htmlFor="loginemail">Địa chỉ email</label>
                                                <input name="email" onChange={(event) => handleOnChange(event)} type="email" id="loginemail" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="loginPassword">Mật khẩu</label>
                                                <input name="password" onChange={(event) => handleOnChange(event)} type="password" id="loginPassword" required />
                                            </div>
                                            <div className="CTA">
                                                <input onClick={() => handleLogin()} type="submit" value="Đăng nhập" />
                                                <a style={{ cursor: 'pointer', }} className="switch">Tài khoản mới</a>
                                            </div>
                                        </form>
                                    </div>
                                    {/* Signup Form */}
                                    <div className="signup form-peice switched">
                                        <form className="signup-form" >
                                            <div className="form-group">
                                                <label htmlFor="name">Họ và tên</label>
                                                <input type="text" name="lastName" onChange={(event) => handleOnChange(event)} id="name" className="name" />
                                                <span className="error" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Địa chỉ email</label>
                                                <input type="email" name="email" onChange={(event) => handleOnChange(event)} id="email" className="email" />
                                                <span className="error" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Số điện thoại</label>
                                                <input type="text" name="phonenumber" onChange={(event) => handleOnChange(event)} id="phone" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Mật khẩu</label>
                                                <input type="password" name="password" onChange={(event) => handleOnChange(event)} id="password" className="pass" />
                                                <span className="error" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="passwordCon">Xác nhận mật khẩu</label>
                                                <input type="password" name="passwordCon" id="passwordCon" className="passConfirm" />
                                                <span className="error" />
                                            </div>
                                            <div className="CTA">
                                                <input onClick={() => handleSaveUser()} type="submit" value="Đăng ký" id="submit" />
                                                <a style={{ cursor: 'pointer' }} className="switch">Tôi có tài khoản</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </>
    );
};
export default LoginWebPage;
