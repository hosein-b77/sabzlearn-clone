import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer"
import Header from '../Components/Header'
import Input from "../Components/Input";
import Buttons from "../Components/Buttons";
import { useForm } from "../hooks/useForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../validators/rules";
import AuthContext from '../context/authContext'

export default function Register() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()
  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registerNewUser = (event) => {
    event.preventDefault();

    const body = {
      'username': formState.inputs.username.value,
      'email': formState.inputs.email.value,
      'phone': formState.inputs.phone.value,
      'password': formState.inputs.password.value,
      'confirmPassword': formState.inputs.password.value,
      'name': formState.inputs.name.value,
    };

    // Make the fetch request
    fetch('http://localhost:4000/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        authContext.login(data.user, data.accessToken)
        navigate('/')
      }
      )
      .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <Header />

      <section className="login-register">
        <div className="login register-form">
          <span className="login__title">ساخت حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">
              قبلا ثبت‌نام کرده‌اید؟{" "}
            </span>
            <Link className="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="login-form__username-input"
                element="input"
                id="name"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20)
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                type="text"
                placeholder="نام کاربری"
                className="login-form__username-input"
                element="input"
                id="username"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20)
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__username">
              <Input
                type="text"
                placeholder="شماره تماس"
                className="login-form__username-input"
                element="input"
                id="phone"
                onInputHandler={onInputHandler}
                validations={[
                  minValidator(10),
                  maxValidator(12)
                ]}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                type="text"
                placeholder="آدرس ایمیل"
                className="login-form__username-input"
                element="input"
                id="email"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  maxValidator(25),
                  emailValidator()
                ]}
              />
              <i className="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div className="login-form__password">
              <Input
                type="password"
                placeholder="رمز عبور"
                className="login-form__password-input"
                element="input"
                id="password"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18)
                ]}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <Buttons
              className={`login-form__btn ${formState.isFormValid
                ? 'bg-[#2bce56]' : '!bg-red-600'
                }`}
              type="submit"
              onClick={registerNewUser}
              disabled={!formState.isFormValid}
            >
              <i className="login-form__btn-icon fa fa-user-plus"></i>
              <span className="login-form__btn-text">عضویت</span>
            </Buttons>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
