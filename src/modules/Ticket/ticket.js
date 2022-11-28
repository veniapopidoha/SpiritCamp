import {
  Body,
  Grow,
  Id,
  Logo,
  Logo2,
  QrCover,
  ReversedId,
  Turn,
  Wrap,
} from './style';
import logo from './logo.jpeg';
import logo2 from './logo2.jpeg';
import html2canvas from 'html2canvas';
import emailjs from '@emailjs/browser';
import QrCode from 'react-qr-code';

const myData = {
  id: '1423rd2f43r2d2',
  email: 'veniamin.popidoha@gmail.com',
  name: 'Веніамін',
  surname: 'Попідоха',
  fatherName: 'Віталійович'
} 

export const Ticket = (props) => {
  const createdUser = myData;
  console.log(props);
  async function generateFile(createdUser) {
    await html2canvas(document.querySelector('#ticket'), {
      allowTaint: true,
      foreignObjectRendering: false,
      width: 952,
      height: 400,
    }).then(async (canvas) => {
      // document.body.appendChild(canvas);
      const img = await canvas.toDataURL('image/jpeg', 0.5);
      emailjs.send(
        'service_ila6exe',
        'template_46v5mk7',
        {
          userName: `${createdUser.surname} ${createdUser.name} ${createdUser.fatherName}`,
          canvas: img,
          email: createdUser.email,
        },
        '2OJRoQDqzFBArqs2H'
      );
    });
  }

  return (
    <Body >
      <Wrap id='ticket'>
        <Grow>
          place of your growth / spirit camp / place of your growth / spirit
          camp / place of your growth / spirit camp / place of your growth /
          spirit camp / place of your growth / spirit camp / place of your
          growth / spirit camp
        </Grow>
        <Logo src={logo} />
        <Id>{createdUser.id}</Id>
        <Turn>
          place of your growth / spirit camp / place of your growth / spirit
          camp / place of your growth / spirit camp / place of your growth /
          spirit camp / place of your growth / spirit camp / place of your
          growth / spirit camp
        </Turn>
        <QrCover>
          <QrCode
            value={'localhost:3000/profile?id=' + createdUser.id}
            size={140}
          ></QrCode>
        </QrCover>
        <Logo2 width='80px' src={logo2} />
        <ReversedId>{createdUser.id}</ReversedId>
      </Wrap>
      <button onClick={() => (generateFile(createdUser))}>Send</button>
    </Body>
  );
};
