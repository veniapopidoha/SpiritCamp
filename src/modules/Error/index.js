import { Text, Wrap } from './style';
import error from "./cancel.png"

export const Error = () => {
  return(
    <Wrap>
      <img src={error} width="100px"/>
      <Text>Помилка</Text>
    </Wrap>
  );
}