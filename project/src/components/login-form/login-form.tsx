import { useAppDispatch } from '../../hooks';
import { useState, FormEvent, ChangeEvent} from 'react';
import { loginAction } from '../../store/api-actions';

type FormData = {
  email: string;
  password: string;
};

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [isDisabledBtn, setDisabledBtn] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const getEmailPattern = (email: string): boolean => (/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/).test(email);
  const getPasswordPattern = (password: string): boolean => (/([0-9].*[a-z])|([a-z].*[0-9])/).test(password);
  const validateForm = (formField: FormData): boolean => {
    if (!getEmailPattern(formField.email)) {
      return false;
    }
    if (!getPasswordPattern(formField.password)) {
      return false;
    }

    return true;
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
    if(getEmailPattern(formData.email) && getPasswordPattern(formData.password)) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (validateForm(formData)) {
      dispatch(loginAction({
        login: formData.email,
        password: formData.password
      }));
    }
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>

      <form onSubmit={handleFormSubmit} className="login__form form" action="#" method="post">
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            onChange={handleFieldChange}
            value={formData.email}
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            title="Email, напрмер test@test.com"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            pattern="^(?=.*[a-zA-Zа-яА-Я])(?=.*\d)[^\s].+"
            onChange={handleFieldChange}
            value={formData.password}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            title="Пароль должен содержать не менее одной цифры и буквы"
            required
          />
        </div>

        <button className="login__submit form__submit button" type="submit" disabled={isDisabledBtn}>
          Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
