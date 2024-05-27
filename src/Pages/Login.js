import React, { useContext,useState } from "react";
import { Link } from 'react-router-dom'
import Footer from "../Components/Footer"
import Header from '../Components/Header'
import Input from "../Components/Input";
import Buttons from "../Components/Buttons";
import { requiredValidator, minValidator, maxValidator } from '../validators/rules'
import { useForm } from "../hooks/useForm";
import AuthContext from "../context/authContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
export default function Login() {
  const navigate = useNavigate
  const authContext = useContext(AuthContext);
  const [isGoogleRecaptchaVerify, setIsGoogleRecaptchaVerify] = useState(false)
  const [formState, onInputHandler] = useForm({
    username: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
  }, false)

  const userLogin = (event) => {
    event.preventDefault();

    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };

    fetch(`http://localhost:4000/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(res => {
        console.log(res);
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((result) => {
        swal({
          title: "با موفقیت لاگین شدید",
          icon: "success",
          buttons: 'ورود به پنل'
        }).then(value => navigate('/'))
        console.log(result);
        authContext.login({}, result.accessToken)
      })
      .catch((err) => {
        swal({
          title: "چنین کاربری وجود ندارد",
          icon: "error",
          buttons: 'تلاش دوباره'
        })
      });

    console.log(userData);
  };
  const onChangeHandler = () => {
    console.log('گوگل ری‌کپچا وریفای شد`');
    setIsGoogleRecaptchaVerify(true)
  }
  return (
    <>
      <Header />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                id='username'
                className="login-form__username-input"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                element='input'
                // validations={[{ value: 'required' }, { value: 'min', min: 8 }, { value: 'max', max: 20 }]}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  // emailValidator()
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                id='password'
                className="login-form__password-input"
                type="password"
                placeholder="رمز عبور"
                element='input'
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18)
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div className="login-form__password my-5">
              <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChangeHandler} />
            </div> {/*sitekey fake hast,dar site haye motabar aval bayad dar google ehraz hoviat kard ta sitekey motabar bede */}
            <Buttons className={`login-form__btn ${(formState.isFormValid && isGoogleRecaptchaVerify) ? 'bg-[#2bce56]' : '!bg-red-600'}`} type="submit" onClick={userLogin} disabled={!formState.isFormValid && !isGoogleRecaptchaVerify}>
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Buttons>

            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input className="login-form__password-checkbox" type="checkbox" />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
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
