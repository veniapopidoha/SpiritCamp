import { FlexStart, Info, Row, Wrap } from './style';
import axios from 'axios';
import { setState } from 'react';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';



export const Profile = () => {
  const [data, setData] = useState({
    data: {
      name: '',
      surname: '',
      fatherName: '',
      phone: '',
      region: '',
    },
  });
  const locationPage = useLocation();
  const userId = new URLSearchParams(locationPage.search).get('id');

  const getData = () => {
    axios
      .get(`https://spiri-camp-user-registration.herokuapp.com/${userId}`)
      .then((response) => setData({ data: response.data }));
  };

  
  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrap>
      <FlexStart>
        <Row>
          <Info>Ім`я:</Info>
          <Info>
            {data.data.surname +
              ' ' +
              data.data.name +
              ' ' +
              data.data.fatherName}
          </Info>
        </Row>
        <Row>
          <Info>Номер телефону:</Info>
          <Info>{data.data.phone}</Info>
        </Row>
        <Row>
          <Info>Область:</Info>
          <Info>{data.data.region}</Info>
        </Row>
        <Row>
          <Info>Дата народження:</Info>
          <Info>{data.data.old}</Info>
        </Row>
        <Row>
          <Info>Оплата:</Info>
          {data.data.paid ? <Info>Оплачено</Info> : <Info>Не оплачено</Info>}
        </Row>
        <Row>
          <Info>ID:</Info>
          <Info>{data.data._id}</Info>
        </Row>
        <Row>
          <Info>Транспорт:</Info>
          <Info>{data.data.transport}</Info>
        </Row>
      </FlexStart>
    </Wrap>
  );
};
