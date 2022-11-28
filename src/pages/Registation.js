import React from 'react';
import axios from 'axios';
import { Ticket } from '../modules/Ticket/ticket';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      fatherName: '',
      phone: '',
      email: '',
      region: '',
      church: '',
      leader: '',
      old: '',
      sex: '',
      transport: '',
      submit: true,
      data: [],
    };
  }

  paymentDataInput;
  paymentSignatureInput;
  formRef;

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const {
      name,
      surname,
      fatherName,
      phone,
      email,
      region,
      church,
      leader,
      old,
      sex,
      transport,
      submit,
    } = this.state;
    axios
      .post('https://spiri-camp-user-registration.herokuapp.com', {
        name,
        surname,
        fatherName,
        phone,
        email,
        region,
        church,
        leader,
        old,
        sex,
        transport,
        submit,
      })
      .then(async ({ data }) => {
        const { paymentDataBase64, signature } = data;
        this.paymentDataInput.value = paymentDataBase64;
        this.paymentSignatureInput.value = signature;
        this.formRef.submit();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    axios
      .get('https://spiri-camp-user-registration.herokuapp.com')
      .then((response) => this.setState({ data: response.data }));
  }

  render() {
    const {
      name,
      phone,
      region,
      church,
      leader,
      old,
      sex,
      transport,
      submit,
      surname,
      fatherName,
      email,
      data,
    } = this.state;

    return (
      <div>
        <div className='comp reg'>
          <p className='title'>РЕЄСТРАЦІЯ</p>
          {data.length <= 550 ? (
            <div>
              <form className='inputs' onSubmit={this.submitHandler}>
                <div className='string'>
                  <div className='input_column'>
                    <label>Прізвище</label>
                    <input
                      className='input-add'
                      type='text'
                      name='surname'
                      required
                      value={surname}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className='input_column'>
                    <label>Ім'я</label>
                    <input
                      className='input-add'
                      type='text'
                      name='name'
                      required
                      value={name}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className='input_column'>
                    <label>По-батькові</label>
                    <input
                      className='input-add'
                      type='text'
                      name='fatherName'
                      required
                      value={fatherName}
                      onChange={this.changeHandler}
                    />
                  </div>
                </div>
                <div className='string'>
                  <div className='input_column'>
                    <label>Дата Народження</label>
                    <input
                      className='input-add'
                      type='date'
                      name='old'
                      required
                      value={old}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className='input_column'>
                    <label>Стать</label>
                    <select
                      className='input-add'
                      name='sex'
                      value={sex}
                      required
                      onChange={this.changeHandler}
                    >
                      <option value=''>Не вибрано</option>
                      <option value='Чоловіча'>Чоловіча</option>
                      <option value='Жіноча'>Жіноча</option>
                    </select>
                  </div>
                </div>
                <div className='string'>
                  <div className='input_column'>
                    <label>Номер телефону</label>
                    <input
                      placeholder='+380XXXXXXXXX'
                      className='input-add'
                      type='tel'
                      required
                      name='phone'
                      value={phone}
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className='input_column'>
                    <label>Еллектронна пошта</label>
                    <input
                      className='input-add'
                      required
                      type='email'
                      name='email'
                      value={email}
                      onChange={this.changeHandler}
                    />
                  </div>
                </div>
                <div className='string'>
                  <div className='input_column'>
                    <label>Область</label>
                    <input
                      className='input-add'
                      required
                      type='text'
                      name='region'
                      value={region}
                      onChange={this.changeHandler}
                    ></input>
                  </div>
                  <div className='input_column'>
                    <label>Церква(назва)</label>
                    <input
                      className='input-add'
                      required
                      type='text'
                      name='church'
                      value={church}
                      onChange={this.changeHandler}
                    ></input>
                  </div>
                  <div className='input_column'>
                    <label>Контакти Керівника молоді</label>
                    <input
                      className='input-add'
                      type='text'
                      name='leader'
                      value={leader}
                      onChange={this.changeHandler}
                      required
                    ></input>
                  </div>
                </div>

                <div className='string'>
                  <div className='input_column'>
                    <label>Транспорт</label>
                    <select
                      className='input-add'
                      name='transport'
                      value={transport}
                      onChange={this.changeHandler}
                      required
                    >
                      <option value=''>Не вибрано</option>
                      <option value='Я буду сам(а)'>Я буду сам(а)</option>
                      <option value='Мені потрібен транспорт'>
                        Мені потрібен транспорт
                      </option>
                    </select>
                  </div>
                </div>
                <div className='checkbox-group'>
                  <input
                    type='checkbox'
                    className='checked'
                    name='submit'
                    checked={submit === true}
                    onChange={this.changeHandler}
                    required
                  ></input>
                  <p className='reg-text'>
                    Я обіцяю дотримуватись всіх правил табору, які складені на
                    етично духовних засадах Біблії.
                  </p>
                </div>
                {/* <p className="reg-text passport">
              * з собою потрібно мати паспорт , ПЛР тест
            </p>  */}

                <button className='reg-button button' type='submit'>
                  ЗАРЕЄСТРУВАТИСЬ
                </button>
              </form>

              <p className='takefriend'>
                НЕ ЗАБУДЬ ПРО СВОГО ДРУГА СКИНЬ ЙОМУ ССИЛКУ МIСЦЯ ОБМЕЖЕНI
              </p>
            </div>
          ) : (
            <>123</>
          )}
          <form
            style={{ display: 'none' }}
            ref={(form) => (this.formRef = form)}
            method='POST'
            action='https://www.liqpay.ua/api/3/checkout'
            acceptCharset='utf-8'
          >
            <input
              type='hidden'
              name='data'
              value=''
              ref={(input) => {
                this.paymentDataInput = input;
              }}
            />
            <input
              type='hidden'
              name='signature'
              ref={(input) => {
                this.paymentSignatureInput = input;
              }}
              value=''
            />
          </form>
        </div>{' '}
      </div>
    );
  }
}
export default Registration;
