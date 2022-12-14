import React from 'react';
import axios from 'axios';
import { Ticket } from '../modules/Ticket/ticket';
import { Dots } from '../modules/Registration/loading';
import { AnimatedText, AText, TextWrap } from '../modules/Registration';

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
      loading: true,
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

  async componentDidMount() {
    await axios
      .get('https://spiri-camp-user-registration.herokuapp.com')
      .then((response) => this.setState({ data: response.data }));
    this.setState({ loading: false });
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
      loading,
    } = this.state;

    return (
      <div>
        {loading !== true ? (
          <div className='comp reg'>
            <p className='title'>????????????????????</p>
            {data.length < 550 ? (
              <div>
                <p className='attention'>
                  ???????????????? ?????????? ???? ???????????????? ?????????? ?????????????????????? ??????????, ???????? ????
                  ?????? ???????????? ??????????
                </p>
                <form className='inputs' onSubmit={this.submitHandler}>
                  <div className='string'>
                    <div className='input_column'>
                      <label>????????????????</label>
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
                      <label>????'??</label>
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
                      <label>????-????????????????</label>
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
                      <label>???????? ????????????????????</label>
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
                      <label>??????????</label>
                      <select
                        className='input-add'
                        name='sex'
                        value={sex}
                        required
                        onChange={this.changeHandler}
                      >
                        <option value=''>???? ??????????????</option>
                        <option value='????????????????'>????????????????</option>
                        <option value='????????????'>????????????</option>
                      </select>
                    </div>
                  </div>
                  <div className='string'>
                    <div className='input_column'>
                      <label>?????????? ????????????????</label>
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
                      <label>?????????????????????? ??????????</label>
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
                      <label>??????????????</label>
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
                      <label>????????????(??????????)</label>
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
                      <label>???????????????? ?????????????????? ????????????</label>
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
                      <label>??????????????????</label>
                      <select
                        className='input-add'
                        name='transport'
                        value={transport}
                        onChange={this.changeHandler}
                        required
                      >
                        <option value=''>???? ??????????????</option>
                        <option value='?? ???????? ??????(??)'>?? ???????? ??????(??)</option>
                        <option value='???????? ???????????????? ??????????????????'>
                          ???????? ???????????????? ??????????????????
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className='checkbox-group'>
                    <input
                      type='checkbox'
                      className='checked'
                      name='submit'
                      onChange={this.changeHandler}
                      required
                    ></input>
                    <p className='reg-text'>
                      ?? ???????????? ?????????????????????????? ???????? ???????????? ????????????, ?????? ???????????????? ????
                      ???????????? ???????????????? ?????????????? ????????????.
                    </p>
                  </div>
                  {/* <p className="reg-text passport">
              * ?? ?????????? ???????????????? ???????? ?????????????? , ?????? ????????
            </p>  */}

                  <button className='reg-button button' type='submit'>
                    ??????????????????????????????
                  </button>
                </form>

                <p className='takefriend'>
                  ???? ???????????? ?????? ?????????? ?????????? ?????????? ???????? ???????????? ??I?????? ??????????????I
                </p>
              </div>
            ) : (
              <TextWrap>
                <AnimatedText>
                  <svg viewBox='0 0 960 300'>
                    <symbol id='s-text'>
                      <text text-anchor='middle' x='50%' y='80%'>
                        ??????????????{' '}
                      </text>
                      <text text-anchor='middle' x='52%' y='80%'>
                        ??????????????{' '}
                      </text>
                    </symbol>

                    <g class='g-ants'>
                      <use href='#s-text' class='text-copy'></use>
                      <use href='#s-text' class='text-copy'></use>
                      <use href='#s-text' class='text-copy'></use>
                      <use href='#s-text' class='text-copy'></use>
                      <use href='#s-text' class='text-copy'></use>
                    </g>
                  </svg>
                </AnimatedText>
                <AText>
                  <div class='container'>
                    <div class='row'>
                      <div class='col-md-12 text-center'>
                        <h3 class='animate-charcter'> ?????????? ??????????</h3>
                      </div>
                    </div>
                  </div>
                </AText>
              </TextWrap>
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
          </div>
        ) : (
          <Dots>
            <h1 className='dots-flow'></h1>
          </Dots>
        )}
      </div>
    );
  }
}
export default Registration;
