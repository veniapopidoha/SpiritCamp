import { Text, Wrap, RegButton } from './style';
import success from './checked.png';

export const Success = () => {
 
  return (
    <Wrap>
      <img src={success} width='100px' />
      <Text>
        Вітаю!!!
        <br />
        Ви успішно зареєструвались в табір
        <br />
        <br />
        Ми надіслали вам білет на електрону пошту, якщо білет не прийде
        найближчим часом, напишіть нам
      </Text>
      <RegButton to='/'>На головну</RegButton>
    </Wrap>
  );
};
