import styled from 'styled-components';
import back from './back.jpeg'

export const Body = styled.body``;

export const Wrap = styled.div`
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #322a2d;
  height: 400px;
  width: 1024px;
  width: 100%;
  font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  padding: 0;
  margin: 0;
`;

export const Grow = styled.p`
  font-size: 12px;
  color: white;
  padding: 10px 0 10px 20px;
  width: 700px;
  height: 30px;
  overflow: hidden;
`;

export const Logo = styled.img`
  margin: 70px 100px 150px;
  width: 200px;
`;

export const Id = styled.h1`
  font-size: 11px !important;
  color: #fff !important;
  background-color: #7b607c;
  font-weight: 700;
  padding: 0 20px !important;
  letter-spacing: 2px;
  width: 200px;
  text-align: center;
  position: relative;
  bottom: 100px;
  left: 97px;
  margin: 0;
  line-height: 36px;
  mso-line-height-rule: exactly;
  font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: bold;
  color: #212121;
`;

export const Turn = styled.p`
  position: relative;
  border-top: 1px dashed #fff;
  left: 350px;
  bottom: 380px;
  transform: rotate(270deg);
  font-size: 12px;
  color: #fff;
  height: 15px;
  width: 768px;
  overflow: hidden;
  margin: 0;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
  mso-line-height-rule: exactly;
  font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif;
  line-height: 150%;
`;

export const Logo2 = styled.img`
  position: relative;
  left: 770px;
  bottom: 360px;
  margin: 100px 40px;
  display: block;
  border: 0;
  outline: none;
  text-decoration: none;
  -ms-interpolation-mode: bicubic;
`;

export const ReversedId = styled.h1`
  bottom: 520px;
  left: 800px;
  transform: rotate(270deg);
  font-size: 11px !important;
  color: #fff !important;
  background-color: #7b607c;
  font-weight: 700;
  padding: 0 20px !important;
  letter-spacing: 2px;
  width: 200px;
  text-align: center;
  position: relative;
  margin: 0;
  line-height: 36px;
  mso-line-height-rule: exactly;
  font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: bold;
  color: #212121;
`;

export const QrCover = styled.div`
  position: absolute;
  top: 125px;
  left: 450px;
  border: 10px solid #fff;
`;
